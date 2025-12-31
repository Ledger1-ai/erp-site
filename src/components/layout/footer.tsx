import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Github
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 mt-24 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/BasaltERPWide.png"
                  alt="BasaltERP"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-foreground tracking-widest font-bold">
                  BASALT<span className="font-light">ERP</span>
                </span>
                <span className="text-[10px] text-cyan-500 font-mono tracking-widest">AI OPERATIONS</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-cyan-500 font-semibold">Your Business. Supercharged.</span><br />
              AI-powered ERP platform that transforms operations,
              optimizes resources, and maximizes profitability.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/BasaltHQ" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/basalthq/" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@theutilitycompany835" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-6">PRODUCT</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><a href="/integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li>
                <a href="/api" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <span>API Docs</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded border border-cyan-500/30 text-cyan-500 bg-cyan-500/10">SOON</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-6">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support & Status */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-6">SUPPORT</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/security" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
            </ul>

            <div className="pt-6 border-t border-white/5">
              <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-3">SYSTEM STATUS</h4>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-emerald-500 font-mono tracking-wide">ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-gray-500">
            <p>© {currentYear} BasaltHQ. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <MapPin className="h-3 w-3" />
            <span>Santa Fe, New Mexico</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
