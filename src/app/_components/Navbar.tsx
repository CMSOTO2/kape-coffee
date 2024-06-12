"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import KapeLogo from "@/app/_components/KapeLogo";
import { Button } from "../../components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import ShoppingCartModal from "@/app/_components/ShoppingCartModal";
import { ShoppingBag } from "lucide-react";
import { NavigationMenuDesktop } from "@/app/_components/NavMenu";
import { MenuDrawer } from "./MenuDrawer";

export function Navbar() {
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <header className="sticky left-0 top-0 z-50 border-b-2 border-kape-black bg-kape-beige px-4">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between py-4 md:px-6 md:py-4">
        <div className="md:hidden">
          {/* Mobile Menu */}
          <MenuDrawer />
        </div>
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href={ROUTES.HOME}
        >
          <KapeLogo width="70" height="60" />
          <span className="sr-only">Kape</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavigationMenuDesktop />
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