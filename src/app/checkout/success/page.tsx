"use client";

import React, { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutSuccess = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return <div>CheckoutSuccess</div>;
};
export default CheckoutSuccess;
