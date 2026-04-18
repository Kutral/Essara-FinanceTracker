import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-40 bg-black relative overflow-hidden flex justify-center items-center">
      {/* Abstract glow behind the CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl w-full mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="liquid-glass p-12 md:p-20 rounded-[2.5rem] border border-white/[0.05] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-white/90">
            Start with clarity. <br/><i className="text-white/60">Stay in control.</i>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto font-sans">
            Build better money habits with Essara. Join the thoughtful people who trust us with their financial clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://essara.space/" 
              className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center"
            >
              Visit Essara <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="px-8 py-4 rounded-full font-medium text-white/60 hover:text-white transition-colors w-full sm:w-auto justify-center"
            >
              Back to Top
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
