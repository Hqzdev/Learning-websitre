import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient, User } from '../services/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (userData: {
    username: string;
    email: string;
    password: string;
    fullName?: string;
  }) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: { fullName?: string; email?: string }) => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (apiClient.isAuthenticated()) {
          const userData = await apiClient.getProfile();
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error);
        apiClient.logout();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await apiClient.login({ username, password });
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData: {
    username: string;
    email: string;
    password: string;
    fullName?: string;
  }) => {
    try {
      const response = await apiClient.register(userData);
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    apiClient.logout();
    setUser(null);
  };

  const updateProfile = async (userData: { fullName?: string; email?: string }) => {
    try {
      const updatedUser = await apiClient.updateProfile(userData);
      setUser(updatedUser);
    } catch (error) {
      throw error;
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    try {
      await apiClient.changePassword({ currentPassword, newPassword });
    } catch (error) {
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
