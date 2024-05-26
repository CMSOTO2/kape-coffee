"use client";

interface Product {}
interface CartContext {
  cart: Product[];
  addToCart: () => void;
  removeFromCart: () => void;
  incrementItemQuantity: () => void;
  decrementItemQuantity: () => void;
}
