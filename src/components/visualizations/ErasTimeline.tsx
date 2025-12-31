"use client";

import { useEffect, useState } from 'react';

export function ErasTimeline() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const eras = [
        {
            name: "Legacy ERP",
            years: "1990-2010",
            features: ["On-Premise", "Siloed Data", "Annual Updates", "Consultant Heavy"],
            color: "bg-gray-600",
            height: "h-32",
            opacity: "opacity-40"
        },
        {
            name: "Cloud SaaS",
            years: "2010-2023",
            features: ["Browser Based", "API Connectivity", "Quarterly Updates", "Seat-Based Pricing"],
            color: "bg-blue-600",
            height: "h-48",
            opacity: "opacity-70"
        },
        {
            name: "Autonomous AI",
            years: "2024+",
            features: ["Agentic Workflows", "Fluid Schema", "Real-time Adaptation", "Outcome Pricing"],
            color: "bg-primary",
            height: "h-64",
            opacity: "opacity-100"
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-8 glass-panel rounded-3xl border-white/10 bg-muted/5">
            <div className="flex items-end justify-center gap-4 md:gap-12 h-80">
                {eras.map((era, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group w-1/3">
                        {/* Bar */}
                        <div className="relative w-full max-w-[120px] flex items-end justify-center">
                            <div
                                className={`w-full rounded-t-xl transition-all duration-1000 ease-out ${era.color} ${era.opacity} group-hover:opacity-100 ${mounted ? era.height : 'h-0'}`}
                            >
                                <div className="absolute -top-12 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="px-3 py-1 rounded-full bg-background border border-border text-xs font-bold shadow-lg">
                                        {era.years}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Label */}
                        <div className="text-center">
                            <h3 className={`font-bold text-lg md:text-xl mb-2 ${i === 2 ? 'text-primary' : 'text-muted-foreground'}`}>{era.name}</h3>
                            <ul className="text-xs text-muted-foreground space-y-1 hidden md:block">
                                {era.features.map((f, idx) => (
                                    <li key={idx} className="border-b border-border/50 pb-1 last:border-0">{f}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
