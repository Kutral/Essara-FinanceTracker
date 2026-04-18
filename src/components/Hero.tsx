import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-24">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-white/[0.02] rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-white/[0.03] rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-black/60 z-0" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center mt-12 mb-24">
        
        <motion.div 
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight mb-8">
            Know <i className="text-white/80">exactly</i> where your money goes.
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-sans max-w-2xl mx-auto mb-12 leading-relaxed">
            Essara helps you track spending, understand habits, and build financial clarity with a calm, modern experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="https://essara.space/"
              className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm sm:text-base flex items-center gap-2 hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
            >
              Visit Essara <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#features"
              className="liquid-glass text-white px-8 py-3.5 rounded-full font-medium text-sm sm:text-base flex items-center gap-2 hover:bg-white/5 transition-colors"
            >
              Explore Features <ChevronRight className="w-4 h-4 text-white/50" />
            </a>
          </div>
          
          <p className="text-sm font-sans tracking-widest text-white/40 uppercase mb-8">
            Simple. Private. Built for real life.
          </p>
        </motion.div>

        {/* UI Mockup / Abstract representation */}
        <motion.div
          animate={{ opacity: [0, 1], y: [40, 0] }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full max-w-4xl mx-auto mt-20 relative pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10" />
          <div className="liquid-glass rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/[0.05]">
            <div className="flex flex-col md:flex-row gap-6 opacity-80">
              <div className="flex-1 space-y-4">
                <div className="h-6 w-32 bg-white/10 rounded-md animate-pulse" />
                <div className="h-16 w-full bg-white/5 rounded-xl flex items-center px-4">
                  <div className="h-4 w-24 bg-white/20 rounded-md" />
                  <div className="ml-auto h-6 w-16 bg-white/40 rounded-md" />
                </div>
                <div className="h-16 w-full bg-white/5 rounded-xl flex items-center px-4">
                   <div className="h-4 w-32 bg-white/20 rounded-md" />
                   <div className="ml-auto h-6 w-20 bg-white/40 rounded-md" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="h-32 w-full bg-white/5 rounded-2xl flex flex-col justify-center items-center">
                  <div className="text-xs text-white/40 uppercase tracking-widest mb-2 font-mono">Monthly Target</div>
                  <div className="text-3xl font-serif">$2,400</div>
                </div>
                <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
