"use client";

import { Play } from "lucide-react";

export function DemoVideoSection() {
    return (
        <section id="demo" className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    See <span className="text-primary">Varuni</span> in Action
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Watch how our AI agent manages complex ERP tasks, from module creation to real-time analytics.
                </p>
            </div>

            <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-2 md:p-4 shadow-2xl ring-1 ring-border/20 bg-background/50 backdrop-blur-xl">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black relative shadow-inner">
                    <video
                        src="https://engram1.blob.core.windows.net/varuni/Ledger1.ai%201080p.mp4"
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        preload="metadata"
                    >
                        <track kind="captions" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
