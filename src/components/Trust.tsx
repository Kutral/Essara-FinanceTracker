import { motion } from "motion/react";
import { Lock, Heart, CheckCircle2 } from "lucide-react";

export function Trust() {
  const items = [
    {
      icon: Lock,
      title: "Privacy-first mindset",
      desc: "We don't sell your data. Your financial life remains strictly your own.",
    },
    {
      icon: Heart,
      title: "Designed for daily use",
      desc: "Fast, minimal, and beautiful—so you actually enjoy using it every day.",
    },
    {
      icon: CheckCircle2,
      title: "Simple enough to stick with",
      desc: "Built to build habits, not to overwhelm you with charts.",
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="text-center p-8 liquid-glass rounded-2xl border border-white/[0.03]"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-white/[0.03] flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-medium text-white/90 mb-2">{item.title}</h4>
              <p className="text-sm text-white/50">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
