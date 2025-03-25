import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '../context/ThemeContext';

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-theme-primary">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;