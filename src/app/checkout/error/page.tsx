"use client";

import { ClearCartDialog } from "@/app/_components/ClearCartDialog";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import { CircleX } from "lucide-react";
import Link from "next/link";

const CheckoutError = () => {
  return (
    <div className="h-screen bg-kape-beige px-4">
      <div className="mx-auto pt-32 md:max-w-[50vw]">
        <CircleX className="mx-auto my-6 h-20 w-20 text-red-600" />
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 md:text-4xl">
            Payment Cancelled!
          </h1>
          <p>Don&apos;t worry, Your items are still in your cart.</p>

          <div className="mt-5 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button variant="secondary" asChild>
              <Link href={routes.HOME}>Go back to main page</Link>
            </Button>
            <ClearCartDialog />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutError;
