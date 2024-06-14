import { Button } from "@/components/shadui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadui/drawer";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export function MenuDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-8 w-8" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mb-4">
        <div className="mx-auto w-full">
          <DrawerHeader className="flex items-center justify-center">
            <Image src="/Kape-Logo-2024.png" alt="" width={60} height={60} />
          </DrawerHeader>
          <div className="w-full px-4 pb-0">
            <nav>
              <ul className="flex flex-col items-center justify-center gap-6">
                {navLinks.map((navLink) => {
                  return (
                    <Link
                      href={navLink.href}
                      key={navLink.href}
                      className="w-full border-b-2 border-kape-black text-2xl font-semibold last-of-type:border-none"
                    >
                      <DrawerClose asChild>
                        <li className="w-full">{navLink.label}</li>
                      </DrawerClose>
                    </Link>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
