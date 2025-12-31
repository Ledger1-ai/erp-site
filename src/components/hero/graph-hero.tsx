"use client";

import * as React from "react";
import Image from 'next/image';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function createNodes(count: number, width: number, height: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    });
  }
  return nodes;
}

export function GraphHero() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isReducedMotion, setIsReducedMotion] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);

  const slides = React.useMemo(() => ([
    {
      titleLines: ["The Universal,", "AI-Assisted ERP"],
      subtitle: "Start with an industry pack. Let Varuni—our AI agent—build and modify modules, panels, and workflows on demand.",
      ctaPrimary: { href: "#pricing", label: "Get Started" },
      ctaSecondary: { href: "#features", label: "Watch Demo" },
      bg: { kind: "network" as const, hue: 191 },
    },
    {
      titleLines: ["Modular Industry Packs"],
      subtitle: "Restaurants • Hospitality • Child-Care • Self-Storage • Retail • Cannabis. Choose your pack and get started instantly.",
      ctaPrimary: { href: "#pricing", label: "Choose Your Industry" },
      ctaSecondary: { href: "#features", label: "View Success Stories" },
      bg: { kind: "life" as const, hue: 191 },
    },
    {
      titleLines: ["Build Your Own Modules", "with Varuni"],
      subtitle: "Create or modify modules, panels, and modals with natural language. No coding required.",
      ctaPrimary: { href: "#features", label: "See It In Action" },
      ctaSecondary: { href: "#pricing", label: "Start Building" },
      bg: { kind: "matrix" as const, hue: 191 },
    },
    {
      titleLines: ["Enterprise-Grade", "Security & Reliability"],
      subtitle: "RBAC • SSO • Audit Trails • Retention • 99.95% Uptime • Data Exports. Your data, secure and accessible.",
      ctaPrimary: { href: "#pricing", label: "Contact Sales" },
      ctaSecondary: { href: "#pricing", label: "Compare Plans" },
      bg: { kind: "fortress" as const, hue: 191 },
    },
  ]), []);

  // Theme detection
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const html = document.documentElement;
    const update = () => setIsDark(html.classList.contains('dark'));
    update();
    const mo = new MutationObserver(update);
    mo.observe(html, { attributes: true, attributeFilter: ['class'] });

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotion = () => setIsReducedMotion(mq.matches);
    handleMotion();
    mq.addEventListener?.("change", handleMotion);

    return () => {
      mo.disconnect();
      mq.removeEventListener?.("change", handleMotion);
    };
  }, []);

  // Canvas Animation Logic
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    // Resize handler
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Initial States
    let networkNodes = createNodes(Math.max(60, Math.floor((width * height) / 20000)), width, height);

    // Life
    let lifeCols = 0, lifeRows = 0;
    let lifeGrid: Uint8Array;
    const initLife = () => {
      const cell = Math.max(14, Math.floor(Math.min(width, height) / 42));
      lifeCols = Math.ceil(width / cell);
      lifeRows = Math.ceil(height / cell);
      lifeGrid = new Uint8Array(lifeCols * lifeRows);
      for (let r = 0; r < lifeRows; r++) {
        for (let c = 0; c < lifeCols; c++) {
          lifeGrid[r * lifeCols + c] = Math.random() > 0.78 ? 1 : 0;
        }
      }
    };
    initLife();

    // Matrix
    const matrixDrops: Array<{ x: number; y: number; speed: number; char: string }> = [];
    const initMatrix = () => {
      matrixDrops.length = 0;
      for (let i = 0; i < Math.floor(width / 14); i++) {
        matrixDrops.push({ x: i * 14 + Math.random() * 10, y: Math.random() * height, speed: 1 + Math.random() * 2, char: String.fromCharCode(65 + Math.floor(Math.random() * 26)) });
      }
    };
    initMatrix();

    // Draw Function
    const drawGlow = (hue: number) => {
      if (!isDark) return;
      const gradient = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 0,
        width * 0.5, height * 0.5, Math.max(width, height)
      );
      gradient.addColorStop(0, `hsla(${hue},65%,58%,0.1)`);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient as CanvasGradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawNetwork = (hue: number) => {
      const maxDist = Math.min(width, height) * 0.18;
      const maxDistSq = maxDist * maxDist;
      ctx.lineWidth = 1;

      // Lines
      for (let i = 0; i < networkNodes.length; i++) {
        for (let j = i + 1; j < networkNodes.length; j++) {
          const dx = networkNodes[i].x - networkNodes[j].x;
          const dy = networkNodes[i].y - networkNodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const t = 1 - distSq / maxDistSq;
            ctx.strokeStyle = `hsla(${hue},65%,58%,${(isDark ? 0.25 : 0.38) * t})`;
            ctx.beginPath();
            ctx.moveTo(networkNodes[i].x, networkNodes[i].y);
            ctx.lineTo(networkNodes[j].x, networkNodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const n of networkNodes) {
        ctx.fillStyle = `hsla(${hue},65%,${isDark ? 58 : 50}%,${isDark ? 0.85 : 0.95})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update
      if (!isReducedMotion) {
        for (const n of networkNodes) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }
    };

    const drawLife = (hue: number, now: number) => {
      if (!isReducedMotion && (now % 8 < 1)) {
        const next = new Uint8Array(lifeCols * lifeRows);
        for (let r = 0; r < lifeRows; r++) {
          for (let c = 0; c < lifeCols; c++) {
            let n = 0;
            for (let dr = -1; dr <= 1; dr++) {
              for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const rr = (r + dr + lifeRows) % lifeRows;
                const cc = (c + dc + lifeCols) % lifeCols;
                n += lifeGrid[rr * lifeCols + cc];
              }
            }
            const idx = r * lifeCols + c;
            const alive = lifeGrid[idx] === 1;
            next[idx] = (alive && (n === 2 || n === 3)) || (!alive && n === 3) ? 1 : 0;
          }
        }
        lifeGrid = next;
      }

      const cell = Math.max(14, Math.floor(Math.min(width, height) / 42));
      const radius = Math.max(1.2, cell * 0.18);
      for (let r = 0; r < lifeRows; r++) {
        for (let c = 0; c < lifeCols; c++) {
          if (lifeGrid[r * lifeCols + c] === 1) {
            const x = c * cell + cell * 0.5;
            const y = r * cell + cell * 0.5;
            ctx.fillStyle = `hsla(${hue}, 60%, 70%, 0.2)`;
            ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
          }
        }
      }
    };

    const drawMatrix = (hue: number, now: number) => {
      if (isDark) {
        ctx.fillStyle = `hsla(${hue},60%,12%,0.1)`;
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      for (const d of matrixDrops) {
        ctx.fillStyle = `hsla(${hue + (d.x % 60)},85%,${isDark ? 70 : 55}%,${isDark ? 0.5 : 0.65})`;
        ctx.beginPath(); // Simple dot matrix
        ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        d.y += d.speed;
        if (d.y > height) d.y = -10;
      }
    };

    const drawFortress = (hue: number, now: number) => {
      // hexagonal lattice across the viewport with wave pulse
      const base = Math.min(width, height);
      const s = Math.max(8, base * 0.02); // hex radius
      const hexH = Math.sqrt(3) * s;
      const cols = Math.ceil(width / (s * 1.5)) + 2;
      const rows = Math.ceil(height / hexH) + 2;
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * (s * 1.5) + ((r % 2) * s * 0.75) - s;
          const y = r * (hexH) - s;
          const dx = x - width * 0.5;
          const dy = y - height * 0.5;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pulse = (Math.sin(now * 0.001 + dist * 0.02) + 1) * 0.5;
          const alpha = 0.08 + pulse * 0.12;
          ctx.strokeStyle = `hsla(${hue},70%,60%,${alpha})`;
          // draw hex outline
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i;
            const px = x + s * Math.cos(a);
            const py = y + s * Math.sin(a);
            if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    let raf = 0;
    const step = (now: number) => {
      const { kind, hue } = slides[activeSlide].bg;
      ctx.clearRect(0, 0, width, height);
      drawGlow(hue);

      if (kind === 'network') drawNetwork(hue);
      else if (kind === 'life') drawLife(hue, now);
      else if (kind === 'matrix') drawMatrix(hue, now);
      else if (kind === 'fortress') drawFortress(hue, now);

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [activeSlide, isDark, isReducedMotion, slides]);

  // Slideshow Timer
  React.useEffect(() => {
    if (isPaused) return;
    timerRef.current = window.setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timerRef.current!);
  }, [isPaused, slides.length]);


  return (
    <section className="relative isolate overflow-hidden min-h-[100svh] flex flex-col items-center justify-center pt-20 pb-20">
      {/* Background Canvas */}
      <div className="absolute inset-0 -z-10">
        <canvas ref={canvasRef} className="h-full w-full block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-4xl text-center">

          {/* Logo (Static) */}
          <div className="mb-10 flex justify-center">
            <div className="relative w-72 h-32 md:w-[600px] md:h-[180px]">
              <Image
                src="/BasaltERPWide.png"
                alt="Basalt ERP"
                fill
                className="object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                priority
              />
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="min-h-[220px] flex flex-col justify-center transition-all duration-500">
            {/* H1 */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 animate-fadeInUp">
              {slides[activeSlide].titleLines.map((line, i) => (
                <span key={i} className={i === 1 ? "text-primary block" : "block"}>
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              {slides[activeSlide].subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-x-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <a
              href={slides[activeSlide].ctaPrimary.href}
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 hover:scale-105"
            >
              {slides[activeSlide].ctaPrimary.label}
            </a>
            <a
              href={slides[activeSlide].ctaSecondary.href}
              className="text-sm font-semibold leading-6 text-foreground flex items-center gap-2 hover:text-primary transition-colors"
              onClick={(e) => {
                if (slides[activeSlide].ctaSecondary.label.includes("Watch Demo")) {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-demo-video"));
                }
              }}
            >
              {slides[activeSlide].ctaSecondary.label} <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="mt-12 flex justify-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveSlide(i); setIsPaused(true); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
