"use client";

import { ArrowRight, Globe, Factory, Scale } from "lucide-react";
import Link from 'next/link';

export function SeoLinksSection() {
    const cards = [
        {
            title: "Industries",
            icon: Factory,
            description: "Specialized ERP packs for Restaurants, Retail, Hospitality, and more. See how we fit your specific needs.",
            href: "/industries"
        },
        {
            title: "Locations",
            icon: Globe,
            description: "Supported in 15+ countries with localized tax, labor, and compliance modules built-in.",
            href: "/locations"
        },
        {
            title: "Comparisons",
            icon: Scale,
            description: "See how Basalt ERP stacks up against legacy systems and other modern tools in the market.",
            href: "/comparisons"
        }
    ];

    return (
        <section className="relative py-24 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Deep Dive</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our platform's capabilities across different sectors, regions, and competitive landscapes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <Link
                            key={index}
                            href={card.href}
                            className="group relative flex flex-col p-8 bg-muted/20 hover:bg-muted/40 rounded-2xl border border-white/5 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex-1">
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                                    <card.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    {card.title}
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
