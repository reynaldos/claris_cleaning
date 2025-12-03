export type OrderStatus = 'pending' | 'shipped';

export interface OrderLineItem {
  id: string;
  description: string;
  quantity: number;
  amount_total: number;
}

export interface ShippingAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface CustomerDetails {
  name: string;
  email: string;
  phone?: string;
}

export interface ShippingDetails {
  name: string;
  address: ShippingAddress;
}

export interface Order {
  id: string;
  created: number;
  amount_total: number;
  currency: string;
  customer_email: string;
  customer_details: CustomerDetails;
  shipping_details: ShippingDetails;
  line_items: OrderLineItem[];
  payment_status: string;
  status: OrderStatus;
  shippedAt?: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  error?: string;
}

export interface OrdersResponse {
  success: boolean;
  orders?: Order[];
  error?: string;
}

export interface UpdateOrderResponse {
  success: boolean;
  order?: Order;
  error?: string;
}
