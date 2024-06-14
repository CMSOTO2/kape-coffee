"use client";

import { Button } from "@/components/shadui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/shadui/sheet";
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
    incrementItem,
    decrementItem,
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
              <div className="flex h-full flex-col items-center justify-center">
                <h3 className="text-center text-lg">
                  There is currently nothing in your cart
                </h3>
                <Image src="/empty-cart.png" width={200} height={200} alt="" />
                <Button
                  onClick={() => handleCartClick()}
                  className="text-xl font-medium text-kape-green hover:text-kape-green/80"
                  variant="ghost"
                >
                  Continue Shopping
                </Button>
              </div>
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
                      <div className="mt-2 flex flex-1 items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>
                          <button
                            className="text-xl"
                            onClick={() => decrementItem(entry.id)}
                          >
                            -
                          </button>
                          <button
                            className="text-xl"
                            onClick={() => incrementItem(entry.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-semibold text-kape-green hover:text-kape-green/80"
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
            {cartCount === 0 ? null : (
              <div className="w-full border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal:</p>
                  <p>{formattedTotalPrice}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes are calculated at checkout.
                </p>
                <div className="mt-6">
                  <Button
                    className="w-full bg-kape-green hover:bg-kape-green/80"
                    onClick={handleCheckoutClick}
                  >
                    Checkout
                  </Button>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    OR{" "}
                    <button
                      onClick={() => handleCartClick()}
                      className="font-medium text-kape-green hover:text-kape-green/80"
                    >
                      Continue Shopping
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShoppingCartModal;
