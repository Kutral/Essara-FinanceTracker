import { motion } from "motion/react";

export function WhyEssara() {
  return (
    <section className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] tracking-tight">
              Clarity is the <br/> <i className="text-white/70">real feature.</i>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-sans leading-relaxed mb-6">
              Essara is designed to make money feel understandable. Instead of overwhelming dashboards and noisy charts, it gives you a clean place to see what matters, build good habits, and stay in control.
            </p>
            <p className="text-lg text-white/50 font-sans leading-relaxed">
              We value simplicity over complexity, and clarity over clutter. Practical finance for real people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="liquid-glass p-10 rounded-3xl border border-white/[0.05] max-w-sm relative">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0C20 11.0457 28.9543 20 40 20C28.9543 20 20 28.9543 20 40C20 28.9543 11.0457 20 0 20C11.0457 20 20 11.0457 20 0Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-white">The essara philosophy</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-white/70 font-sans text-sm">
                  <span className="text-white/40">—</span>
                  Calm interface that reduces friction
                </li>
                <li className="flex gap-3 text-white/70 font-sans text-sm">
                  <span className="text-white/40">—</span>
                  Built for consistency, not overwhelm
                </li>
                <li className="flex gap-3 text-white/70 font-sans text-sm">
                  <span className="text-white/40">—</span>
                  Your data stays purely yours
                </li>
              </ul>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
