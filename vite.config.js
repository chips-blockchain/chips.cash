import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Add CORS headers to prevent cross-origin requests to dev server
    cors: false,
    // Restrict file system access to project directory
    fs: {
      strict: true,
      // Explicitly deny access to sensitive directories
      deny: ['.env', '.git', 'node_modules/@vite/env']
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