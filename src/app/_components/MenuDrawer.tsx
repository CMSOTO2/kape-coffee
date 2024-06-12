import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import Link from "next/link";

export function MenuDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">
          <Menu className="h-8 w-8" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mb-20">
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle className="text-center">Kape Coffe Co.</DrawerTitle>
          </DrawerHeader>
          <div className="w-full p-4 pb-0">
            <nav>
              <ul className="flex flex-col items-center justify-center gap-6">
                {navLinks.map((navLink) => {
                  return (
                    <Link
                      href={navLink.href}
                      key={navLink.href}
                      className="w-full"
                    >
                      <DrawerClose asChild>
                        <li className="w-full border-b-2 border-kape-black text-4xl font-semibold">
                          {navLink.label}
                        </li>
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
