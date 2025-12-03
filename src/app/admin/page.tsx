"use client";

import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '@/utils/adminAuth';
import LoginForm from '@/components/Admin/LoginForm';
import OrdersTable from '@/components/Admin/OrdersTable';
import {
  Container,
  Header,
  Title,
  LogoutButton,
} from './admin.styles';
import { removeToken } from '@/utils/adminAuth';

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      setAuthenticated(isAuthenticated());
      setChecking(false);
    };

    checkAuth();

    // Poll for auth changes every 500ms
    const interval = setInterval(checkAuth, 500);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    removeToken();
    setAuthenticated(false);
  };

  if (checking) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: '64px' }}>
          Loading...
        </div>
      </Container>
    );
  }

  if (!authenticated) {
    return (
      <Container>
        <LoginForm />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Admin Dashboard</Title>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <OrdersTable />
    </Container>
  );
}
