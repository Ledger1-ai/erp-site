import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Press – BasaltERP",
  description: "Press resources and media inquiries for BasaltERP.",
  alternates: { canonical: "https://erp.basalthq.com/press" },
};

export default function PressPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Press</h1>
          <p className="text-lg text-muted-foreground mb-6">For media inquiries, contact <a href="mailto:info@basalthq.com" className="underline">info@basalthq.com</a>.</p>
          <div className="glass-pane rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Brand Assets</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Logos: /BasaltERPWide.png, /socialbanner.jpg</li>
              <li>Company: BasaltERP (a Utility Company product)</li>
              <li>Location: Santa Fe, New Mexico</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


