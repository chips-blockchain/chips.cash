import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Explicitly bind to localhost only
    host: 'localhost',
    // Add CORS headers to prevent cross-origin requests to dev server
    cors: false,
    // Restrict file system access to project directory
    fs: {
      strict: true,
      allow: ['./src']
    },
    // Optional: Add HTTP headers for additional security
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    }
  },
  // Prevent leaking of source maps in development
  build: {
    sourcemap: process.env.NODE_ENV === 'production' ? false : 'inline'
  }
});