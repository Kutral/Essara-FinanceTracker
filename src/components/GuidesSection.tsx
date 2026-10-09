/// <reference types="vite/client" />
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const hubs = [
  {
    href: `${BASE}guides/upi-autopay/`,
    title: "UPI AutoPay Guides",
    description:
      "Step-by-step guides to find, pause and cancel UPI AutoPay mandates in Google Pay, PhonePe, Paytm, BHIM and other UPI apps in India.",
  },
  {
    href: `${BASE}guides/cancel/`,
    title: "Cancel Subscription Guides",
    description:
      "Plain-English guides to cancel popular subscriptions in India — OTT, music, cloud storage, food delivery and AI tools — and stop the linked AutoPay.",
  },
  {
    href: `${BASE}learn/`,
    title: "Money Clarity Glossary",
    description:
      "Clear explanations of UPI AutoPay, e-mandates, RBI recurring payment rules, subscription creep, money leaks and simple budgeting methods for India.",
  },
  {
    href: `${BASE}for/`,
    title: "Essara For You",
    description:
      "How students, families, freelancers, couples and iPhone users in India use a manual-first tracker like Essara to control subscriptions and spending.",
  },
];

const popularGuides = [
  { href: `${BASE}guides/upi-autopay/cancel-upi-autopay-google-pay/`, label: "Cancel UPI AutoPay in Google Pay" },
  { href: `${BASE}guides/upi-autopay/cancel-upi-autopay-phonepe/`, label: "Cancel UPI AutoPay in PhonePe" },
  { href: `${BASE}guides/upi-autopay/find-all-upi-autopay-mandates/`, label: "Find all your UPI AutoPay mandates" },
  { href: `${BASE}guides/cancel/cancel-netflix-subscription-india/`, label: "Cancel Netflix in India" },
  { href: `${BASE}guides/cancel/cancel-amazon-prime-india/`, label: "Cancel Amazon Prime in India" },
  { href: `${BASE}guides/cancel/cancel-google-play-subscriptions/`, label: "Cancel Google Play subscriptions" },
  { href: `${BASE}learn/what-is-upi-autopay/`, label: "What is UPI AutoPay?" },
  { href: `${BASE}learn/rbi-recurring-payment-rules/`, label: "RBI recurring payment rules" },
  { href: `${BASE}learn/subscription-audit-checklist/`, label: "Subscription audit checklist" },
  { href: `${BASE}for/iphone-users/`, label: "Essara on iPhone (web app)" },
];

export function GuidesSection() {
  return (
    <section
      id="guides"
      className="bg-black py-28 md:py-40 px-6 overflow-hidden relative w-full flex justify-center"
      aria-labelledby="guides-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="uppercase tracking-widest text-white/40 text-xs font-sans mb-4">Free guides</p>
          <h2
            id="guides-heading"
            className="text-3xl md:text-5xl text-white tracking-tight font-sans"
          >
            Stop paying for what you{" "}
            <span className="font-serif italic text-white/80">forgot</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {hubs.map((hub, i) => (
            <motion.a
              key={hub.href}
              href={hub.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="liquid-glass rounded-3xl p-6 md:p-8 group block text-white/60 hover:text-white transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-sans">Hub</span>
                <div className="liquid-glass rounded-full p-2" aria-hidden="true">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif italic">
                {hub.title}
              </h3>
              <p className="text-sm leading-relaxed font-sans text-white/60 group-hover:text-white/80 transition-colors">
                {hub.description}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-white text-lg md:text-xl mb-4 tracking-tight font-sans">Popular guides</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-sans text-sm">
            {popularGuides.map((guide) => (
              <li key={guide.href}>
                <a
                  href={guide.href}
                  className="text-white/60 hover:text-white underline-offset-4 hover:underline transition-colors"
                >
                  {guide.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
