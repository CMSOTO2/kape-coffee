"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  id: string;
}

const AddToCart = ({
  currency,
  description,
  price,
  image,
  name,
  id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name,
    description,
    price,
    currency,
    image,
    id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
      className="bg-kape-green"
    >
      Add to cart
    </Button>
  );
};

export default AddToCart;
