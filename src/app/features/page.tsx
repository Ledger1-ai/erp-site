import { FeaturesShowcase } from "@/components/sections/features-showcase";
import { CTASection } from "@/components/sections/cta-section";


export const metadata = {
  title: "Features | BasaltERP",
  description: "Explore the comprehensive feature set of BasaltERP, from autonomous modules to real-time analytics.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Powerful <span className="text-primary">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to run your business, all in one unified platform.
          </p>
        </div>
      </section>

      <FeaturesShowcase />

      <CTASection />


    </div>
  );
}
