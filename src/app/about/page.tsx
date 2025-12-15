import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About Us – Ledger1",
  description: "Learn about Ledger1 and The Utility Company vision: standardize the core, adapt the edges, and continuously optimize ERP operations.",
  alternates: { canonical: "https://ledger1.ai/about" },
  openGraph: {
    title: "About Us – Ledger1",
    description: "Learn about Ledger1 and The Utility Company vision.",
    url: "https://ledger1.ai/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Ledger1",
    description: "Learn about Ledger1 and The Utility Company vision.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary mb-4">Company</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">About Ledger1</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">A component of The Utility Company’s shared operating system—AI‑assisted tools powering finance and operations.</p>
        </div>
      </section>
      <AboutSection />
      <Footer />
    </div>
  );
}
