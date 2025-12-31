import { PricingSection } from "@/components/sections/pricing-section";
import { CTASection } from "@/components/sections/cta-section";


export const metadata = {
  title: "Pricing | BasaltERP",
  description: "Transparent pricing with no hidden fees. Choose the plan that fits your business scale.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No shelfware, no hidden implementation fees. Pay for value, not complexity.
          </p>
        </div>
      </section>

      <PricingSection />

      <CTASection />


    </div>
  );
}
