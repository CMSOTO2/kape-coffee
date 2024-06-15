"use client";

import { ENV_KEYS, ROUTES, basePath } from "@/lib/constants";
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const stripeKey = ENV_KEYS.STRIPE_PUBLIC_KEY as string;

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      successUrl={`${basePath}${ROUTES.CHECKOUT_SUCCESS}`}
      cancelUrl={`${basePath}${ROUTES.HOME}`}
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
