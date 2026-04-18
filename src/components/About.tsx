import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-24 bg-black border-y border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-sans tracking-widest text-white/40 uppercase mb-6">
            The Builder
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white/90">
            Created with care for people who want better control over money.
          </h2>
          <p className="text-lg text-white/50 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
            Essara is an indie-built product crafted by <span className="text-white">Kutral Labs</span>. We focus on building useful, elegant tools that respect your time and attention. No corporate bloat, just a refined experience.
          </p>
          
          <a href="https://essara.space/" className="inline-flex items-center gap-2 text-white/80 hover:text-white pb-1 border-b border-white/20 hover:border-white transition-all">
            See the main project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
