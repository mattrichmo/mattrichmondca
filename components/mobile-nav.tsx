import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface MobileNavProps {
  items?: NavItem[];
  onItemClick?: () => void;
}

export function MobileNav({ items, onItemClick }: MobileNavProps) {
  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="mt-24 flex h-full flex-col items-center space-y-4">
      <Link 
      href="/" 
      className="mb-12 flex items-center space-x-2"
      onClick={handleItemClick}
      >
        <Icons.logo className="h-12 w-12" />
        <span className="inline-block text-xl font-bold text-foreground">{siteConfig.name}</span>
      </Link>
      <div className="mt-12 flex">
        {items?.length ? (
          <nav className="flex flex-col items-center space-y-4 text-xl text-foreground sm:text-xl">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-2xl font-bold",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                    onClick={handleItemClick}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
    </div>
  );
}