import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="features" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative w-full flex justify-center" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-12"
        >
          <h2 id="services-heading" className="text-3xl md:text-5xl text-white tracking-tight font-sans">
            What <span className="font-serif italic text-white/80">Essara</span> does
          </h2>
          <p className="text-white/40 text-sm hidden md:block">Our core features</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1: Subscription & renewal tracker */}
          <motion.a
            href="https://essara.space/tools/subscription-leak-detector"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.0 }}
            className="liquid-glass rounded-3xl overflow-hidden group block cursor-pointer"
            aria-label="Subscription and renewal tracker"
            rel="noopener noreferrer"
          >
            <div className="relative aspect-video overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                aria-label="Subscription tracker feature demonstration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" aria-hidden="true" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-sans">Subscriptions</span>
                <div className="liquid-glass rounded-full p-2" aria-hidden="true">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif italic">Subscription &amp; renewal tracker</h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans speakable-services">
                Keep OTT, music, cloud storage, AI tool, gym, software and app-store plans, plus mobile recharge plans, in one list. See the total cost per month and per year, a timeline of renewals for the next 30 days and a reminder before each renewal. It also helps you spot subscriptions you have forgotten about.
              </p>
            </div>
          </motion.a>

          {/* Card 2: UPI AutoPay tracker */}
          <motion.a
            href="https://essara.space/tools/upi-autopay-tracker"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="liquid-glass rounded-3xl overflow-hidden group block cursor-pointer"
            aria-label="UPI AutoPay tracker"
            rel="noopener noreferrer"
          >
            <div className="relative aspect-video overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                aria-label="UPI AutoPay tracker feature demonstration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" aria-hidden="true" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-sans">UPI AutoPay</span>
                <div className="liquid-glass rounded-full p-2" aria-hidden="true">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif italic">UPI AutoPay tracker</h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans speakable-services">
                Add your UPI AutoPay mandates yourself and see upcoming auto-debits for the week and the month. Find older mandates you no longer use. Card, Google Play, App Store, NACH and wallet charges can go in the same list. Essara never asks for your UPI PIN or connects to your UPI app. To pause or revoke a mandate, use NPCI's UPI help portal at upihelp.npci.org.in.
              </p>
            </div>
          </motion.a>

          {/* Card 3: Expense tracker & budget planner (text only) */}
          <motion.a
            href="https://essara.space/download"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.0 }}
            className="liquid-glass rounded-3xl overflow-hidden group block cursor-pointer"
            aria-label="Expense tracker and budget planner"
            rel="noopener noreferrer"
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-sans">Expenses &amp; budgets</span>
                <div className="liquid-glass rounded-full p-2" aria-hidden="true">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif italic">Expense tracker &amp; budget planner</h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans speakable-services">
                Log expenses and income by hand, and set a monthly budget that shows what you have left to spend along with a daily spending limit. Review spending by category, a daily spend chart and a monthly summary, and search by name or amount. The receipt scanner reads the merchant, total, date and line items from a bill, and you review each one before saving.
              </p>
            </div>
          </motion.a>

          {/* Card 4: Investment tracker (text only) */}
          <motion.a
            href="https://essara.space/pricing"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="liquid-glass rounded-3xl overflow-hidden group block cursor-pointer"
            aria-label="Investment tracker"
            rel="noopener noreferrer"
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-sans">Investments</span>
                <div className="liquid-glass rounded-full p-2" aria-hidden="true">
                  <ArrowUpRight className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-serif italic">Investment tracker</h3>
              <p className="text-white/50 text-sm leading-relaxed font-sans speakable-services">
                Track gold, silver, stocks, mutual funds, SIPs, ETFs, crypto and fixed deposits in one place. Pro shows live NSE and BSE prices where price feeds are available. No broker or demat login is needed, and Essara never places trades.
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
