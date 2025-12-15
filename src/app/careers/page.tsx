import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Careers – Ledger1",
  description: "Join Ledger1 to build the AI-assisted universal ERP platform.",
  alternates: { canonical: "https://ledger1.ai/careers" },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Careers</h1>
          <p className="text-lg text-muted-foreground">We’re assembling a small, senior team. Roles will be posted soon.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
