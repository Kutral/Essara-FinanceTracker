import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="features" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative w-full flex justify-center" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-12"
        >
          <h2 id="services-heading" className="text-3xl md:text-5xl text-white tracking-tight font-sans">
            What we do at <span className="font-serif italic text-white/80">essara.space</span>
          </h2>
          <p className="text-white/40 text-sm hidden md:block">Our core features</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1: Tracking & Analysis */}
          <motion.a
            href="https://essara.space/"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.0 }}
            className="liquid-glass rounded-3xl overflow-hidden group block cursor-pointer"
            aria-label="Expense Tracking and Analysis feature"
            rel="noopener noreferrer"
          >
            <div className="relative aspect-video overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                aria-label="Expense tracking feature demonstration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" aria-hidden="true" />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-sans">Core Insights</span>
                <div className="liquid-glass rounded-full p-2" aria-hidden="true">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif italic">Tracking & Analysis</h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans speakable-services">
                We dig deep into your transaction data, organizing your spending habits to surface the insights that drive meaningful, lasting financial change. Our intelligent expense tracker automatically categorizes purchases, identifies trends, and shows you exactly where your money goes each month.
              </p>
            </div>
          </motion.a>

          {/* Card 2: Planning & Execution */}
          <motion.a
            href="https://essara.space/"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="liquid-glass rounded-3xl overflow-hidden group block cursor-pointer"
            aria-label="Budget Planning and Savings Goals feature"
            rel="noopener noreferrer"
          >
            <div className="relative aspect-video overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                aria-label="Budget planning and savings goals feature demonstration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" aria-hidden="true" />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-sans">Savings Goals</span>
                <div className="liquid-glass rounded-full p-2" aria-hidden="true">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif italic">Planning & Execution</h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans speakable-services">
                From setting your first savings goal to completing it, Essara obsesses over every detail to deliver experiences that feel effortless. Create custom budgets, track progress in real time, and celebrate milestones along your journey to financial freedom at essara.space.
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
