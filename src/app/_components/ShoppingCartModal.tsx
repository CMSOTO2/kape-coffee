"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    formattedTotalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const handleCheckoutClick = async (event: any) => {
    event?.preventDefault();

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart ({cartCount})</SheetTitle>
          </SheetHeader>
          <div className="flex h-full flex-col justify-between">
            {cartCount === 0 ? (
              <h3>There is currently nothing in your cart</h3>
            ) : (
              <ul className="overflow-y-auto">
                {Object.values(cartDetails ?? {}).map((entry) => (
                  <li key={entry.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={entry.image as string}
                        alt={entry.name + "product image"}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h4>{entry.name}</h4>
                          <p className="ml-4">{entry.formattedValue}</p>
                        </div>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                          {entry.description}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">QTY: {entry.quantity}</p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-purple-400 hover:text-purple-400/80"
                            onClick={() => removeItem(entry.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="w-full border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal:</p>
                <p>{formattedTotalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes are calculated at checkout.
              </p>
              <div className="mt-6">
                <Button className="w-full" onClick={handleCheckoutClick}>
                  Checkout
                </Button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  OR{" "}
                  <button
                    onClick={() => handleCartClick()}
                    className="font-medium text-purple-400 hover:text-purple-400/80"
                  >
                    Continue Shopping
                  </button>
                </p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShoppingCartModal;
