import { motion } from "motion/react";

export function FeaturedVideoSection() {
  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden w-full flex justify-center" aria-label="Essara product demonstration video">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-6xl rounded-3xl overflow-hidden aspect-video relative group"
      >
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          aria-label="Essara personal finance app demo video showing expense tracking and budget features"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" aria-hidden="true" />

        {/* Bottom Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full md:w-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-3 text-left">Our Approach</p>
            <p className="text-white text-sm md:text-base leading-relaxed text-left speakable-services">
              We believe in the power of simplicity. Every financial journey starts with a question, and essara.space opens the door to clarity and peace of mind through intelligent expense tracking, automated budget planning, and personalized savings insights.
            </p>
          </div>
          
          <motion.a
            href="https://essara.space/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium w-full md:w-auto text-center pointer-events-auto cursor-pointer"
            aria-label="Explore Essara personal finance features"
            rel="noopener noreferrer"
          >
            Explore essara.space
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
