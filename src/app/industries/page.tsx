import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/seo-data";
import { ModuleBuilderDemo } from "@/components/visualizations/ModuleBuilderDemo";

export const metadata: Metadata = {
  title: "Industry Solutions | BasaltERP for Every Business",
  description: "Discover how BasaltHQ's ERP software serves businesses across healthcare, manufacturing, retail, construction, and more. Industry-specific financial management solutions.",
  keywords: "ERP by industry, industry-specific software, vertical ERP solutions, business management software",
  openGraph: {
    title: "Industry Solutions | BasaltERP",
    description: "ERP solutions tailored for your industry",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Industry-Specific
              <span className="block text-primary mt-2">ERP Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              BasaltHQ provides tailored financial management solutions for businesses across diverse industries. Discover how our ERP software can transform your industry's unique challenges into opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Module Builder Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Don't see your industry?</h2>
                <h3 className="text-xl text-primary font-semibold mb-6">Build it yourself with Varuni AI.</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Basalt isn't limited to pre-built packs. Our <span className="text-foreground font-medium">AI Module Builder</span> allows you to describe your unique business workflows and generate a custom ERP module in seconds.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Custom fields & data types</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Automated workflow logic</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Instant API generation</span>
                  </li>
                </ul>
                <Link href="/features" className="text-primary font-semibold flex items-center hover:opacity-80 transition-opacity">
                  Learn more about AI Modules <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Dynamic Demo Component */}
              <div className="relative h-[400px]">
                <ModuleBuilderDemo />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Standard Industry Packs</h2>
            <p className="text-muted-foreground mt-4">Pre-configured operational templates to get you started instantly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group p-6 rounded-lg border border-border bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for Every Stakeholder</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Basalt adapts its interface to the user, not the other way around. Whether you're in the C-Suite or on the shop floor.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* CFO Card */}
            <div className="relative group overflow-hidden rounded-3xl border border-border bg-background p-8 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-32 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 font-bold text-xl">
                  $
                </div>
                <h3 className="text-2xl font-bold mb-2">The CFO</h3>
                <p className="text-muted-foreground mb-6">Real-time cash flow visibility and automated reconciliation.</p>

                <div className="bg-muted rounded-xl p-4 border border-border/50 text-xs font-mono space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cash_Runway</span>
                    <span className="text-green-500 font-bold">18 Months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Burn_Rate</span>
                    <span className="text-foreground">$42k/mo</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-1.5 rounded-full w-[65%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* COO Card */}
            <div className="relative group overflow-hidden rounded-3xl border border-border bg-background p-8 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-32 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6 font-bold text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">The COO</h3>
                <p className="text-muted-foreground mb-6">Supply chain optimization and operational bottlenecks.</p>

                <div className="bg-muted rounded-xl p-4 border border-border/50 text-xs font-mono space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Order_Fulfillment</span>
                    <span className="text-purple-500 font-bold">98.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Inventory_Turn</span>
                    <span className="text-foreground">4.2x</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                    <div className="bg-purple-500 h-1.5 rounded-full w-[90%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* CTO Card */}
            <div className="relative group overflow-hidden rounded-3xl border border-border bg-background p-8 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 font-bold text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">The CTO</h3>
                <p className="text-muted-foreground mb-6">API extensibility, data security, and system uptime.</p>

                <div className="bg-muted rounded-xl p-4 border border-border/50 text-xs font-mono space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">API_Latency</span>
                    <span className="text-primary font-bold">24ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Uptime_SLO</span>
                    <span className="text-green-500">99.99%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                    <div className="bg-green-500 h-1.5 rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Composable Architecture Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Abstract Stack Visualization */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <div className="relative h-full flex flex-col justify-center gap-4">
                  <div className="bg-background border border-border p-4 rounded-xl shadow-lg transform translate-y-4 scale-95 opacity-80 z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                      </div>
                      <span className="font-mono font-bold">E-Commerce_Pack</span>
                    </div>
                  </div>
                  <div className="bg-background border border-primary/50 p-4 rounded-xl shadow-2xl z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                      </div>
                      <span className="font-mono font-bold text-primary">Retail_POS_Core</span>
                      <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Active</span>
                    </div>
                  </div>
                  <div className="bg-background border border-border p-4 rounded-xl shadow-lg transform -translate-y-4 scale-95 opacity-80 z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-green-500/20 text-green-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 19a6 6 0 0 0-9.53-2.8" /><path d="M6.61 17.4A6.05 6.05 0 0 1 15 22" /><path d="M19 11V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" /><circle cx="10" cy="8" r="4" /><path d="M21.5 21.5h.01" /><path d="M21.5 17.5h.01" /><path d="M17.5 21.5h.01" /><path d="M17.5 17.5h.01" /></svg>
                      </div>
                      <span className="font-mono font-bold">Inventory_Logistics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Seamless Interoperability</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Most ERPs force you into a single industry box. Basalt allows you to stack multiple industry packs to match your actual business model.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Manufacturer + Retailer?</h3>
                    <p className="text-muted-foreground">Combine our <span className="text-foreground font-medium">Manufacturing</span> and <span className="text-foreground font-medium">Retail</span> packs to track raw materials from factory floor to checkout counter in one system.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Services + Products?</h3>
                    <p className="text-muted-foreground">Run a consulting firm that sells books? Stack the <span className="text-foreground font-medium">Professional Services</span> and <span className="text-foreground font-medium">E-Commerce</span> packs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Unified Data Layer</h3>
                    <p className="text-muted-foreground">No matter how many packs you mix, your General Ledger, CRM, and Employee records remain a single, unified source of truth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            BasaltERP is flexible enough to serve businesses across all industries. Contact us to discuss your specific needs and learn how we can help.
          </p>
          <a
            href="https://calendly.com/founders-tuc/ledger1-info-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
