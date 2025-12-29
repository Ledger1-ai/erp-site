import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Documentation – BasaltERP",
  description: "Product documentation and API references. User guide and API docs coming soon.",
  alternates: { canonical: "https://erp.basalthq.com/docs" },
};

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary mb-4">Docs</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Product guides, tutorials, and API references.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/docs/api" className="glass-pane rounded-xl p-8 hover:scale-105 transition-transform">
            <div className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">Coming Soon</div>
            <h2 className="text-2xl font-bold mb-2">API Documentation</h2>
            <p className="text-muted-foreground">GraphQL schema, REST endpoints, webhooks, and auth patterns.</p>
          </a>
          <a href="/help" className="glass-pane rounded-xl p-8 hover:scale-105 transition-transform">
            <div className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">Coming Soon</div>
            <h2 className="text-2xl font-bold mb-2">User Guide</h2>
            <p className="text-muted-foreground">Step‑by‑step guides to configure modules, roles, and workflows.</p>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}


