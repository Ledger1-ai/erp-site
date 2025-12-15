import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Help Center – Ledger1 (Coming Soon)",
  description: "Guides and troubleshooting for Ledger1. Coming soon.",
  alternates: { canonical: "https://ledger1.ai/help" },
};

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">Coming Soon</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Help Center</h1>
          <p className="text-lg text-muted-foreground">Guides, troubleshooting, and FAQs are on the way.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}


