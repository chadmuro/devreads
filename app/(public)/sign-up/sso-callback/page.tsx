"use client";

import { RedirectToSignUp } from "@clerk/clerk-react";

function Redirect() {
  return (
    <main className="flex flex-1 flex-col items-center justify-start py-8">
      <RedirectToSignUp />
    </main>
  );
}

export default Redirect;
