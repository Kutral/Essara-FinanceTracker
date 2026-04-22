import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden relative w-full" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
        >
          About Essara
        </motion.p>
        
        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="speakable-about text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight font-sans max-w-4xl"
        >
          <span className="font-serif italic text-white/60">Pioneering</span> financial clarity <br className="hidden md:block" />
          for <span className="font-serif italic text-white/60">minds that want control,</span><br className="hidden md:block"/>
          <span className="font-serif italic text-white/60">without complexity</span> at essara.space.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 max-w-3xl text-white/60 text-base md:text-lg leading-relaxed speakable-about"
        >
          <p className="mb-4">
            Essara was built on a simple belief: everyone deserves to understand their money. Our personal finance platform combines powerful expense tracking, intuitive budget planning, and intelligent savings goal tools into one seamless experience.
          </p>
          <p>
            Whether you are just starting your financial journey or optimizing existing wealth-building strategies, Essara gives you the clarity and control to make smarter decisions every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
