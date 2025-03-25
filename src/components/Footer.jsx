import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-purple/30 backdrop-blur-md mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-purple">CHIPS.cash</h3>
            <p className="text-gray-300 mb-4">
              The foundation for decentralized gambling applications.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* GitHub Button */}
              <a href="https://github.com/chips-blockchain" target="_blank" rel="noopener noreferrer" className="social-btn github-btn">
                <span className="social-icon-container">
                  <svg fill="white" className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"></path>
                  </svg>
                </span>
                <span className="social-bg github-bg"></span>
              </a>

              {/* Twitter/X Button */}
              <a href="https://x.com/chipscurrency" target="_blank" rel="noopener noreferrer" className="social-btn twitter-btn">
                <span className="social-icon-container">
                  <svg fill="white" className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </span>
                <span className="social-bg twitter-bg"></span>
              </a>

              {/* Discord Button */}
              <a href="https://discord.gg/9XMYRXUUSP" target="_blank" rel="noopener noreferrer" className="social-btn discord-btn">
                <span className="social-icon-container">
                  <svg fill="white" className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                  </svg>
                </span>
                <span className="social-bg discord-bg"></span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-purple">Navigate</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-neon-purple transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-neon-purple transition-colors">About</Link></li>
              <li><Link to="/poker-info" className="text-gray-300 hover:text-neon-purple transition-colors">Poker</Link></li>
              <li><a href="https://github.com/chips-blockchain" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-purple">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://verus.io/wallet" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">VerusCoin Wallet</a></li>
              <li><a href="https://github.com/chips-blockchain/pangea-poker" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">Pangea Poker</a></li>
              <li><a href="https://chips-docs.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CHIPS.cash - All rights reserved - Design by <a href="https://www.refurbminer.de/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">Ch3ckr</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;