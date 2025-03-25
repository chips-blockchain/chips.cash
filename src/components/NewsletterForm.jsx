import React, { useState } from 'react';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setStatus('');

    try {
      // Use the environment variable for the API URL
      await axios.post(`${import.meta.env.VITE_API_URL}/newsletter/subscribe`, { email });
      setMessage('Successfully subscribed to the newsletter!');
      setStatus('success');
      setEmail('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred while subscribing');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="neumorphic bg-dark-purple/30 rounded-lg p-8 max-w-3xl mx-auto my-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Stay Updated with CHIPS</h2>
      <p className="text-gray-300 mb-6 text-center">
        Subscribe to our newsletter for updates on decentralized poker, blockchain developments, and CHIPS ecosystem news.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-dark-purple/50 text-white border border-purple-800 focus:border-neon-purple focus:outline-none"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="px-6 py-3 bg-neon-purple text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {message && (
          <div className={`text-center p-2 rounded ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;