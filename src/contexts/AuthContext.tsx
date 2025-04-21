import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Mock user data
type User = {
  id: string;
  username: string;
  isAdmin: boolean;
} | null;

interface AuthContextType {
  user: User;
  login: (username: string, password: string) => Promise<boolean>;
  signup: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      // Mock authentication - In a real app, this would be an API call
      if (username && password) {
        // For demo purposes - admin user
        const isAdmin = username.toLowerCase() === 'admin' && password === 'admin123';
        
        const user = {
          id: Math.random().toString(36).substring(2, 9),
          username,
          isAdmin
        };
        
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (username: string, password: string) => {
    try {
      // Mock signup - In a real app, this would be an API call
      if (username && password) {
        const user = {
          id: Math.random().toString(36).substring(2, 9),
          username,
          isAdmin: false
        };
        
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};