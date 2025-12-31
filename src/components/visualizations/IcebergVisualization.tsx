"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function IcebergVisualization() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate normalized mouse position (-1 to 1)
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative w-full h-[600px] overflow-hidden rounded-3xl bg-[#020617] border border-white/5 shadow-2xl flex items-center justify-center group perspective-1000">

            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-[#020617] to-[#0f172a]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_70%)]" />

            {/* Water Surface Plane */}
            <div className="absolute top-[35%] w-[150%] h-[150%] -left-[25%] opacity-30 pointer-events-none transform-style-3d overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent blur-xl" />
                <div className="w-full h-full border-t border-blue-400/50 shadow-[0_0_50px_rgba(56,189,248,0.3)]" />
            </div>

            <div className="absolute top-[35%] w-full h-px z-20 flex items-center justify-between px-6">
                <div className="h-px w-12 bg-blue-500/50" />
                <div className="flex-1 border-t border-dashed border-blue-500/30 mx-4" />
                <span className="text-[10px] font-mono text-blue-400 bg-[#020617]/50 px-2 py-0.5 rounded border border-blue-500/30 backdrop-blur-md">WATER_LINE_001</span>
                <div className="flex-1 border-t border-dashed border-blue-500/30 mx-4" />
                <div className="h-px w-12 bg-blue-500/50" />
            </div>

            {/* Floating Iceberg Container */}
            <motion.div
                className="relative z-10 w-64 h-full flex flex-col items-center justify-center transform-style-3d"
                animate={{
                    y: [-10, 10, -10],
                    rotateZ: [-1, 1, -1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    rotateX: mousePosition.y * 5,
                    rotateY: mousePosition.x * 5,
                }}
            >
                {/* THE VISIBLE TIP */}
                <div className="absolute top-[18%] z-30 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <svg width="200" height="120" viewBox="0 0 200 120" className="fill-white stroke-slate-200 stroke-2">
                        <path d="M100 10 L160 80 L140 110 L60 110 L40 80 Z" className="fill-slate-50" />
                        <path d="M100 10 L160 80 L100 90 L40 80 Z" className="fill-white opacity-80" />
                        <path d="M100 10 L100 90 L60 110" className="stroke-slate-300 fill-none" />
                    </svg>

                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-4 py-2 rounded shadow-xl min-w-[140px] text-center">
                        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">Visible Cost</div>
                        <div className="text-lg font-bold">License</div>
                    </div>

                    {/* Connecting line to label */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white" />
                </div>

                {/* THE HIDDEN BASE */}
                <div className="absolute top-[38%] z-0 text-slate-800 opacity-90 blur-[0.5px]">
                    {/* Massive dark shape */}
                    <svg width="400" height="400" viewBox="0 0 400 400" className="fill-slate-900/80 stroke-red-500/30 stroke-1 overflow-visible">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: 'rgba(15, 23, 42, 0.9)', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: 'rgba(30, 41, 59, 0.9)', stopOpacity: 1 }} />
                            </linearGradient>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(239, 68, 68, 0.1)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <path d="M 140 0 L 260 0 L 320 80 L 340 220 L 200 380 L 60 220 L 80 80 Z" fill="url(#grad1)" />
                        <path d="M 140 0 L 260 0 L 320 80 L 340 220 L 200 380 L 60 220 L 80 80 Z" fill="url(#grid)" />

                        {/* Internal Structure Lines */}
                        <path d="M 140 0 L 200 120 L 200 380" className="stroke-red-500/20 fill-none" />
                        <path d="M 260 0 L 200 120 L 60 220" className="stroke-red-500/20 fill-none" />
                        <path d="M 320 80 L 200 120" className="stroke-red-500/20 fill-none" />
                    </svg>
                </div>
            </motion.div>

            {/* Floating Info Cards (Positioned Absolutely) */}

            {/* Card 1: Implementation */}
            <motion.div
                className="absolute top-[45%] left-[2%] w-56 z-30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="relative group">
                    {/* Connecting Line */}
                    <svg className="absolute top-1/2 -right-16 w-16 h-px overflow-visible pointer-events-none">
                        <line x1="0" y1="0" x2="64" y2="0" stroke="rgba(239,68,68,0.4)" strokeDasharray="4 2" />
                        <circle cx="64" cy="0" r="2" fill="#EF4444" />
                    </svg>

                    <div className="bg-[#0f172a]/90 backdrop-blur-xl border-l-2 border-l-red-500 border-y border-r border-white/10 p-4 rounded-r-xl shadow-2xl hover:translate-x-1 transition-transform">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-5 h-5 rounded bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-[10px]">01</div>
                            <h3 className="font-bold text-red-400 text-xs tracking-wider uppercase">Implementation</h3>
                        </div>
                        <div className="text-xl font-bold text-white mb-1">3-5x Cost</div>
                        <p className="text-slate-400 text-[10px] leading-relaxed">
                            Consultants bill by the hour to "configure" the software.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Maintenance */}
            <motion.div
                className="absolute top-[45%] right-[2%] w-56 z-30"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <div className="relative group">
                    {/* Connecting Line */}
                    <svg className="absolute top-1/2 -left-16 w-16 h-px overflow-visible pointer-events-none">
                        <line x1="0" y1="0" x2="64" y2="0" stroke="rgba(239,68,68,0.4)" strokeDasharray="4 2" />
                        <circle cx="0" cy="0" r="2" fill="#EF4444" />
                    </svg>

                    <div className="bg-[#0f172a]/90 backdrop-blur-xl border-r-2 border-r-red-500 border-y border-l border-white/10 p-4 rounded-l-xl shadow-2xl text-right hover:-translate-x-1 transition-transform">
                        <div className="flex items-center justify-end gap-2 mb-1">
                            <h3 className="font-bold text-red-400 text-xs tracking-wider uppercase">Maintenance</h3>
                            <div className="w-5 h-5 rounded bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-[10px]">02</div>
                        </div>
                        <div className="text-xl font-bold text-white mb-1">+22% Annual</div>
                        <p className="text-slate-400 text-[10px] leading-relaxed">
                            "Support & Update" fees that compound yearly.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Card 3: Opportunity Cost */}
            <motion.div
                className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-64 z-30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <div className="relative group">
                    <div className="absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-transparent to-red-500/40" />

                    <div className="bg-[#0f172a]/90 backdrop-blur-xl border-b-2 border-b-red-500 border-x border-t border-white/10 p-4 rounded-t-xl shadow-2xl text-center hover:-translate-y-1 transition-transform">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <div className="w-5 h-5 rounded bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-[10px]">03</div>
                            <h3 className="font-bold text-red-400 text-xs tracking-wider uppercase">Opportunity Cost</h3>
                        </div>
                        <div className="text-xl font-bold text-white mb-1">Incalculable</div>
                        <p className="text-slate-400 text-[10px] leading-relaxed">
                            The value lost while your team fights rigid workflows.
                        </p>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
