"use client";

import Link from "next/link";
import { navLinks, ROUTES } from "@/lib/constants";
import KapeLogo from "@/app/_components/KapeLogo";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";
import ShoppingCartModal from "@/app/_components/ShoppingCartModal";
import { ShoppingBag } from "lucide-react";
import { NavigationMenuDesktop } from "@/app/_components/NavMenu";

export function Navbar() {
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <header className="sticky left-0 top-0 z-50 border-b-2 border-kape-black bg-kape-beige px-4">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between py-4 md:px-6 md:py-4">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href={ROUTES.HOME}
        >
          <KapeLogo width="70" height="60" />
          <span className="sr-only">Kape</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavigationMenuDesktop />
          {/* {navLinks.map((navLink) => {
            return (
              <Link
                key={navLink.label}
                className="text-[1rem] text-kape-black transition-colors hover:text-gray-900 hover:underline"
                href={navLink.href}
              >
                {navLink.label}
              </Link>
            );
          })} */}
        </nav>
        <Button
          onClick={() => handleCartClick()}
          variant="ghost"
          className="p-0"
        >
          <span>{cartCount}</span>
          <ShoppingBag />
        </Button>
        <div className="hidden">
          <ShoppingCartModal />
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
