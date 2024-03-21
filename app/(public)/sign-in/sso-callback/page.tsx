"use client";

import { RedirectToSignIn } from "@clerk/clerk-react";

function Redirect() {
  return (
    <main className="flex flex-1 flex-col items-center justify-start py-8">
      <RedirectToSignIn />
    </main>
  );
}

export default Redirect;
