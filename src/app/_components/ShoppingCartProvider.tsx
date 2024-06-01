"use client";

import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      successUrl="http://localhost:3000/checkout/success"
      cancelUrl="http://localhost:3000/checkout/error"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};

export default ShoppingCartProvider;
