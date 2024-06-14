"use client";

import { ENV_KEYS } from "@/lib/constants";
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const stripeKey = ENV_KEYS.STRIPE_PUBLIC_KEY as string;
  const isDevelopment = process.env.NODE_ENV === "development";
  const basePath = isDevelopment
    ? "http://localhost:3000"
    : "https://www.kapecoffee.co";

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      successUrl={`${basePath}/checkout/success`}
      cancelUrl={`${basePath}/`}
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
