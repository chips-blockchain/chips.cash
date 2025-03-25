import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label="Toggle theme"
    >
      <div className="toggle-circle">
        {theme === 'dark' ? <FaMoon className="text-purple-900" /> : <FaSun className="text-yellow-500" />}
      </div>
    </button>
  );
};

export default ThemeToggle;