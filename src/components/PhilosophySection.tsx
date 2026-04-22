import { motion } from "motion/react";

export function PhilosophySection() {
  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden w-full flex justify-center" aria-labelledby="philosophy-heading">
      <div className="max-w-6xl w-full">
        <motion.h2
          id="philosophy-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 font-sans"
        >
          Financial clarity <span className="font-serif italic text-white/40">x</span> Vision.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Audio/Video Element */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] w-full"
            aria-label="Financial clarity visualization"
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              aria-label="Animation representing financial clarity and money management"
            />
          </motion.div>

          {/* Right Text Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-12"
          >
            <article>
              <h3 className="text-white/40 text-xs tracking-widest uppercase mb-4">Choose your space</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-sans speakable-services">
                Every meaningful breakthrough begins at the intersection of discipline and clarity. We operate at that crossroads, turning raw transactions into tangible outcomes that give you peace of mind. Our expense tracker and budget planner work together to surface the insights that actually matter for your personal finance goals. Get started now at <a href="https://essara.space/" className="text-white underline underline-offset-4 hover:opacity-80" rel="noopener noreferrer">essara.space</a>.
              </p>
            </article>

            <div className="w-full h-px bg-white/10" aria-hidden="true" />

            <article>
              <h3 className="text-white/40 text-xs tracking-widest uppercase mb-4">Shape the future</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-sans speakable-services">
                We believe that the best financial habits emerge when curiosity meets conviction. Essara is designed to uncover hidden spending patterns and translate them into positive experiences that resonate long after you check your dashboard. From daily expense tracking to long-term savings goals, essara.space helps you build a financial future you can actually see.
              </p>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
