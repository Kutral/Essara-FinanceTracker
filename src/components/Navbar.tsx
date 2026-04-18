import { motion } from "motion/react";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      animate={{ opacity: [0, 1], y: [-20, 0] }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl pointer-events-auto">
        <div className="flex items-center">
          <a href="#" className="text-xl font-serif tracking-wide text-white">Essara</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        
        <div className="flex items-center hidden md:flex">
          <a href="https://essara.space/" className="text-sm font-medium text-white px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            Visit Essara
          </a>
        </div>
        
        <button className="md:hidden text-white/70 hover:text-white">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </motion.nav>
  );
}
