import { Check, Layers, Sliders, Sparkles, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="glass-pane rounded-2xl ring-1 ring-border/60 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">A component of The Utility Company’s vision</h2>
        <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground opacity-80">
          Standardize the core · Adapt the edges · Optimize continuously
        </div>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          This platform is a component of the shared operating system we're building at <a href="https://theutilitycompany.co" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">The Utility Company</a>—practical, AI‑assisted tools that power finance and operations across every subsidiary. By standardizing budgets, approvals, and reporting, we compound learnings across the portfolio and give teams clarity and control.
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Our thesis is simple: most back‑office work is largely the same—procure‑to‑pay, order‑to‑cash, payroll, approvals, and reporting—with predictable nuances by sector, scale, and policy. With AI, those nuances can be modeled as policies, prompts, and data mappings, letting us standardize the core while adapting the edges. The result is a common standard that delivers efficient operations today and enables continuous process optimization over time—capabilities that have historically been costly and inaccessible to small and medium enterprises.
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Architecturally, we compose experiences hierarchically—modules → panels → modals. Modules capture domains like Inventory, Scheduling, Robotics, and Hospitality (HostPro). Panels provide the primary workflows and surfaces for data and decisions. Modals focus on precise actions—edits, approvals, reconciliations. This structure lets us encode industry‑specific nuance as configuration (policies, roles, schemas) rather than forks, so we can adapt the platform to new verticals in days instead of months.
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Under the hood, our stack pairs a modern web runtime with production‑grade data and AI: Next.js and React; Tailwind CSS and Radix UI; GraphQL; MongoDB; gRPC; LangChain/OpenAI; OCR; PDF and spreadsheet tooling; drag‑and‑drop; charting; and secure authentication.
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Who uses it? Operators in restaurants and hospitality (menu, orders, seating), inventory‑heavy businesses, robotics and field fleets, and services teams that need approvals, scheduling, and reporting—all benefiting from a common standard that learns across contexts.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div className="glass-pane rounded-xl ring-1 ring-border/60 p-4 md:p-6 bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-white/10 p-2 ring-1 ring-border/60">
                <Layers className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Standard core</span>
            </div>
            <h3 className="mt-3 text-sm font-medium">Shared back‑office primitives</h3>
            <p className="mt-1 text-xs text-muted-foreground">Procure‑to‑pay, order‑to‑cash, payroll, approvals, reporting.</p>
          </div>
          <div className="glass-pane rounded-xl ring-1 ring-border/60 p-4 md:p-6 bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-white/10 p-2 ring-1 ring-border/60">
                <Sliders className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Adaptive edges</span>
            </div>
            <h3 className="mt-3 text-sm font-medium">Nuance as configuration</h3>
            <p className="mt-1 text-xs text-muted-foreground">Policies, roles, prompts, and mappings—no forks, rapid fit.</p>
          </div>
          <div className="glass-pane rounded-xl ring-1 ring-border/60 p-4 md:p-6 bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-white/10 p-2 ring-1 ring-border/60">
                <Sparkles className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Composable UX</span>
            </div>
            <h3 className="mt-3 text-sm font-medium">Modules → panels → modals</h3>
            <p className="mt-1 text-xs text-muted-foreground">Workflows at panel‑level, precise actions in focused modals.</p>
          </div>
          <div className="glass-pane rounded-xl ring-1 ring-border/60 p-4 md:p-6 bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-white/10 p-2 ring-1 ring-border/60">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Continuous ops</span>
            </div>
            <h3 className="mt-3 text-sm font-medium">Learn and optimize</h3>
            <p className="mt-1 text-xs text-muted-foreground">Portfolio‑level insights drive local improvements automatically.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px] ring-1 ring-border/60">
            <Check className="h-3 w-3 text-green-500" /> Hierarchical modules → panels → modals
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px] ring-1 ring-border/60">
            <Check className="h-3 w-3 text-green-500" /> AI‑assisted back‑office
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-[11px] ring-1 ring-border/60">
            <Check className="h-3 w-3 text-green-500" /> Part of The Utility Company’s OS
          </span>
        </div>
      </div>
    </section>
  );
}


