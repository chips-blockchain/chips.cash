import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ErrorPage = () => {
  const { code = "500" } = useParams();
  
  // Define error messages for common error codes
  const errorMessages = {
    "400": "Bad Request - Your browser sent something the server couldn't understand.",
    "401": "Unauthorized - Authentication is required to access this resource.",
    "403": "Forbidden - You don't have permission to access this resource.",
    "404": "Not Found - The page you requested doesn't exist.",
    "500": "Internal Server Error - Something went wrong on our end.",
    "502": "Bad Gateway - The server received an invalid response.",
    "503": "Service Unavailable - The server is temporarily unavailable.",
    "504": "Gateway Timeout - The server took too long to respond."
  };
  
  const message = errorMessages[code] || "An unexpected error occurred.";
  
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-neon-purple/10 glitch-text">{code}</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-neon-purple glitch-overlay">{code}</div>
        </div>
        
        <div className="cyber-panel max-w-2xl mx-auto p-8 mb-8">
          <div className="cyber-panel-border"></div>
          <h2 className="text-3xl font-bold mb-4 text-neon-purple">System Error</h2>
          <p className="text-xl mb-6">{message}</p>
          
          <div className="tech-details p-4 bg-dark-purple/30 rounded-md mb-6 text-left">
            <p className="font-mono text-sm text-gray-300">
              <span className="text-neon-purple"></span> Error Code: {code}<br />
              <span className="text-neon-purple"></span> Timestamp: {new Date().toISOString()}<br />
              <span className="text-neon-purple"></span> Protocol: HTTP/1.1<br />
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Link to="/" className="btn-primary inline-flex items-center justify-center">
              <span className="mr-2">⬅</span> Return to Home Base
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center justify-center"
            >
              Go Back <span className="ml-2">↩</span>
            </button>
          </div>
        </div>
        
        <div className="cyber-lines mt-4">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;