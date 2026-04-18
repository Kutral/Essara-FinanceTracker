import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Add your transactions",
    description: "A quick, frictionless way to log spending on the go.",
  },
  {
    number: "02",
    title: "Review your patterns",
    description: "Visual dashboards that make sense at a single glance.",
  },
  {
    number: "03",
    title: "Make better decisions",
    description: "Course correct before the month ends, without guilt.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-black relative border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 justify-between">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif mb-6"
            >
              How it works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white/60 font-sans text-lg max-w-sm"
            >
              Essara turns raw numbers into clarity you can actually use. Three steps to better habits.
            </motion.p>
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line on desktop */}
              <div className="hidden md:block absolute top-8 left-8 right-8 h-[1px] bg-white/[0.08]" />
              
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 liquid-glass rounded-full flex items-center justify-center font-serif text-xl border border-white/10 mb-6 font-medium text-white/90">
                    {step.number}
                  </div>
                  <h3 className="text-xl tracking-tight font-medium text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 font-sans text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
