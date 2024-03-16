"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Signin() {
  const { resolvedTheme } = useTheme();

  return (
    <main className="flex flex-1 flex-col items-center justify-start pt-8">
      <SignIn
        appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
      />
    </main>
  );
}
