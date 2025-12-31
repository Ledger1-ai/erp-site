"use client";

import { useState, useEffect } from 'react';
import { Terminal, Cpu, Database, Check } from 'lucide-react';

export function ModuleBuilderDemo() {
    const [step, setStep] = useState(0);
    const [typedText, setTypedText] = useState("");
    const fullText = "Create module: 'Solar_Grid_Monitor' with fields: [Output_MW, Panel_Temp, Efficiency]";

    useEffect(() => {
        // Sequence logic
        let timeout: NodeJS.Timeout;

        if (step === 0) {
            // Type typing
            let charIndex = 0;
            const typeInterval = setInterval(() => {
                if (charIndex <= fullText.length) {
                    setTypedText(fullText.slice(0, charIndex));
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    timeout = setTimeout(() => setStep(1), 500);
                }
            }, 30);
            return () => { clearInterval(typeInterval); clearTimeout(timeout); };
        } else if (step === 1) {
            // Processing
            timeout = setTimeout(() => setStep(2), 2000);
            return () => clearTimeout(timeout);
        }

    }, [step]);

    return (
        <div className="w-full h-full bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col font-mono text-sm">
            {/* Window Header */}
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center text-white/40 text-xs">Varuni AI Studio</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 flex-1 text-gray-300 space-y-4">
                {/* User Prompt */}
                <div className="flex gap-3">
                    <div className="text-primary font-bold">{">"}</div>
                    <div>
                        <span className="text-blue-400">varuni</span> <span className="text-yellow-300">generate</span>
                        <div className="mt-1 text-white">
                            {typedText}<span className="animate-pulse">_</span>
                        </div>
                    </div>
                </div>

                {/* AI Response Steps */}
                {step >= 1 && (
                    <div className="space-y-2 pl-6 border-l-2 border-white/5 animate-in fade-in slide-in-from-left-4 duration-500">
                        <div className="flex items-center gap-2 text-blue-400">
                            <Cpu className="w-4 h-4 animate-spin" /> Analyzing requirements...
                        </div>
                        {step >= 1 && (
                            <div className="text-xs text-gray-500 pl-6">
                                Parsing entities... <br />
                                Detected context: Energy Sector
                            </div>
                        )}
                    </div>
                )}

                {step >= 2 && (
                    <div className="space-y-2 pl-6 animate-in fade-in slide-in-from-left-4 duration-500">
                        <div className="flex items-center gap-2 text-yellow-400">
                            <Database className="w-4 h-4" /> Generating Schema...
                        </div>
                        <div className="bg-black/50 p-3 rounded border border-white/5 text-xs text-green-400 font-mono">
                            {`TABLE solar_grid_monitor {
  id: uuid pk
  output_mw: decimal
  panel_temp: float
  efficiency: percentage
  created_at: timestamp
}`}
                        </div>
                        <div className="flex items-center gap-2 text-green-400 mt-2">
                            <Check className="w-4 h-4" /> Module Deployed Successfully
                        </div>
                    </div>
                )}

            </div>

            {/* Restart Button (Hidden but usable for demo loop if needed, for now just static end state) */}
        </div>
    );
}
