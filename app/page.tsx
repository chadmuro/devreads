import Hero from "@/components/hero";

import Section from "@/components/section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between">
      <Hero />
      <Section />
    </main>
  );
}
