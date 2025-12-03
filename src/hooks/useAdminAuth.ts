"use client";

import { useState, useEffect } from 'react';
import { LoginCredentials, AuthResponse } from '@/types/admin';
import { setToken, getToken, removeToken, isAuthenticated as checkAuth } from '@/utils/adminAuth';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsAuthenticated(checkAuth());
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data: AuthResponse = await response.json();

      if (!data.success || !data.token) {
        throw new Error(data.error || 'Login failed');
      }

      setToken(data.token);
      setIsAuthenticated(true);
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
    setError(null);
  };

  return {
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
  };
}
