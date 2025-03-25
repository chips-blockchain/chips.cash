import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-dark-purple">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl w-full"
      >
        <div className="mb-8">
          <div className="text-neon-purple text-9xl font-bold glitch-text">404</div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-2">Page Not Found</h1>
          <p className="text-xl text-gray-300">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="neumorphic bg-dark-purple/30 p-8 rounded-lg mb-8">
          <p className="mb-6 text-gray-300">
            It seems you've ventured into uncharted territory. Perhaps one of these links will help you find your way back:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-neon-purple text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-purple-700"
            >
              Return Home
            </Link>
            
            <Link
              to="/about"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-700"
            >
              About CHIPS
            </Link>
            
            <Link
              to="/contact"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-gray-700"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Cyberpunk-style decorative elements */}
        <div className="relative w-full h-16">
          <div className="absolute left-0 w-full h-px bg-neon-purple/50"></div>
          <div className="absolute left-1/4 top-2 w-1/2 h-px bg-neon-purple/70"></div>
          <div className="absolute left-1/3 top-4 w-1/3 h-px bg-neon-purple/90"></div>
          <div className="absolute left-0 top-0 w-8 h-8 border-l-2 border-t-2 border-neon-purple/70"></div>
          <div className="absolute right-0 top-0 w-8 h-8 border-r-2 border-t-2 border-neon-purple/70"></div>
          <div className="absolute left-0 bottom-0 w-8 h-8 border-l-2 border-b-2 border-neon-purple/70"></div>
          <div className="absolute right-0 bottom-0 w-8 h-8 border-r-2 border-b-2 border-neon-purple/70"></div>
        </div>
      </motion.div>

      {/* Add some CSS for the glitch effect */}
      <style jsx>{`
        .glitch-text {
          text-shadow: 
            0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
            0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          animation: glitch 500ms infinite;
        }
        
        @keyframes glitch {
          0% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: 
              -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: 
              -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 
              0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 
              0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: 
              -0.025em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;