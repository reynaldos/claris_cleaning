"use client";

import React, { useState } from 'react';
import { Order } from '@/types/admin';
import StatusBadge from '../StatusBadge';
import {
  Row,
  Cell,
  OrderId,
  CustomerInfo,
  ItemsList,
  Total,
  Date as DateCell,
  ActionButton,
} from './OrderRow.styles';
import { getToken } from '@/utils/adminAuth';

interface OrderRowProps {
  order: Order;
  onStatusUpdate: (orderId: string, newStatus: 'shipped') => void;
}

const OrderRow: React.FC<OrderRowProps> = ({ order, onStatusUpdate }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  const formatDate = (timestamp: number) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(timestamp * 1000));
  };

  const handleMarkAsShipped = async () => {
    if (!confirm('Mark this order as shipped?')) {
      return;
    }

    setIsUpdating(true);

    try {
      const token = getToken();
      const response = await fetch(`/api/admin/orders/${order.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: 'shipped' }),
      });

      if (!response.ok) {
        throw new Error('Failed to update order');
      }

      onStatusUpdate(order.id, 'shipped');
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update order status. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Row>
      <Cell data-label="Order ID">
        <OrderId>{order.id}</OrderId>
      </Cell>
      <Cell data-label="Customer">
        <CustomerInfo>
          <span className="name">{order.customer_details.name}</span>
          <span className="email">{order.customer_details.email}</span>
        </CustomerInfo>
      </Cell>
      <Cell data-label="Items">
        <ItemsList>
          {order.line_items.map((item) => (
            <div key={item.id} className="item">
              {item.description} (x{item.quantity})
            </div>
          ))}
        </ItemsList>
      </Cell>
      <Cell data-label="Total">
        <Total>{formatPrice(order.amount_total)}</Total>
      </Cell>
      <Cell data-label="Status">
        <StatusBadge status={order.status} />
      </Cell>
      <Cell data-label="Date">
        <DateCell>{formatDate(order.created)}</DateCell>
      </Cell>
      <Cell data-label="Action">
        {order.status === 'pending' && (
          <ActionButton onClick={handleMarkAsShipped} disabled={isUpdating}>
            {isUpdating ? 'Updating...' : 'Mark as Shipped'}
          </ActionButton>
        )}
      </Cell>
    </Row>
  );
};

export default OrderRow;
