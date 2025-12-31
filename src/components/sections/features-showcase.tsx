"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Brain,
  BarChart3,
  Users,
  Package,
  Calendar,
  Bot,
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  Clock,
  Star,
  Utensils,
  MessageSquare,
  BookOpen,
  Square as SquareIcon,
} from "lucide-react";

const features = [
  {
    id: "varuni-agent",
    title: "Varuni — AI Operations Agent",
    description: "A conversational agent that plans, analyzes, and executes across your ERP. She uses live data and first‑class tool access to get real work done.",
    icon: Bot,
    gradient: "from-fuchsia-500 to-violet-500",
    benefits: [
      "Ask in natural language; get data‑backed answers",
      "Executes actions via GraphQL/REST tools",
      "Understands inventory, vendors, orders, menus, staffing",
      "Streams results in real time"
    ],
    stats: "From insight to action in one message"
  },
  {
    id: "ai-builder",
    title: "Module Builder (Powered by Varuni)",
    description: "Use natural language to create or modify modules, panels, modals, and workflows—fully versioned and auditable.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    benefits: [
      "Build modules with prompts",
      "Modify panels and forms on demand",
      "Generate compliant workflows",
      "Versioned, auditable changes"
    ],
    stats: "Ship operations 10x faster"
  },
  {
    id: "industry-packs",
    title: "Modular Industry Packs",
    description: "Start with pre-built packs for Restaurants, Hospitality, Child-Care, Self-Storage, Retail, and Cannabis.",
    icon: BarChart3,
    gradient: "from-blue-500 to-cyan-500",
    benefits: [
      "Comprehensive pre-built modules",
      "Best-practice dashboards",
      "Ready-to-use reporting",
      "Easily extended via AI"
    ],
    stats: "6 industries at launch"
  },
  {
    id: "access-control",
    title: "Enterprise Access & Security",
    description: "Granular roles, SSO (SAML/OIDC), retention controls, and audit trails across all modules.",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    benefits: [
      "Role-based permissions",
      "Org-wide audit trails",
      "Data retention controls",
      "SSO & 2FA"
    ],
    stats: "Enterprise-ready"
  },
  {
    id: "inventory-ops",
    title: "Operations & Analytics",
    description: "Operational workflows, rich analytics, and automation hooks for any industry pack.",
    icon: Package,
    gradient: "from-orange-500 to-red-500",
    benefits: [
      "Operational KPIs",
      "Automations & webhooks",
      "Forecasting & insights",
      "Export & warehousing"
    ],
    stats: "Unified data model"
  },
  {
    id: "scheduling",
    title: "Scheduling & Workforce",
    description: "AI-optimized staffing, shift planning, and team performance across industries.",
    icon: Calendar,
    gradient: "from-indigo-500 to-purple-500",
    benefits: [
      "AI shift planning",
      "Availability & PTO",
      "Time tracking",
      "Performance analytics"
    ],
    stats: "Reduce labor waste"
  },
  {
    id: "integrations",
    title: "Integrations & Robotics",
    description: "Connect to POS/ERP/HRIS and optionally monitor robotics fleets and workflows.",
    icon: Bot,
    gradient: "from-teal-500 to-blue-500",
    benefits: [
      "POS/ERP/HRIS integrations",
      "GraphQL API access",
      "Automation gateways",
      "Optional robotics visibility"
    ],
    stats: "Extensible by design"
  }
];

const useBrandLogos = process.env.NEXT_PUBLIC_USE_BRAND_LOGOS === "true";

const integrations = [
  { name: "Toast POS", brand: "toast", icon: Utensils },
  { name: "7shifts", brand: "7shifts", icon: Users },
  { name: "QuickBooks", brand: "quickbooks", icon: BookOpen },
  { name: "Square", brand: "square", icon: SquareIcon },
  { name: "Slack", brand: "slack", icon: MessageSquare },
  { name: "Microsoft Teams", brand: "teams", icon: Users }
];

export function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section id="features" className="relative py-24">
      {/* Background Gradient/Glow similar to BasaltFeatures */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 animate-fadeInUp">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono tracking-[0.3em] text-cyan-500">
              MODULAR PLATFORM
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground animate-fadeInUp stagger-1">
            Build Your ERP
            <span className="text-cyan-400"> Your Way</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp stagger-2">
            Start with industry packs, then let Varuni—our AI operations agent—analyze, recommend, and execute. From insights to actions, including building modules, panels, and workflows on demand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`glass-panel rounded-xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${activeFeature.id === feature.id
                ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                : 'hover:border-cyan-500/30'
                }`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setActiveFeature(feature)}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`relative inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="relative text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
              <p className="relative text-muted-foreground mb-4 text-sm leading-relaxed">{feature.description}</p>
              <div className="relative text-xs font-mono tracking-wider text-cyan-500">{feature.stats}</div>
            </div>
          ))}
        </div>

        {/* Active Feature Detail */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 mb-16 border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${activeFeature.gradient} mb-6 shadow-lg`}>
                <activeFeature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{activeFeature.title}</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{activeFeature.description}</p>
              <ul className="space-y-3">
                {activeFeature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                    <span className="text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-400">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-mono text-sm tracking-wide">{activeFeature.stats}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5 bg-black/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />

                {/* Abstract Visualization */}
                <div className={`p-10 rounded-2xl bg-gradient-to-br ${activeFeature.gradient} shadow-2xl relative z-10 animate-float`}>
                  <activeFeature.icon className="h-20 w-20 text-white" />
                </div>

                {/* Tech Rings */}
                <div className="absolute inset-0 border-[0.5px] border-cyan-500/10 rounded-full scale-150 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 border-[0.5px] border-dashed border-cyan-500/10 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="text-center relative">
          <h3 className="text-2xl font-bold mb-8">Seamless Integrations</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="glass-panel rounded-lg p-5 hover:scale-105 hover:border-cyan-500/30 transition-all duration-300 w-40 flex flex-col items-center group">
                {useBrandLogos ? (
                  <div className="relative w-28 h-8 mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={`/logos/${integration.brand}.svg`}
                      alt={integration.name}
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <integration.icon className="h-6 w-6 text-muted-foreground group-hover:text-cyan-400 mb-2 transition-colors" />
                )}
                <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{integration.name}</div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 font-mono text-xs tracking-widest uppercase">Global API Standardization</p>
        </div>
      </div>
    </section>
  );
}
