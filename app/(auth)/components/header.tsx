"use client";

import React from "react";
import { dark } from "@clerk/themes";
import { MainNav } from "./main-nav";
import { UserButton } from "@clerk/nextjs";
import { Search } from "./search";
import { useTheme } from "next-themes";

function Header() {
  const { resolvedTheme } = useTheme();

  return (
    <header className="border-b w-full">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />

          <UserButton
            appearance={{
              baseTheme: resolvedTheme === "dark" ? dark : undefined,
            }}
            afterSignOutUrl="/"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
