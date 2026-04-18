import { motion } from "motion/react";
import { LineChart, Target, Eye, Leaf, LayoutGrid, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Track income and expenses",
    description: "Log your transactions in seconds. No complex menus, just simple tracking built for speed.",
  },
  {
    icon: Target,
    title: "Set savings goals",
    description: "Visual progress towards what matters. Whether it's an emergency fund or a new laptop.",
  },
  {
    icon: Eye,
    title: "See patterns clearly",
    description: "See your spending patterns without digging through spreadsheets. Instant clarity.",
  },
  {
    icon: Leaf,
    title: "Build healthier habits",
    description: "Turn everyday money tracking into a simple, mindful habit that sticks.",
  },
  {
    icon: LayoutGrid,
    title: "Organized without clutter",
    description: "A calm interface that reduces friction. Only the metrics you actually need.",
  },
  {
    icon: ShieldCheck,
    title: "Clean and private",
    description: "Your financial picture shouldn't be a billboard. Built with privacy in mind.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Everything you need. <br className="hidden md:block"/> <i className="text-white/60">Nothing you don't.</i>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/60 font-sans text-lg"
          >
            Essara strips away the noise of traditional finance apps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * idx }}
              className="liquid-glass p-8 rounded-2xl border border-white/[0.03] group hover:bg-white/[0.03] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-6 h-6 text-white/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl tracking-tight font-medium mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed font-sans text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
