import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Authority Content",
    description: "Story-driven posts that earn patient trust."
  },
  {
    icon: Target,
    title: "Smart Ads",
    description: "Targeted campaigns that actually convert into consults."
  },
  {
    icon: TrendingUp,
    title: "Predictable Growth",
    description: "A steady stream of full-arch patients, not one-off leads."
  }
];

export default function Blueprint() {
  return (
    <section id="blueprint" className="py-24 md:py-32 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm bg-white/[0.03] text-yellow-400 border border-white/10 uppercase tracking-wider">
              The Blueprint
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4 text-white">
            Three Simple Steps to Predictable Implant Growth
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
            >
              {/* Large Number with Icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl shadow-yellow-500/30">
                  <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-xl font-black shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.5),0_0_40px_rgba(250,204,21,0.3),0_0_60px_rgba(250,204,21,0.2)]"
          >
            <span 
              className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/40 via-transparent to-transparent"
            />
            <span className="relative z-10 flex items-center gap-3">
              <span>Yes, Get It!</span>
              <ArrowRight className="w-6 h-6" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
