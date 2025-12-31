import { GraphHero } from "@/components/hero/graph-hero";

import { FeaturesShowcase } from "@/components/sections/features-showcase";
import { DemoVideoSection } from "@/components/sections/demo-video-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { SocialProof } from "@/components/sections/social-proof";
import { PricingSection } from "@/components/sections/pricing-section";
import { CTASection } from "@/components/sections/cta-section";
import { SeoLinksSection } from "@/components/sections/seo-links-section";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">


      {/* 2. Hero Section (Preserving Animations) */}
      <GraphHero />

      {/* 2.5 Demo Video Section */}
      <DemoVideoSection />

      {/* 3. Gallery Section */}
      <GallerySection />

      {/* 4. Social Proof */}
      <SocialProof />

      {/* 4. Features Section */}
      <FeaturesShowcase />

      {/* 5. Pricing Section */}
      <PricingSection />

      {/* 6. CTA Section */}
      <CTASection />

      {/* 7. SEO Links Section */}
      <SeoLinksSection />
    </main>
  );
}
