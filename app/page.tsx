import Hero from "@/components/hero";
import Header from "@/components/header";
import Section from "@/components/section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Section />
      <Footer />
    </main>
  );
}
