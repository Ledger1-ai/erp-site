import { notFound } from "next/navigation";
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Globe } from "lucide-react";
import { locations } from "@/lib/seo-data";
import { CTASection } from "@/components/sections/cta-section";

export function generateStaticParams() {
    return locations.map((l) => ({
        slug: l.slug,
    }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = locations.find((l) => l.slug === slug);

    if (!location) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/locations" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Locations
                    </Link>
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full bg-primary/10 text-primary">
                            <location.icon className="w-12 h-12" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Basalt ERP for <span className="text-primary">{location.name}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {location.description}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Key Specs Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="glass-panel p-6 rounded-xl border-white/10 bg-muted/5 text-center">
                            <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Compliance</div>
                            <div className="font-bold text-lg">{location.complianceStandard || "Standard GAAP"}</div>
                        </div>
                        <div className="glass-panel p-6 rounded-xl border-white/10 bg-muted/5 text-center">
                            <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Currencies</div>
                            <div className="font-bold text-lg">{(location.currencies || []).join(", ")}</div>
                        </div>
                        <div className="glass-panel p-6 rounded-xl border-white/10 bg-muted/5 text-center">
                            <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Languages</div>
                            <div className="font-bold text-lg">{(location.languages || ["English"]).slice(0, 2).join(", ")}{(location.languages?.length || 0) > 2 ? "+" : ""}</div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl border-white/10 bg-muted/5 mb-12">
                        <h2 className="text-2xl font-bold mb-8 text-center">Localized Features for {location.name}</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {location.features.map((feature, i) => (
                                <div key={i} className="bg-background p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                                    <CheckCircle className="w-8 h-8 text-primary mb-4" />
                                    <span className="font-semibold">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h3 className="text-2xl font-bold mb-4">Global Reach, Local Compliance</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Basalt handles the complexities of operating in {location.name}, from tax calculation to local data residency requirements.
                            Run your business confidently knowing your ERP is always up-to-date with the latest {location.complianceStandard} regulations.
                        </p>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
