"use client";

import React, { useEffect, useState } from 'react';
import { Order, OrdersResponse } from '@/types/admin';
import { getToken } from '@/utils/adminAuth';
import OrderRow from '../OrderRow';
import {
  TableContainer,
  Table,
  TableHead,
  HeaderRow,
  HeaderCell,
  TableBody,
  LoadingContainer,
  EmptyContainer,
  ErrorContainer,
} from './OrdersTable.styles';

const OrdersTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = getToken();
      const response = await fetch('/api/admin/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data: OrdersResponse = await response.json();

      if (!data.success || !data.orders) {
        throw new Error(data.error || 'Failed to fetch orders');
      }

      setOrders(data.orders);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch orders';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = (orderId: string, newStatus: 'shipped') => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus, shippedAt: Date.now() / 1000 }
          : order
      )
    );
  };

  if (isLoading) {
    return (
      <TableContainer>
        <LoadingContainer>Loading orders...</LoadingContainer>
      </TableContainer>
    );
  }

  if (error) {
    return (
      <TableContainer>
        <ErrorContainer>
          <p>{error}</p>
        </ErrorContainer>
      </TableContainer>
    );
  }

  if (orders.length === 0) {
    return (
      <TableContainer>
        <EmptyContainer>
          <p>No orders found</p>
        </EmptyContainer>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <HeaderRow>
            <HeaderCell>Order ID</HeaderCell>
            <HeaderCell>Customer</HeaderCell>
            <HeaderCell>Items</HeaderCell>
            <HeaderCell>Total</HeaderCell>
            <HeaderCell>Status</HeaderCell>
            <HeaderCell>Date</HeaderCell>
            <HeaderCell>Action</HeaderCell>
          </HeaderRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              onStatusUpdate={handleStatusUpdate}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
