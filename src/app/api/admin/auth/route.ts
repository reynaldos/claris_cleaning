import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { LoginCredentials, AuthResponse } from '@/types/admin';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-change-in-production';
const VALID_USERNAME = 'demo_user';
const VALID_PASSWORD = 'Password123';

export async function POST(request: NextRequest) {
  try {
    const credentials: LoginCredentials = await request.json();

    // Validate credentials
    if (credentials.username !== VALID_USERNAME || credentials.password !== VALID_PASSWORD) {
      const response: AuthResponse = {
        success: false,
        error: 'Invalid username or password',
      };
      return NextResponse.json(response, { status: 401 });
    }

    // Generate JWT token
    const secret = new TextEncoder().encode(JWT_SECRET);
    const token = await new SignJWT({ username: credentials.username })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret);

    const response: AuthResponse = {
      success: true,
      token,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Auth error:', error);
    const response: AuthResponse = {
      success: false,
      error: 'Authentication failed',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
