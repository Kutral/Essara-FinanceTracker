import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Essara?",
    a: "Essara is a modern, minimalist personal finance product designed to help you track spending, set savings goals, and understand your money habits without friction."
  },
  {
    q: "Who is it for?",
    a: "It's built for students, freelancers, indie makers, working professionals, and anyone who wants to take control of their money without feeling overwhelmed by complex dashboards."
  },
  {
    q: "Is Essara free?",
    a: "Essara offers a core free tier with essential tools, alongside premium options for advanced clarity and features."
  },
  {
    q: "Is my data private?",
    a: "Absolutely. We operate with a strict privacy-first mindset. Your financial information is kept secure and is never sold."
  },
  {
    q: "How do I get started?",
    a: "Simply visit our main site, create an account in seconds, and start logging your first transactions."
  },
  {
    q: "Where is the main site?",
    a: "You can access the full product and sign up right now by visiting https://essara.space/."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-black relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Questions & Answers</h2>
          <p className="text-white/50 font-sans">Everything you need to know about the product.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-white/[0.05] rounded-2xl overflow-hidden liquid-glass transition-all"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center bg-transparent"
              >
                <span className="font-medium text-white/90 pr-8">{faq.q}</span>
                {openIdx === idx ? 
                  <Minus className="w-5 h-5 text-white/40 flex-shrink-0" /> : 
                  <Plus className="w-5 h-5 text-white/40 flex-shrink-0" />
                }
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-6 pt-0 text-sm text-white/50 font-sans leading-relaxed">
                  {idx === faqs.length - 1 ? (
                     <>You can access the full product and sign up right now by visiting <a href="https://essara.space/" className="text-white underline underline-offset-4 opacity-80 hover:opacity-100">https://essara.space/</a>.</>
                  ) : faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
