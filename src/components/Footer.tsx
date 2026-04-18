import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/[0.05] relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-serif text-white/90 mb-2">Essara</a>
            <p className="text-xs text-white/40 font-sans tracking-wide">
              © {new Date().getFullYear()} Kutral Labs. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="https://essara.space/" className="text-sm text-white/50 hover:text-white transition-colors">Go to App</a>
            <a href="#features" className="text-sm text-white/50 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-sm text-white/50 hover:text-white transition-colors">About</a>
            <a href="#faq" className="text-sm text-white/50 hover:text-white transition-colors">FAQ</a>
            <a href="https://github.com" className="text-sm text-white/50 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
