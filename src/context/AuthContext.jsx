import React, { createContext, useState, useEffect, useContext } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [adminData, setAdminData] = useState(null);

  // Check if token exists and is valid on initial load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('adminToken');
      console.log('Checking authentication with token:', token ? 'Present' : 'Missing');
      
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        // Validate token by making a request to a protected endpoint
        const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/dashboard`, {
          headers: {
            'x-auth-token': token
          }
        });

        console.log('Auth validation response:', response.status);

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          // If token is invalid, remove it
          localStorage.removeItem('adminToken');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Auth validation error:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (username, password) => {
    try {
      console.log('Attempting login with:', username);
      console.log('API URL:', `${import.meta.env.VITE_API_URL}/admin/login`);
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('Login response:', response.status, data);

      if (response.ok && data.token) {
        console.log('Login successful, token received');
        
        // Store token in localStorage
        localStorage.setItem('adminToken', data.token);
        
        // Verify token was stored correctly
        const storedToken = localStorage.getItem('adminToken');
        console.log('Token stored successfully:', 
          storedToken ? 'Yes' : 'No', 
          storedToken ? storedToken.substring(0, 10) + '...' : 'none');
        
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setAdminData(null);
  };

  // Get the auth token
  const getToken = () => {
    const token = localStorage.getItem('adminToken');
    return token;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        login,
        logout,
        getToken,
        adminData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

export default AuthContext;