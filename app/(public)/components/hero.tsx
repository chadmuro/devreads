import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none pb-1 bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:to-gray-400 from-black to-gray-500">
                Revolutionize Your Reading Experience
              </h1>
              <p className="max-w-[600px] text-zinc-800 md:text-xl dark:text-zinc-100 mx-auto">
                Join us and taking your tech knowledge to the next level through
                the power of books.
              </p>
            </div>
            <SignedOut>
              <Link href="/sign-up" passHref>
                <Button className="w-full max-w-sm">Get started</Button>
              </Link>
              <p className="text-xs text-zinc-800 dark:text-zinc-100">
                Get ready to redefine your reading experience.
                <Link className="underline underline-offset-2" href="/">
                  Terms & Conditions
                </Link>
              </p>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" passHref>
                <Button className="w-full max-w-sm">Get started</Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </section>
  );
}
