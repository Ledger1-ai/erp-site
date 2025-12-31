import Link from "next/link";
import { Terminal, Code2, Construction } from "lucide-react";

export const metadata = {
    title: "BasaltERP Developers | API Coming Soon",
    description: "Build on top of the world's first autonomous ERP. Developer API coming soon.",
};

export default function DevelopersPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-muted/50 border border-border mb-8 shadow-xl backdrop-blur-sm">
                    <Terminal className="w-10 h-10 text-primary" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Developer API <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Coming Soon.</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto">
                    We're building the most powerful GraphQL API in the enterprise software space. Programmatic access to the Ledger, inventory, and logic blocks is almost here.
                </p>

                <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-8 max-w-md mx-auto mb-12">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">Development Roadmap</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 opacity-50">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <span className="text-sm line-through">Core Ledger Architecture</span>
                        </div>
                        <div className="flex items-center gap-3 opacity-50">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <span className="text-sm line-through">Internal Alpha Testing</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 animate-pulse">
                                <div className="w-2 h-2 bg-background rounded-full" />
                            </div>
                            <span className="text-sm font-bold text-primary">Public Beta (Q3 2026)</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Back to Home
                    </Link>
                    <a
                        href="mailto:dev-relations@basalthq.com"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border bg-background hover:bg-muted transition-colors font-semibold"
                    >
                        Contact Dev Relations
                    </a>
                </div>
            </div>
        </div>
    );
}
