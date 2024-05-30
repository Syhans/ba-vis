"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="sticky top-0 z-20 w-full bg-transparent">
      <div className="pointer-events-none absolute z-[-1] h-full w-full bg-gray-50/85 shadow shadow-black/10 backdrop-blur-md dark:bg-gray-950/85 dark:shadow-white/10" />
      <nav className="mx-auto flex h-16 max-w-[90rem] items-center justify-end gap-2 bg-transparent px-6">
        <NavigationMenu>
          <NavigationMenuList>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuItem
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:cursor-pointer",
                )}
              >
                Home
              </NavigationMenuItem>
            </Link>
            <Link href="/by-height" legacyBehavior passHref>
              <NavigationMenuItem
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:cursor-pointer",
                )}
              >
                By Height
              </NavigationMenuItem>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}
