import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white/20 selection:text-white flex flex-col font-sans w-full overflow-x-hidden">
      <main className="w-full flex flex-col items-center" role="main" aria-label="Essara personal finance app content">
        <HeroSection />
        <AboutSection />
        <FeaturedVideoSection />
        <PhilosophySection />
        <ServicesSection />
      </main>
      
      {/* Final barebones footer linking back to essara.space */}
      <footer className="w-full bg-black py-12 border-t border-white/5 flex flex-col items-center z-10 relative" role="contentinfo" aria-label="Essara footer">
        <p className="text-white/40 text-sm font-sans mb-4">
          Ready to take control of your personal finances?
        </p>
        <a href="https://essara.space/" className="text-white hover:text-white/80 font-serif italic text-2xl md:text-3xl transition-colors" aria-label="Visit essara.space personal finance app" rel="noopener noreferrer">
          Visit essara.space
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=space.essara.app"
          className="mt-4 liquid-glass rounded-full px-6 py-2 text-white/80 text-sm hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
          aria-label="Download Essara Android app from Google Play Store"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Get the Android App
        </a>
        <nav className="mt-8 flex gap-6" aria-label="Footer navigation">
          <a href="#about" className="text-white/40 text-sm hover:text-white/80 transition-colors">About</a>
          <a href="#features" className="text-white/40 text-sm hover:text-white/80 transition-colors">Features</a>
          <a href="#pricing" className="text-white/40 text-sm hover:text-white/80 transition-colors">Pricing</a>
          <a href="https://essara.space/" className="text-white/40 text-sm hover:text-white/80 transition-colors" rel="noopener noreferrer">Web App</a>
          <a href="https://play.google.com/store/apps/details?id=space.essara.app" className="text-white/40 text-sm hover:text-white/80 transition-colors" rel="noopener noreferrer">Android</a>
        </nav>

        {/* Comprehensive backlink grid for SEO — styled to match existing footer aesthetic */}
        <div className="mt-10 w-full max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Product</h4>
              <div className="flex flex-col gap-1.5">
                <a href="https://essara.space/essara-app" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Essara App</a>
                <a href="https://essara.space/download" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Download</a>
                <a href="https://essara.space/dashboard" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Dashboard</a>
                <a href="https://essara.space/scanner" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Scanner</a>
                <a href="https://essara.space/subscription-manager" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Subscriptions</a>
                <a href="https://essara.space/investments" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Investments</a>
              </div>
            </div>
            <div>
              <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Tools</h4>
              <div className="flex flex-col gap-1.5">
                <a href="https://essara.space/tools" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">All Tools</a>
                <a href="https://essara.space/tools/budget-planner" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Budget Planner</a>
                <a href="https://essara.space/tools/money-leak-detector" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Money Leak Detector</a>
                <a href="https://essara.space/tools/subscription-leak-detector" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Subscription Leak</a>
                <a href="https://essara.space/tools/upi-autopay-tracker" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">UPI Autopay Tracker</a>
                <a href="https://essara.space/tools/ott-subscription-cost-calculator" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">OTT Cost Calculator</a>
              </div>
            </div>
            <div>
              <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Company</h4>
              <div className="flex flex-col gap-1.5">
                <a href="https://essara.space/about" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">About</a>
                <a href="https://essara.space/blog" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Blog</a>
                <a href="https://essara.space/contact" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Contact</a>
                <a href="https://essara.space/pricing" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Pricing</a>
                <a href="https://essara.space/referral" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Referral</a>
                <a href="https://essara.space/docs" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Docs</a>
              </div>
            </div>
            <div>
              <h4 className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Resources</h4>
              <div className="flex flex-col gap-1.5">
                <a href="https://essara.space/compare" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Compare</a>
                <a href="https://essara.space/compare/essara-vs-ynab" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Essara vs YNAB</a>
                <a href="https://essara.space/compare/essara-vs-monarch-money" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Essara vs Monarch</a>
                <a href="https://essara.space/compare/essara-vs-rocket-money" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Essara vs Rocket</a>
                <a href="https://essara.space/privacy-policy" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Privacy Policy</a>
                <a href="https://essara.space/terms-of-service" className="text-white/30 text-xs hover:text-white/70 transition-colors" rel="noopener noreferrer">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/20 text-xs mt-10">
          © {new Date().getFullYear()} Essara. All rights reserved. Personal Finance & Money Clarity.
        </p>
      </footer>
    </div>
  );
}
