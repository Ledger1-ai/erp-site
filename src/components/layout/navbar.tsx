"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Brain, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = useMemo(() => {
    const showCaseStudies = process.env.NEXT_PUBLIC_ENABLE_CASE_STUDIES === 'true';
    const showAbout = process.env.NEXT_PUBLIC_ENABLE_ABOUT !== 'false';
    const showContact = process.env.NEXT_PUBLIC_ENABLE_CONTACT !== 'false';
    const result: Array<{ id: string; label: string }> = [
      { id: "features", label: "Features" },
      { id: "pricing", label: "Pricing" },
    ];
    if (showCaseStudies) result.push({ id: "case-studies", label: "Case Studies" });
    if (showAbout) result.push({ id: "about", label: "About" });
    if (showContact) result.push({ id: "contact", label: "Contact" });
    return result;
  }, []);

  const [activeId, setActiveId] = useState<string>("features");
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (!id) return;
        if (entry.isIntersecting) {
          setActiveId(id);
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const nav = navRef.current;
    const ind = indicatorRef.current;
    if (!nav || !ind) return;
    const activeLink = nav.querySelector<HTMLAnchorElement>(`a[data-section="${activeId}"]`);
    if (!activeLink) return;
    const linkRect = activeLink.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const left = linkRect.left - navRect.left;
    const width = linkRect.width;
    ind.style.transform = `translateX(${left}px)`;
    ind.style.width = `${width}px`;
  }, [activeId, isMenuOpen]);

  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-b border-border/50"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/erplogowide.png"
            alt="Ledger1"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="relative hidden md:flex items-center gap-8 text-sm font-medium">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              data-section={s.id}
              className={`transition-colors ${activeId === s.id ? 'text-primary' : 'hover:text-primary'}`}
            >
              {s.label}
            </Link>
          ))}
          
          {/* Industries Link */}
          <Link
            href="/industries"
            className="transition-colors hover:text-primary"
          >
            Industries
          </Link>
          
          <span
            ref={indicatorRef}
            className="absolute -bottom-[11px] h-[2px] bg-gradient-to-r from-primary to-primary/70 rounded-full transition-transform duration-300 ease-out"
            style={{ width: 0, transform: 'translateX(0px)' }}
          />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#features"
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("open-demo-video")); }}
            className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-card px-4 py-2 text-sm font-medium hover:bg-primary/5 transition-colors"
          >
            Watch Demo
          </Link>
          <a
            href="https://calendly.com/founders-tuc/ledger1-info-session" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-6 py-2 text-sm font-semibold text-primary-foreground shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur">
          <nav className="px-4 py-6 space-y-4">
            {sections.map(s => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            
            {/* Mobile Industries Link */}
            <Link
              href="/industries"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <div className="pt-4 border-t border-border/50 space-y-3">
              <Link
                href="#features"
                className="block w-full text-center rounded-lg border border-primary/20 bg-card px-4 py-3 text-sm font-medium hover:bg-primary/5 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Watch Demo
              </Link>
              <a
                href="https://calendly.com/founders-tuc/ledger1-info-session" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-sm font-semibold text-primary-foreground shadow hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
