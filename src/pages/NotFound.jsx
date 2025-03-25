import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-neon-purple/10 glitch-text">404</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-neon-purple glitch-overlay">404</div>
        </div>
        
        <div className="cyber-panel max-w-2xl mx-auto p-8 mb-8">
          <div className="cyber-panel-border"></div>
          <h2 className="text-3xl font-bold mb-4 text-neon-purple">Signal Lost</h2>
          <p className="text-xl mb-6">The page you're looking for has been moved to another dimension or never existed in this reality.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Link to="/" className="btn-primary inline-flex items-center justify-center">
              <span className="mr-2">⬅</span> Return to Home Base
            </Link>
            <a 
              href="https://github.com/chips-blockchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Visit Repository <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        
        <div className="cyber-lines mt-4">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;