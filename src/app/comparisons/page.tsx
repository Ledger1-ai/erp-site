import { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle,
    ArrowRight,
    Zap,
    ShieldCheck,
    Scale
} from "lucide-react";
import { comparisons } from "@/lib/seo-data";
import { ErasTimeline } from "@/components/visualizations/ErasTimeline";
import { IcebergVisualization } from "@/components/visualizations/IcebergVisualization";

export const metadata: Metadata = {
    title: "Compare BasaltERP | Best ERP Alternatives",
    description: "See how BasaltERP compares to SAP, Oracle NetSuite, QuickBooks, and other financial management software. Find the right fit for your business.",
    keywords: "Basalt vs SAP, Basalt vs NetSuite, ERP comparison, alternative to QuickBooks",
    openGraph: {
        title: "Compare BasaltERP | The Modern Choice",
        description: "Compare features, pricing, and performance",
        type: "website",
    },
};

export default function ComparisonsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-primary/5 via-background to-background">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Compare
                            <span className="block text-primary mt-2">BasaltERP</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Finding the right ERP is critical. See how BasaltERP stacks up against legacy providers and entry-level solutions. We prioritize speed, AI, and user experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* The 3 Eras of ERP */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Evolution of Enterprise Software</h2>
                        <p className="text-muted-foreground">Why the industry is moving from rigid suites to fluid AI platforms.</p>
                    </div>

                    <ErasTimeline />
                </div>
            </section>

            {/* Comparisons Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Detailed Comparisons</h2>
                        <p className="text-muted-foreground mt-4">Select a competitor to see exactly how we win.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {comparisons.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/comparisons/${item.slug}`}
                                className="group p-6 rounded-lg border border-border bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <item.icon className="h-24 w-24 text-primary" />
                                </div>

                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                    Basalt vs.
                                </h3>
                                <h4 className="text-2xl font-bold mb-4 text-foreground">
                                    {item.competitor}
                                </h4>

                                <p className="text-muted-foreground mb-6 h-12">
                                    {item.verdict}
                                </p>

                                <div className="bg-primary/5 rounded-lg p-4 mb-6">
                                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                                        Key Advantage
                                    </div>
                                    <div className="font-medium flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                        {item.basaltAdvantage}
                                    </div>
                                </div>

                                <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                    Read Comparison <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Hidden Cost Iceberg */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <IcebergVisualization />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl font-bold mb-6">Stop paying for "Shelfware".</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Legacy ERP vendors make money on complexity. The harder it is to use, the more they charge for training and consulting.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 font-bold">X</div>
                                    <div>
                                        <h3 className="font-bold text-foreground">No Per-User Penalty</h3>
                                        <p className="text-sm text-muted-foreground">Most ERPs charge per seat, discouraging adoption. Basalt offers unlimited seats on Pro plans.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 font-bold">X</div>
                                    <div>
                                        <h3 className="font-bold text-foreground">No "Shelving Fees"</h3>
                                        <p className="text-sm text-muted-foreground">We don't charge you to access historical data if you ever decide to leave.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 font-bold">X</div>
                                    <div>
                                        <h3 className="font-bold text-foreground">No Consultant Army Needed</h3>
                                        <p className="text-sm text-muted-foreground">Our AI Assistant, Varuni, handles 80% of configuration tasks that usually require a human expert.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zero-Downtime Migration Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">The 30-Day Promise.</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Fear of migration is the #1 reason companies stay on outdated software. We've solved it. Our dedicated team migrates your data, trains your staff, and goes live in 30 days or less.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start group">
                                        <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors text-muted-foreground group-hover:text-primary font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Data Extraction</h3>
                                            <p className="text-sm text-muted-foreground">We connect to your legacy SQL/API and map it to Basalt's graph.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start group">
                                        <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors text-muted-foreground group-hover:text-primary font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Shadow Run</h3>
                                            <p className="text-sm text-muted-foreground">We run Basalt parallel to your old system for 1 week to verify 100% accuracy.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start group">
                                        <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors text-muted-foreground group-hover:text-primary font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Cutover</h3>
                                            <p className="text-sm text-muted-foreground">Switch over on a Friday, start fresh on Monday. No downtime.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Migration Visual */}
                            <div className="bg-background rounded-xl border border-border shadow-2xl p-6 lg:p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 flex items-center justify-center grayscale opacity-50">
                                            <span className="text-xs font-bold">LEGACY</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">Old ERP</span>
                                    </div>

                                    {/* Animated Connection */}
                                    <div className="flex-1 px-4 flex items-center justify-center relative">
                                        <div className="h-1 w-full bg-muted overflow-hidden rounded-full">
                                            <div className="h-full w-1/2 bg-primary animate-pulse" />
                                        </div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border border-border">
                                            <ArrowRight className="w-4 h-4 text-primary" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 rounded-lg bg-primary/10 border-2 border-primary flex items-center justify-center text-primary shadow-lg shadow-primary/20">
                                            <span className="text-xs font-bold">BASALT</span>
                                        </div>
                                        <span className="text-xs font-bold text-primary">Live</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span className="text-muted-foreground">Customer_Records.csv</span>
                                        <span className="text-green-500">Imported (14,203)</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                                        <div className="bg-green-500 h-1.5 rounded-full w-full" />
                                    </div>

                                    <div className="flex justify-between text-xs font-medium mt-4">
                                        <span className="text-muted-foreground">Transaction_History.sql</span>
                                        <span className="text-green-500">Imported (892,110)</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                                        <div className="bg-green-500 h-1.5 rounded-full w-full" />
                                    </div>

                                    <div className="flex justify-between text-xs font-medium mt-4">
                                        <span className="text-muted-foreground">Validation_Check</span>
                                        <span className="text-primary animate-pulse">Running...</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                                        <div className="bg-primary h-1.5 rounded-full w-[85%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Why Switch to Basalt?
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-8 text-left mb-12 mt-12">
                        <div>
                            <div className="bg-background rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-sm mb-4">
                                <Zap className="h-8 w-8 text-yellow-500" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Modern Tech Stack</h3>
                            <p className="text-muted-foreground text-sm">Built on next-gen cloud infrastructure, not 90s codebases.</p>
                        </div>
                        <div>
                            <div className="bg-background rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-sm mb-4">
                                <ShieldCheck className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Fair Pricing</h3>
                            <p className="text-muted-foreground text-sm">No hidden fees, aggressive lock-in, or shelving fees.</p>
                        </div>
                        <div>
                            <div className="bg-background rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-sm mb-4">
                                <Scale className="h-8 w-8 text-green-500" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Rapid Innovation</h3>
                            <p className="text-muted-foreground text-sm">We ship weekly updates, continually adding value to your subscription.</p>
                        </div>
                    </div>

                    <a
                        href="https://calendly.com/founders-tuc/ledger1-info-session"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Get a Custom Comparison
                    </a>
                </div>
            </section>
        </div>
    );
}
