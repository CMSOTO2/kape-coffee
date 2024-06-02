"use client";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutSuccess = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="h-screen bg-kape-beige">
      <div className="mx-auto pt-32 md:max-w-[50vw]">
        <CheckCheck className="mx-auto my-6 h-20 w-20 text-green-600" />
        <div className="text-center">
          <h1 className="text-base font-semibold text-gray-900 md:text-2xl">
            Payment Done!
          </h1>
          <p>Thank you for your purchase. We hope you enjoy it.</p>
          <p>Have a great day!</p>

          <Button className="mt-5" asChild>
            <Link href={routes.HOME}>Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutSuccess;
