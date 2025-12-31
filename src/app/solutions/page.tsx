import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Database, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Solutions by Role | BasaltERP",
    description: "Tailored ERP workflows for CFOs, COOs, CTOs, and Human Resources. See how Basalt empowers every department.",
    openGraph: {
        title: "Solutions | BasaltERP",
        description: "ERP solutions tailored for your role.",
        type: "website",
    },
};

const solutions = [
    {
        role: "CFO",
        title: "Finance & Strategy",
        description: "Close the books faster, automate reconciliation, and predict cash flow with AI.",
        icon: TrendingUp,
        color: "blue",
        features: ["Real-time Consolidation", "AI Cash Floats", "Automated AP/AR"],
        href: "/solutions/finance"
    },
    {
        role: "COO",
        title: "Operations & Supply Chain",
        description: "Optimize inventory, streamline logistics, and reduce operational overhead.",
        icon: Database,
        color: "purple",
        features: ["Live Inventory Tracking", "Vendor Portals", "Demand Forecasting"],
        href: "/solutions/operations"
    },
    {
        role: "CTO",
        title: "Engineering & IT",
        description: "An API-first ERP that developers love. Extensible, secure, and fast.",
        icon: Shield,
        color: "green",
        features: ["GraphQL API", "Role-Based Access", "Audit Logs"],
        href: "/solutions/engineering"
    },
    {
        role: "CHRO",
        title: "People & HR",
        description: "Manage payroll, benefits, and performance in one unified system.",
        icon: Users,
        color: "pink",
        features: ["Global Payroll", "Self-Service Portal", "Org Chart Visualization"],
        href: "/solutions/hr"
    },
];

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-background">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Built for <span className="text-primary">Every Team.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                        Basalt isn't just a database. It's a suite of specialized tools designed for the unique needs of every department in your organization.
                    </p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {solutions.map((solution) => (
                            <div
                                key={solution.role}
                                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col"
                            >
                                <div className={`absolute top-0 right-0 p-32 bg-${solution.color}-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-${solution.color}-500/10 transition-colors`} />

                                <div className="flex items-start justify-between mb-8 relative z-10">
                                    <div className={`p-4 rounded-xl bg-${solution.color}-500/10 text-${solution.color}-500`}>
                                        <solution.icon className="h-8 w-8" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-1">
                                    <h2 className="text-2xl font-bold mb-2">{solution.title}</h2>
                                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">For the {solution.role}</h3>
                                    <p className="text-lg text-muted-foreground mb-8">
                                        {solution.description}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {solution.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div className={`h-2 w-2 rounded-full bg-${solution.color}-500`} />
                                                <span className="text-foreground font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <Link href="#" className="inline-flex items-center text-primary font-bold hover:underline">
                                        Explore {solution.role} Solutions <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-Functional CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="mx-auto max-w-7xl">
                    <div className="bg-primary rounded-3xl p-8 lg:p-16 relative overflow-hidden text-center text-primary-foreground">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Unify Your Organization</h2>
                            <p className="text-lg opacity-90 mb-8">
                                Stop fighting with siloed data. When Finance, Ops, and HR work from the same source of truth, magic happens.
                            </p>
                            <a
                                href="https://calendly.com/founders-tuc/ledger1-info-session"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-background text-primary px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Schedule a Full Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
