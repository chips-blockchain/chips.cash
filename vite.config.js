import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Load env variables for the current mode
  const env = loadEnv(mode, process.cwd());
  
  return {
    plugins: [react()],
    // Define base path - useful for GitHub Pages or subdirectory deployments
    base: '/',
    server: {
      port: 3000,
      open: true,
      // In development, restrict to localhost
      ...(mode === 'development' && {
        host: 'localhost',
        cors: false,
        fs: {
          strict: true,
          allow: ['./src'],
          deny: ['.env', '.git', 'node_modules/@vite/env']
        },
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY'
        }
      })
    },
    // Prevent leaking of source maps in production
    build: {
      sourcemap: mode === 'development',
      // Optimize bundle size
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
            vendor: ['framer-motion', 'axios']
          }
        }
      },
      // Minify output
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    // Add alias for cleaner imports
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  };
});