import { notFound } from "next/navigation";
import Link from 'next/link';
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { comparisons } from "@/lib/seo-data";
import { CTASection } from "@/components/sections/cta-section";

export function generateStaticParams() {
    return comparisons.map((c) => ({
        slug: c.slug,
    }));
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const comparison = comparisons.find((c) => c.slug === slug);

    if (!comparison) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/comparisons" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Comparisons
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Basalt ERP vs. <span className="text-primary">{comparison.competitor}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        See why high-growth companies are switching to Basalt for better AI handling, transparent pricing, and modern operational speed.
                    </p>
                </div>
            </section>

            {/* Main Comparison Content */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Feature Comparison Table */}
                    {comparison.featuresComparison && (
                        <div className="mb-20">
                            <div className="glass-panel rounded-2xl overflow-hidden border-white/10 bg-muted/5">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-border bg-muted/50">
                                            <th className="p-6 font-bold text-muted-foreground w-1/3">Key Feature Test</th>
                                            <th className="p-6 font-bold text-primary w-1/3 text-center bg-primary/5">Basalt ERP</th>
                                            <th className="p-6 font-bold text-muted-foreground w-1/3 text-center">{comparison.competitor}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {comparison.featuresComparison.map((row, i) => (
                                            <tr key={i} className="hover:bg-muted/5 transition-colors">
                                                <td className="p-6 font-medium">{row.feature}</td>
                                                <td className="p-6 text-center bg-primary/5">
                                                    {row.basalt ? (
                                                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                                                    ) : (
                                                        <XCircle className="w-6 h-6 text-red-500 mx-auto opacity-50" />
                                                    )}
                                                </td>
                                                <td className="p-6 text-center">
                                                    {row.competitor ? (
                                                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto opacity-70" />
                                                    ) : (
                                                        <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Basalt Box */}
                        <div className="glass-panel border-primary/20 bg-primary/5 p-8 rounded-2xl relative">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                PREFERRED CHOICE
                            </div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                Why Switch to Basalt?
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span><strong>Native AI Agents</strong> (Varuni) to build and modify modules on demand</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span><strong>Unified Database</strong> for all operational and financial data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span><strong>Transparent Pricing</strong> with no hidden implementation fees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span>Rapid Deployment (Weeks, not months)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Competitor Box */}
                        <div className="glass-panel p-8 rounded-2xl border-white/10 bg-muted/10">
                            <h2 className="text-2xl font-bold mb-6 text-muted-foreground">
                                Why Companies Leave {comparison.competitor}
                            </h2>
                            <ul className="space-y-4 text-muted-foreground">
                                {(comparison.cons || [
                                    "Legacy architecture or disjointed acquisitions",
                                    "AI often 'bolted on' or requires extra licensing",
                                    "Complex, lengthy implementation cycles"
                                ]).map((con, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                        <span>{con}</span>
                                    </li>
                                ))}
                            </ul>

                            {(comparison.pros && comparison.pros.length > 0) && (
                                <div className="mt-8 pt-6 border-t border-border/50">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Where they are okay:</h4>
                                    <ul className="space-y-2">
                                        {comparison.pros.map((pro, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm">
                                                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-xl bg-muted/20 text-center">
                        <h3 className="text-2xl font-bold mb-4">The Verdict</h3>
                        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                            "{comparison.verdict}"
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-full font-medium border border-green-500/20">
                                Top Advantage: {comparison.basaltAdvantage}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
