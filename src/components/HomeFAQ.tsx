import { motion } from "motion/react";
import faqs from "../../content/home-faq.json";

export function HomeFAQ() {
  return (
    <section id="faq" className="bg-black pt-20 md:pt-28 pb-24 md:pb-32 px-6 overflow-hidden relative w-full" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
        <p className="text-white/40 text-sm tracking-widest uppercase mb-6">Questions</p>

        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl text-white leading-[1.1] tracking-tight font-sans"
        >
          Questions, <span className="font-serif italic text-white/60">answered</span>
        </motion.h2>

        <div className="mt-12 md:mt-16 w-full flex flex-col gap-4 text-left">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group liquid-glass rounded-2xl"
            >
              <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center justify-between gap-6 p-6 md:p-8 text-white text-lg">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-white/60 text-3xl leading-none transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="speakable-faq px-6 md:px-8 pb-6 md:pb-8 text-white/60 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-12 text-white/60 text-base">
          Still have a question? Email{" "}
          <a
            href="mailto:help@essara.space"
            className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            help@essara.space
          </a>
        </p>
      </div>
    </section>
  );
}
