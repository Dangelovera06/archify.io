import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Gift } from "lucide-react";

const playbookFeatures = [
  "The Four Pillars System: Ads, Videos, Consult Flow & Case Close",
  "Hook-Heart-Help-Hope Video Framework",
  "YouTube, Instagram & TikTok Distribution Strategy",
  "Video Production Standards & Visual Guidelines",
  "Pre-Consult Education System",
  "Key Metrics Dashboard: Watch Time, Consults, Show Rate & Acceptance",
  "30-Day Launch Plan",
  "Troubleshooting Guide"
];

const bonuses = [
  {
    title: "Ad Mastery Training",
    description: "Complete video training on creating high-converting social authority ads"
  },
  {
    title: "Done-For-You Templates",
    description: "Ready-to-use ad and video templates to launch immediately"
  }
];

export default function WhatYouGet() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm bg-white/[0.03] text-yellow-400 border border-white/10 uppercase tracking-wider">
              What You're Getting
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4 text-white">
            Everything You Need to Pre-Sell Arches
          </h2>
        </motion.div>

        {/* Inside The Playbook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-white">
            Inside The Playbook
          </h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {playbookFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-yellow-400/30 transition-colors"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/90 font-medium leading-snug">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-yellow-400" />
              <span className="text-sm uppercase tracking-wider text-yellow-400 font-semibold">
                Bonuses Included
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border border-yellow-400/20 backdrop-blur-sm"
              >
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {bonus.title}
                </h4>
                <p className="text-sm sm:text-base text-white/70">
                  {bonus.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-10 sm:px-14 md:px-20 lg:px-28 py-6 sm:py-7 md:py-9 lg:py-11 text-black font-bold transition-all hover:scale-105 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 shadow-[0_0_20px_rgba(250,204,21,0.5),0_0_40px_rgba(250,204,21,0.3),0_0_60px_rgba(250,204,21,0.2)]"
          >
            <span 
              className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/40 via-transparent to-transparent"
            />
            <span className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed flex items-center justify-center gap-2 sm:gap-3">
              <span className="whitespace-nowrap">Yes, Get It!</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


