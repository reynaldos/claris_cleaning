import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { UpdateOrderResponse } from '@/types/admin';
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify auth token
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      const response: UpdateOrderResponse = {
        success: false,
        error: 'Unauthorized',
      };
      return NextResponse.json(response, { status: 401 });
    }

    const token = authHeader.replace('Bearer ', '');
    const valid = await verifyToken(token);

    if (!valid) {
      const response: UpdateOrderResponse = {
        success: false,
        error: 'Invalid token',
      };
      return NextResponse.json(response, { status: 401 });
    }

    const { id } = params;
    const { status } = await request.json();

    // Find and update order in mock data
    const orderIndex = MOCK_ORDERS.findIndex(order => order.id === id);

    if (orderIndex === -1) {
      const response: UpdateOrderResponse = {
        success: false,
        error: 'Order not found',
      };
      return NextResponse.json(response, { status: 404 });
    }

    // Update order
    MOCK_ORDERS[orderIndex] = {
      ...MOCK_ORDERS[orderIndex],
      status,
      shippedAt: status === 'shipped' ? Date.now() : undefined,
    };

    const response: UpdateOrderResponse = {
      success: true,
      order: MOCK_ORDERS[orderIndex],
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Order update error:', error);
    const response: UpdateOrderResponse = {
      success: false,
      error: 'Failed to update order',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
