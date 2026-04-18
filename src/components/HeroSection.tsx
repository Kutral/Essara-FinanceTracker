import { ArrowRight, Globe, Instagram, Twitter } from "lucide-react";
import { useSeamlessVideoFade } from "../hooks/useSeamlessVideoFade";

export function HeroSection() {
  const videoRef = useSeamlessVideoFade(
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
  );

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col w-full bg-black">
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
      />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6 w-full">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-white mr-2" />
            <span className="text-white font-semibold text-lg">Essara</span>
            
            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
              <a href="#pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
              <a href="https://essara.space/" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Visit essara.space</a>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
             <a href="https://essara.space/" className="hidden sm:block text-white text-sm font-medium hover:text-white/80 transition-colors">
               Sign Up at essara.space
             </a>
             <a href="https://essara.space/" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
               Login
             </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%]">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-serif mb-8">
          Track it, then <em className="italic">master</em> it.
        </h1>
        
        <div className="max-w-xl w-full liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 mb-6">
          <input 
            type="email" 
            placeholder="Enter your email to join the waitlist at essara.space" 
            className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-white/40 text-sm"
          />
          <button className="bg-white rounded-full p-3 text-black hover:scale-105 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-white/80 text-sm leading-relaxed px-4 max-w-lg mb-8">
          Stay updated with the latest news and insights into personal finance. Get started taking control of your money today at <a href="https://essara.space/" className="underline underline-offset-4 hover:text-white">essara.space</a>.
        </p>
        
        <a href="https://essara.space/" className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
          Explore essara.space
        </a>
      </div>

      {/* Social Footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12 w-full">
        <a href="https://essara.space/" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all outline-none">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://essara.space/" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all outline-none">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://essara.space/" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all outline-none">
          <Globe className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
