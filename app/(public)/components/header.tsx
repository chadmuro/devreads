"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Icons } from "@/components/icons";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b w-full">
      <Link className="mr-auto" href="/">
        <Icons.logo className="h-6 w-6" />
        <span className="sr-only">Dev Reads</span>
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/"
        >
          Home
        </Link>
        <SignedOut>
          <Link
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            href="/sign-up"
          >
            Sign up
          </Link>
          <Link
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            href="/sign-in"
          >
            Sign in
          </Link>
        </SignedOut>
        <SignedIn>
          <Link
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <SignOutButton>
            <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Sign out
            </button>
          </SignOutButton>
        </SignedIn>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Icons.menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <SignedOut>
            <DropdownMenuItem asChild>
              <Link href="/sign-up">Sign up</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/sign-in">Sign in</Link>
            </DropdownMenuItem>
          </SignedOut>
          <SignedIn>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <SignOutButton>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </SignOutButton>
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="ml-4">
        <ModeToggle />
      </div>
    </header>
  );
}
