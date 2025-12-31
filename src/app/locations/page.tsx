import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { locations } from "@/lib/seo-data";
import { GlobalMap } from "@/components/visualizations/GlobalMap";

export const metadata: Metadata = {
    title: "Global Locations | BasaltERP Worldwide",
    description: "BasaltHQ provides ERP solutions for businesses in major economic hubs worldwide. Local compliance, global reach.",
    keywords: "ERP by location, global ERP, multi-entity software, international business management",
    openGraph: {
        title: "Global Locations | BasaltERP",
        description: "ERP solutions tailored for your region",
        type: "website",
    },
};

export default function LocationsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-primary/5 via-background to-background">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Global
                            <span className="block text-primary mt-2">ERP Solutions</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            BasaltERP is built for the global economy. Whether you operate in New York, London, or Singapore, our platform adapts to local regulations while keeping your global data unified.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Localization Matters */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Localization isn't just translation. <br />
                                <span className="text-primary">It's compliance.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Operating globally means navigating a minefield of local tax laws, data residency requirements, and reporting standards.
                                BasaltERP abstracts this complexity away.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <ArrowRight className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="font-medium">Automatic Tax Updates</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <ArrowRight className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="font-medium">Local GAAP & IFRS Support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <ArrowRight className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="font-medium">Multi-Currency & FX Consolidation</span>
                                </li>
                            </ul>
                        </div>

                        {/* Visual Map Component */}
                        <div className="relative">
                            <GlobalMap />

                            {/* Overlay Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">100+</div>
                                    <div className="text-xs text-muted-foreground">Countries</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-foreground">50+</div>
                                    <div className="text-xs text-muted-foreground">Currencies</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-foreground">0</div>
                                    <div className="text-xs text-muted-foreground">Extra Fees</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Supported Regions</h2>
                        <p className="text-muted-foreground mt-4">Select a region to see specific features and compliance details.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locations.map((location) => (
                            <Link
                                key={location.slug}
                                href={`/locations/${location.slug}`}
                                className="group p-6 rounded-lg border border-border bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <location.icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                            {location.name}
                                        </h3>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground mb-4">{location.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {location.features.map((feature, idx) => (
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

            {/* Data Sovereignty Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                {/* Abstract Shield Visual */}
                                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
                                <div className="relative bg-background border border-border p-8 rounded-2xl shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
                                        <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">Residency: Germany</h3>
                                            <p className="text-sm text-green-500 font-mono">GDPR Compliant • Encrypted</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 font-mono text-sm">
                                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                                <span>PII_Storage</span>
                                            </div>
                                            <span className="text-muted-foreground">eu-central-1</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-green-500" />
                                                <span>Ledger_Db</span>
                                            </div>
                                            <span className="text-muted-foreground">eu-central-1</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg border border-red-500/20">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                                <span>Access_Attempt: US</span>
                                            </div>
                                            <span className="text-red-500">BLOCKED (Geo-Fence)</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Encryption Key MGT</span>
                                        <span className="text-sm font-bold">Customer Managed (BYOK)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Your Data Stays Where It Belongs.</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                In the age of GDPR, CCPA, and strict banking regulations, you can't just put everything in a US bucket. Basalt allows granular control over where your data lives.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground">Geo-Pinning</h3>
                                        <p className="text-sm text-muted-foreground">Force specific datasets (e.g. Employee Payroll) to never leave their origin country, even during backups.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground">BYOK Encryption</h3>
                                        <p className="text-sm text-muted-foreground">Bring Your Own Key. We process your data, but we can't see it without your explicit, temporary authorization.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground">Global CDN, Local Speed</h3>
                                        <p className="text-sm text-muted-foreground">Our edge network ensures that a user in Tokyo gets the same millisecond latency as a user in New York.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unified Global Ledger Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="bg-muted/5 rounded-3xl p-8 lg:p-16 border border-white/10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    Local Compliance. <span className="text-primary">Global Vision.</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Running multi-entity operations usually means wrestling with spreadsheets to consolidate data from different regions. BasaltERP creates a single, real-time source of truth.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                        </div>
                                        <h3 className="font-semibold text-foreground">Multi-Entity Rollups</h3>
                                        <p className="text-sm text-muted-foreground">Consolidate unlimited subsidiaries in seconds, not days.</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-right"><path d="M8 3 4 7l4 4" /><path d="M4 7h16" /><path d="m16 21 4-4-4-4" /><path d="M20 17H4" /></svg>
                                        </div>
                                        <h3 className="font-semibold text-foreground">Inter-Company Automated</h3>
                                        <p className="text-sm text-muted-foreground">Auto-eliminate inter-company transactions during consolidation.</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>
                                        </div>
                                        <h3 className="font-semibold text-foreground">FX Normalization</h3>
                                        <p className="text-sm text-muted-foreground">Real-time exchange rates applied to every transaction.</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></svg>
                                        </div>
                                        <h3 className="font-semibold text-foreground">Unified Reporting</h3>
                                        <p className="text-sm text-muted-foreground">Compare regional performance side-by-side instantly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-xl bg-background/50 border-white/5 relative">
                                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">Live</div>
                                <div className="font-mono text-sm space-y-4 text-muted-foreground">
                                    <div className="flex justify-between border-b border-border pb-2">
                                        <span>Consolidated_Revenue</span>
                                        <span className="text-foreground font-bold">$142,890,200.00</span>
                                    </div>
                                    <div className="pl-4 space-y-2 text-xs">
                                        <div className="flex justify-between">
                                            <span>↳ US_West (USD)</span>
                                            <span>$64,200,000.00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>↳ EU_Central (EUR → USD)</span>
                                            <span>$48,150,100.00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>↳ APAC_Sing (SGD → USD)</span>
                                            <span>$30,540,100.00</span>
                                        </div>
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
                        Expanding to New Regions?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        BasaltERP supports over 100 currencies and tax jurisdictions. We scale wherever your business goes.
                    </p>
                    <a
                        href="https://calendly.com/founders-tuc/ledger1-info-session"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Discuss Global Deployment
                    </a>
                </div>
            </section>
        </div>
    );
}
