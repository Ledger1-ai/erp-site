import { GraphHero } from "@/components/hero/graph-hero";
import { FeaturesShowcase } from "@/components/sections/features-showcase";
// import { SocialProof } from "@/components/sections/social-proof";
import { PricingSection } from "@/components/sections/pricing-section";
import { CaseStudies } from "@/components/sections/case-studies";
import { AboutSection } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/layout/footer";
import { VaruniSection } from "@/components/sections/varuni-section";
import { GallerySection } from "@/components/sections/gallery-section";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <GraphHero />
      <FeaturesShowcase />
      {process.env.NEXT_PUBLIC_ENABLE_GALLERY !== 'false' && <GallerySection />}
      {process.env.NEXT_PUBLIC_ENABLE_VARUNI_SECTION !== 'false' && <VaruniSection />}
      {/* Social proof moved under Case Studies to avoid duplication */}
      {process.env.NEXT_PUBLIC_ENABLE_SOCIAL_PROOF === 'true' && null}
      <PricingSection />
      {/* Case studies can be toggled with NEXT_PUBLIC_ENABLE_CASE_STUDIES */}
      {process.env.NEXT_PUBLIC_ENABLE_CASE_STUDIES === 'true' && (
        <CaseStudies />
      )}
      {process.env.NEXT_PUBLIC_ENABLE_ABOUT !== 'false' && <AboutSection />}
      {process.env.NEXT_PUBLIC_ENABLE_CONTACT !== 'false' && <CTASection />}
      <Footer />
    </div>
  );
}
