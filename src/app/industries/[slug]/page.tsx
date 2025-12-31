import { notFound } from "next/navigation";
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Factory } from "lucide-react";
import { industries } from "@/lib/seo-data";
import { CTASection } from "@/components/sections/cta-section";

export function generateStaticParams() {
    return industries.map((i) => ({
        slug: i.slug,
    }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);

    if (!industry) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/industries" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Industries
                    </Link>
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-primary/10 text-primary">
                            <industry.icon className="w-12 h-12" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        ERP Solutions for <span className="text-primary">{industry.name}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {industry.description}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Features Grid */}
                    <div className="glass-panel p-8 rounded-2xl border-white/10 bg-muted/5 mb-16">
                        <h2 className="text-2xl font-bold mb-8 text-center"><span className="text-primary">{industry.name}</span> Specific Modules</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {industry.features.map((feature, i) => (
                                <div key={i} className="bg-background p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                                    <CheckCircle className="w-8 h-8 text-primary mb-4" />
                                    <span className="font-semibold text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Challenges vs Solutions */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="p-2 bg-red-500/10 rounded-lg text-red-500"><Factory className="w-5 h-5" /></span>
                                Common Challenges
                            </h3>
                            <ul className="space-y-4">
                                {(industry.challenges || ["Evolving regulations", "Labor shortages", "Supply chain disruption"]).map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                        <span className="text-muted-foreground">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="p-2 bg-green-500/10 rounded-lg text-green-500"><CheckCircle className="w-5 h-5" /></span>
                                The Basalt Solution
                            </h3>
                            <ul className="space-y-4">
                                {(industry.benefits || ["Automated compliance", "Predictive labor planning", "Resilient supply chain tools"]).map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-foreground font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h3 className="text-2xl font-bold mb-4">Tailored to Your Sector</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Basalt comes pre-configured with the industry packs you need to hit the ground running.
                            From specialized compliance to sector-specific workflows, we understand the nuances of the {industry.name} industry.
                        </p>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
