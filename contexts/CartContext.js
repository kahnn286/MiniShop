'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getCart, addToCart as addToCartUtil, removeFromCart as removeFromCartUtil, updateCartQuantity as updateCartQuantityUtil, clearCart as clearCartUtil, getCartTotal, getCartCount } from '@/lib/cart';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addToCart = (product) => {
    const updatedCart = addToCartUtil(product);
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = removeFromCartUtil(productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = updateCartQuantityUtil(productId, quantity);
    setCart(updatedCart);
  };

  const clearCart = () => {
    const updatedCart = clearCartUtil();
    setCart(updatedCart);
  };

  const total = getCartTotal();
  const count = getCartCount();

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
