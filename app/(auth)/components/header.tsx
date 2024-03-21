"use client";

import React from "react";
import { dark } from "@clerk/themes";
import { MainNav } from "./main-nav";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";

function Header() {
  const { resolvedTheme } = useTheme();

  return (
    <header className="flex items-center h-16 px-4 border-b w-full">
      <div className="flex items-center mr-auto">
        <UserButton
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
          }}
          afterSignOutUrl="/"
          userProfileProps={{
            appearance: {
              baseTheme: resolvedTheme === "dark" ? dark : undefined,
            },
          }}
        />
      </div>
      <MainNav />
      <div className="ml-4">
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
