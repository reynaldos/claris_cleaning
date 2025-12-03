import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { OrdersResponse } from '@/types/admin';
import { MOCK_ORDERS } from '@/constants/mockOrders';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-change-in-production';

async function verifyToken(token: string): Promise<boolean> {
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify auth token
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      const response: OrdersResponse = {
        success: false,
        error: 'Unauthorized',
      };
      return NextResponse.json(response, { status: 401 });
    }

    const token = authHeader.replace('Bearer ', '');
    const valid = await verifyToken(token);

    if (!valid) {
      const response: OrdersResponse = {
        success: false,
        error: 'Invalid token',
      };
      return NextResponse.json(response, { status: 401 });
    }

    // Sort orders by created date (newest first)
    const sortedOrders = [...MOCK_ORDERS].sort((a, b) => b.created - a.created);

    const response: OrdersResponse = {
      success: true,
      orders: sortedOrders,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Orders fetch error:', error);
    const response: OrdersResponse = {
      success: false,
      error: 'Failed to fetch orders',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
