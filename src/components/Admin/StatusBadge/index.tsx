"use client";

import React from 'react';
import { OrderStatus } from '@/types/admin';
import { Badge } from './StatusBadge.styles';

interface StatusBadgeProps {
  status: OrderStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return <Badge $status={status}>{status}</Badge>;
};

export default StatusBadge;
