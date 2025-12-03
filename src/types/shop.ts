// Product type definition
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents for Stripe compatibility
  image: string; // path to product image
  category: 'supplies' | 'equipment' | 'bundles';
  inStock: boolean;
}

// Cart item extends Product with quantity
export interface CartItem extends Product {
  quantity: number;
}

// Cart state structure
export interface CartState {
  items: CartItem[];
  isOpen: boolean; // controls sidebar visibility
}

// Cart context type
export interface CartContextType {
  cart: CartState;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  cartTotal: number;
  cartCount: number;
}
