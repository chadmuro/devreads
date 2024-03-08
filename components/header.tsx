/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7sv6eip55Aa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b w-full">
      <Link className="mr-auto" href="#">
        <FlagIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link className="font-medium" href="#">
          Home
        </Link>
        <Link className="font-medium" href="#">
          Features
        </Link>
        <Link className="font-medium" href="#">
          Pricing
        </Link>
        <Link className="font-medium" href="#">
          Team
        </Link>
        <Link className="font-medium" href="#">
          Contact
        </Link>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link className="block py-2 font-medium" href="#">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="block py-2 font-medium" href="#">
              Features
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="block py-2 font-medium" href="#">
              Pricing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="block py-2 font-medium" href="#">
              Team
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="block py-2 font-medium" href="#">
              Contact
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="ml-4">
        <ModeToggle />
      </div>
    </header>
  );
}

function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
