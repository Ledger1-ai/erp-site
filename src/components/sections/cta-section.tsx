"use client";

import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Zap,
  Shield,
  Star
} from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 scroll-mt-24">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full-button-frame bg-white/10 backdrop-blur px-4 py-2 text-sm text-white mb-6">
            🚀 Ready to Connect?
          </div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Contact Us
            <br />
            <span className="text-white/90">Schedule your demo or talk to sales</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            We'll walk you through BasaltHQ and Varuni—how we run ERPs across The Utility Co subsidiaries—and answer any questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://calendly.com/founders-tuc/ledger1-demo-session" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="https://calendly.com/founders-tuc/ledger1-info-session" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              Book a Call
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Enterprise‑grade security & auditability
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Guided demo tailored to your operations
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Flexible scheduling via Calendly
            </div>
          </div>
        </div>


        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-pane rounded-xl p-6 text-center bg-white/10 backdrop-blur border-white/20">
            <div className="inline-flex p-3 rounded-lg bg-white/20 mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-white/80 mb-4">Get detailed information</p>
            <a href="mailto:info@basalthq.com" className="text-white hover:text-white/80 underline">
              info@basalthq.com
            </a>
          </div>

          <div className="glass-pane rounded-xl p-6 text-center bg-white/10 backdrop-blur border-white/20">
            <div className="inline-flex p-3 rounded-lg bg-white/20 mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Schedule Demo</h3>
            <p className="text-white/80 mb-4">See Varuni in action</p>
            <a href="https://calendly.com/founders-tuc/ledger1-demo-session" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 underline">
              Book a demo
            </a>
          </div>

          <div className="glass-pane rounded-xl p-6 text-center bg-white/10 backdrop-blur border-white/20">
            <div className="inline-flex p-3 rounded-lg bg-white/20 mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Sales Info Session</h3>
            <p className="text-white/80 mb-4">Discuss plans and pricing</p>
            <a href="https://calendly.com/founders-tuc/ledger1-info-session" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 underline">
              Book a call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
