import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Week 1-2: Content & Ads",
    description: "Launch your first authority videos and social ads with our templates and coaching."
  },
  {
    icon: Target,
    title: "Week 3: Optimize & Scale",
    description: "Review what's working, refine your approach, and increase reach."
  },
  {
    icon: TrendingUp,
    title: "Week 4: Convert & Close",
    description: "Turn consults into booked cases with our proven close system."
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
            How the 30-Day Sprint Works
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
          className="text-center px-4"
        >
          <a
            href="https://whop.com/archify-io/social-media-dental-blueprint/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full sm:w-auto inline-flex items-center gap-2 sm:gap-3 px-10 sm:px-14 md:px-20 lg:px-28 py-6 sm:py-7 md:py-9 lg:py-11 rounded-xl bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.5),0_0_40px_rgba(250,204,21,0.3),0_0_60px_rgba(250,204,21,0.2)]"
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
