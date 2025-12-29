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
    <footer className="relative z-10 border-t border-border/70 mt-16 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/BasaltERPWide.png"
                alt="BasaltERP"
                width={120}
                height={40}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered ERP platform that transforms operations,
              optimizes resources, and maximizes profitability for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/BasaltHQ" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/basalthq/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100083624105531" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@theutilitycompany835" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><a href="/integrations" className="text-muted-foreground hover:text-primary transition-colors">Integrations</a></li>
              <li>
                <a href="/api" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <span>API Documentation</span>
                  <span className="micro-label bg-primary/10 text-primary px-2 py-0.5 rounded-full">Coming&nbsp;Soon</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/press" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/security" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4"/>
              <a href="mailto:info@basalthq.com" className="hover:text-primary transition-colors">
                info@basalthq.com
              </a>
            </div>
            {/* <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+1-310-994-6837" className="hover:text-primary transition-colors">
                (555) 123-VARUNI
              </a>
            </div> */}
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Santa Fe, New Mexico</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <p>© {currentYear} BasaltHQ. All rights reserved.</p>
              <div className="hidden md:flex items-center gap-4">
                <a href="/status" className="hover:text-primary transition-colors">System Status</a>
                <a href="/changelog" className="hover:text-primary transition-colors">Changelog</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs">Built for the future of business operations</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
