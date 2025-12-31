"use client";

import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

export function GlobalMap() {
    const [activeDots, setActiveDots] = useState<number[]>([]);

    // Simple grid of dots to represent "global coverage" abstractly
    // In a real app we might use a GeoJSON D3 map, but for this aesthetic, a techy grid works well.
    const rows = 8;
    const cols = 16;
    const totalDots = rows * cols;

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly activate 3-5 dots
            const newDots = Array.from({ length: 5 }, () => Math.floor(Math.random() * totalDots));
            setActiveDots(prev => [...newDots, ...prev].slice(0, 15)); // Keep last 15
        }, 800);
        return () => clearInterval(interval);
    }, [totalDots]);

    return (
        <div className="relative w-full h-[300px] md:h-[400px] bg-muted/5 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center p-8">
            {/* Background World Map Silhouette (SVG) */}
            <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full opacity-10 text-primary fill-current pointer-events-none"
            >
                <path d="M842,157c0,0-15-2-21,5c-5,6-18,6-18,6s-10,8-12,18s5,21,5,21s5,12,6,17s-2,15-8,17s-10,13-10,13s-14,2-19-1s-2-8-8-8s-13,9-19,7s-6-11-6-11s-9-6-16-1s-8,3-18-2s-7-14-14-14s-14,8-20,13s-10,3-18-1s-10-8-19-5s-14,9-19,16s-2,15-9,15s-15-5-22-6s-10,5-16,11s-9,14-16,15s-10-5-16-11s-5-17-10-17s-11,8-16,14s-7,15-13,15s-14-6-18-13s-6-17-12-19s-14,2-18,7s-4,11-10,11s-14-4-20-6s-9-10-15-10s-10,8-13,15s-5,16-10,19s-11,2-17-3s-10-11-16-12s-10,4-14,10s-5,16-10,20s-12,2-18-2s-10-12-17-14s-14,3-19,8s-6,14-13,15s-14-3-20-8s-9-15-16-17s-11,2-17,7s-8,12-14,12s-12-4-19-4s-13,6-18,13s-6,14-13,12s-14-8-19-14s-7-13-13-13s-12,5-17,11s-7,15-13,15s-12-4-19-7s-13-3-20,1s-12,10-18,17s-9,12-16,12s-14-5-20-9s-8-12-15-13s-14,3-20,8s-9,11-16,12s-14-1-21-4s-12-10-17-16s-8-11-15-11s-14,3-20,8s-9,11-16,10s-14-8-20-13s-8-12-15-12s-14,5-20,11s-8,14-14,14s-14-5-19-11s-6-11-13-11s-14,3-21,9s-10,12-18,12s-15-5-22-9s-8-11-15-11s-14,3-20,8s-9,12-16,14s-14-1-21-5s-12-10-18-15s-9-10-16-9s-14,6-21,11s-10,10-18,10s-15-5-22-8s-8-10-15-9s-14,7-21,12s-10,12-18,11s-15-7-23-11s-9-10-16-10s-14,4-21,9s-10,12-18,14s-15,0-23-4s-9-11-16-14s-14-2-21,1s-10,9-17,14s-9,11-16,11H5c0,0-5-8-5-16s3-16,3-16s-4-12-3-20s8-15,16-18s15,2,22,8s9,13,15,15s11-1,16-6s6-14,12-18s12-3,19,0s10,9,16,15s9,12,16,12s14-5,21-9s9-12,16-13s14,3,21,9s9,12,16,12s14-5,21-9s9-12,16-14s14-1,21,3s12,10,18,15s9,9,16,9s14-6,21-11s10-10,17-9s15,6,22,11s9,11,16,11s14-5,21-9s9-12,16-14s14,0,21,3s12,10,18,15s9,10,16,10s14-5,20-10s9-12,16-11s14,8,21,13s9,11,15,11s14-4,20-9s9-12,16-13s14,0,20,5s11,11,17,17s8,11,15,11s14-5,20-10s9-12,16-12s14,6,21,11s10,11,17,11s15-5,22-9s9-10,16-9s14,6,21,11s10,11,17,11s15-5,22-9s9-10,16-9s14,7,21,12s10,12,18,12s15-6,22-11s9-10,17-10s14,4,21,9s10,12,18,14s15,0,23-4s9-11,16-14s14-2,21,0s11,9,17,14s9,12,16,12s15-5,21-10s9-12,16-12s14,6,20,11s9,11,16,11s15-5,22-9s9-10,16-9s14,7,21,12s10,11,17,11s15-6,22-11s9-10,17-10s14,4,21,9s10,12,18,13" />
            </svg>

            {/* Abstract Tech Grid */}
            <div
                className="absolute inset-0 grid gap-2 opacity-30"
                style={{
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`
                }}
            >
                {Array.from({ length: totalDots }).map((_, i) => {
                    const isActive = activeDots.includes(i);
                    return (
                        <div key={i} className="flex items-center justify-center">
                            <div
                                className={`rounded-full transition-all duration-1000 ${isActive ? 'w-2 h-2 bg-primary shadow-[0_0_10px_2px_rgba(var(--primary),0.8)]' : 'w-1 h-1 bg-white/10'
                                    }`}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Floating Cards */}
            <div className="absolute top-[20%] left-[20%] animate-pulse">
                <div className="bg-background/80 backdrop-blur border border-primary/30 p-2 rounded-lg text-xs font-mono shadow-xl flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                    Tax Rate Update: UK
                </div>
            </div>

            <div className="absolute bottom-[30%] right-[25%] animate-pulse delay-700">
                <div className="bg-background/80 backdrop-blur border border-primary/30 p-2 rounded-lg text-xs font-mono shadow-xl flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                    Compliance Check: JP
                </div>
            </div>
        </div>
    );
}
