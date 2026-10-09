import { Globe, X } from "lucide-react";
import { useSeamlessVideoFade } from "../hooks/useSeamlessVideoFade";

export function HeroSection() {
  const videoRef = useSeamlessVideoFade(
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
  );

  return (
    <header className="min-h-screen overflow-hidden relative flex flex-col w-full bg-black" role="banner" aria-label="Essara Personal Finance App Homepage">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6 w-full" role="navigation" aria-label="Main navigation">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-white mr-2" aria-hidden="true" />
            <span className="text-white font-semibold text-lg" aria-label="Essara Logo">Essara</span>

            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors" aria-label="Features section">Features</a>
              <a href="#guides" className="text-white/80 hover:text-white text-sm font-medium transition-colors" aria-label="Guides section">Guides</a>
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors" aria-label="About Essara section">About</a>
              <a href="#faq" className="text-white/80 hover:text-white text-sm font-medium transition-colors" aria-label="FAQ section">FAQ</a>
              <a href="https://essara.space/pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors" aria-label="Pricing on essara.space" rel="noopener noreferrer">Pricing</a>
              <a href="https://essara.space/" className="text-white/80 hover:text-white text-sm font-medium transition-colors" aria-label="Visit essara.space" rel="noopener noreferrer">Visit essara.space</a>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
             <a href="https://essara.space/" className="hidden sm:block text-white text-sm font-medium hover:text-white/80 transition-colors" rel="noopener noreferrer">
               Open web app
             </a>
             <a href="https://essara.space/" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors" aria-label="Login to Essara" rel="noopener noreferrer">
               Login
             </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%]">
        <p className="uppercase tracking-widest text-white/50 text-xs sm:text-sm mb-4">
          Subscription, UPI AutoPay &amp; expense tracker for India
        </p>

        <h1 className="speakable-hero text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight font-serif text-balance mb-8">
          Every renewal, <em className="italic">before</em> it renews.
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 speakable-hero" aria-label="Essara value proposition">
          See every subscription and UPI AutoPay mandate in one list, get a reminder before each renewal, and log spends and scan bills. No bank login, no SMS, no UPI PIN. Free to start on Android and the web.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4" aria-label="Essara live app links">
          <a
            href="https://essara.space/"
            className="liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            aria-label="Open Essara on the web"
            rel="noopener noreferrer"
          >
            Open Web App
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=space.essara.app"
            className="liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
            aria-label="Download Essara on Google Play"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Get it on Google Play
          </a>
        </div>

        <p className="text-white/45 text-xs uppercase tracking-[0.24em] mb-8">
          Live now on web and Android
        </p>

        <p className="text-white/60 text-sm px-4 mb-8">
          No bank login · No SMS access · No ads
        </p>
      </div>

      {/* App Download & Social Footer */}
      <div className="relative z-10 flex flex-col items-center gap-4 pb-12 w-full">
        <a
          href="https://play.google.com/store/apps/details?id=space.essara.app"
          className="liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2 mb-2"
          aria-label="Download Essara app from Google Play Store"
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          Get it on Google Play
        </a>
        <div className="flex justify-center gap-4">
          <a href="https://x.com/essaraapp" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all outline-none" aria-label="Essara on X" rel="noopener noreferrer">
            <X className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="https://essara.space/" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all outline-none" aria-label="Essara website" rel="noopener noreferrer">
            <Globe className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
