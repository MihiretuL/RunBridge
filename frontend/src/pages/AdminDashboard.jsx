import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('New'); // 'New' | 'Replied' | 'All'
  const navigate = useNavigate(); 

  // Fetch messages from your database
  useEffect(() => {
    // 1. SECURITY CHECK: Check if token exists
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect if not logged in
      return;
    }
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      setMessages(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setLoading(false);
    }
  };

  // Function to mark a message as "Replied" or "Archived"
  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/contact/${id}`, { status: newStatus });
      // Refresh local list
      setMessages(msgs => msgs.map(msg => 
        msg._id === id ? { ...msg, status: newStatus } : msg
      ));
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // Filter logic for tabs
  const displayedMessages = activeTab === 'All' 
    ? messages 
    : messages.filter(msg => msg.status === activeTab || (activeTab === 'New' && msg.status === 'New'));

  if (loading) return <div className="p-10 text-center">Loading Command Center...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">RunBridge Command Center</h1>
            <p className="text-gray-500">Manage scouting leads and inquiries.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded shadow text-sm font-mono">
            Total Leads: {messages.length}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="bg-white rounded-xl shadow-sm p-4 h-fit">
            <h3 className="font-bold text-gray-400 uppercase text-xs tracking-wider mb-4">Inbox</h3>
            <button 
              onClick={() => setActiveTab('New')}
              className={`w-full text-left px-4 py-2 rounded mb-1 flex justify-between ${activeTab === 'New' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <span>New Inquiries</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                {messages.filter(m => m.status === 'New').length}
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('Replied')}
              className={`w-full text-left px-4 py-2 rounded mb-1 ${activeTab === 'Replied' ? 'bg-green-50 text-green-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Replied / Closed
            </button>
            <button 
              onClick={() => setActiveTab('All')}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === 'All' ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              All Messages
            </button>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-4">
            {displayedMessages.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl text-gray-400 border border-dashed">
                No messages found in this folder.
              </div>
            ) : (
              displayedMessages.map(msg => (
                <div key={msg._id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition hover:shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 text-xs font-bold uppercase rounded ${
                          msg.reason === 'representation' ? 'bg-purple-100 text-purple-700' :
                          msg.reason === 'sponsorship' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {msg.reason}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{msg.name}</h3>
                      <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline text-sm">
                        {msg.email}
                      </a>
                    </div>
                    
                    {/* Status Toggle Button */}
                    <select 
                      value={msg.status} 
                      onChange={(e) => updateStatus(msg._id, e.target.value)}
                      className="text-sm border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="New">New</option>
                      <option value="Replied">Mark Replied</option>
                      <option value="Archived">Archive</option>
                    </select>
                  </div>

                  {/* Context Alert (if specific athlete) */}
                  {msg.inquiryContext && msg.inquiryContext !== 'General Inquiry' && (
                    <div className="bg-blue-50 text-blue-800 text-xs px-3 py-2 rounded mb-3 border-l-4 border-blue-400">
                      <strong>Context:</strong> {msg.inquiryContext}
                    </div>
                  )}

                  <div className="bg-gray-50 p-4 rounded text-gray-700 text-sm whitespace-pre-wrap">
                    {msg.message}
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <a 
                      href={`mailto:${msg.email}?subject=Re: RunBridge Inquiry&body=Hi ${msg.name.split(' ')[0]},%0D%0A%0D%0AThank you for contacting RunBridge Pro.`}
                      className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      Reply via Email
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;