"use client";

import React, { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { RxCross1 } from 'react-icons/rx';
import CartItemRow from './CartItem';
import Button from '../Buttons';
import {
  Overlay,
  SidebarContainer,
  Header,
  CloseButton,
  ItemsContainer,
  Footer,
  EmptyCart,
  TotalRow,
} from './Cart.styles';
import { lock as disableBodyScroll, unlock as enableBodyScroll } from 'tua-body-scroll-lock';

const CartSidebar = () => {
  const { cart, closeCart, cartTotal, clearCart } = useCart();

  useEffect(() => {
    if (cart.isOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return () => enableBodyScroll();
  }, [cart.isOpen]);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart.items }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.url) {
        throw new Error('No checkout URL received from server');
      }

      window.location.href = data.url;
    } catch (error) {
      console.error('Checkout error:', error);
      const errorMessage = error instanceof Error
        ? error.message
        : 'There was an error processing your checkout. Please try again.';
      alert(errorMessage);
    }
  };

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  return (
    <>
      <Overlay $isOpen={cart.isOpen} onClick={closeCart} />
      <SidebarContainer $isOpen={cart.isOpen}>
        <Header>
          <h2>Your Cart</h2>
          <CloseButton onClick={closeCart} aria-label="Close cart">
            <RxCross1 size={24} />
          </CloseButton>
        </Header>

        <ItemsContainer>
          {cart.items.length === 0 ? (
            <EmptyCart>
              <p>Your cart is empty</p>
              <Button onClick={closeCart}>Continue Shopping</Button>
            </EmptyCart>
          ) : (
            cart.items.map((item) => (
              <CartItemRow key={item.id} item={item} />
            ))
          )}
        </ItemsContainer>

        {cart.items.length > 0 && (
          <Footer>
            <TotalRow>
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </TotalRow>
            <p className="shipping-note">Shipping calculated at checkout</p>
            <Button onClick={handleCheckout}>Checkout</Button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </Footer>
        )}
      </SidebarContainer>
    </>
  );
};

export default CartSidebar;
