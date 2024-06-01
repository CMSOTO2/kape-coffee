"use client";

import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY as string}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/error"
      currency="USD"
      billingAddressCollection
      shouldPersist
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};

export default ShoppingCartProvider;
