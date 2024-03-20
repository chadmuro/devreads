import Link from "next/link";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <nav className="hidden md:flex space-x-4">
        <Link
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/dashboard"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/library"
        >
          Library
        </Link>
        <Link
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/settings"
        >
          Settings
        </Link>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Icons.menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/dashboard">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/library">Library</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
