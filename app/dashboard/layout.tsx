"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { MainNav } from "./components/main-nav";
import { Search } from "./components/search";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { resolvedTheme } = useTheme();
  return (
    <>
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
      {children}
      <Footer />
    </>
  );
}
