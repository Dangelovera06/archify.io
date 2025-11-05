import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, DollarSign } from "lucide-react";

const components = [
  {
    name: "Lead Tracker System",
    description: "Done-for-you spreadsheet to log, track, and qualify implant leads",
    value: "$297"
  },
  {
    name: "Staff Script Templates",
    description: "Call, text, DM frameworks built from $500K+ in real implant ad campaigns",
    value: "$297"
  },
  {
    name: "Content Calendar System",
    description: "30-day plug-in schedule with post ideas, captions, and formats",
    value: "$197"
  },
  {
    name: "Ad Mastery Blueprint",
    description: "Step-by-step Meta ad setup, compliant copy, targeting presets, and creative formulas",
    value: "$497"
  },
  {
    name: "Setup & Launch Guide",
    description: "Quickstart guide for staff deployment (no marketing experience needed)",
    value: "$97"
  }
];

export default function ValueBreakdown() {
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
              Complete Value Breakdown
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4 text-white">
            Everything You Get Inside
          </h2>
        </motion.div>

        {/* Components List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="space-y-4">
            {components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start justify-between gap-4 p-4 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-yellow-400/30 transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                      {component.name}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70">
                      {component.description}
                    </p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-yellow-400 whitespace-nowrap">
                  {component.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Total Value */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-500/10 border-2 border-yellow-400/30 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-lg sm:text-xl text-white/80 mb-2">Total Perceived Value</div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white line-through opacity-60">
                  $1,385+
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-lg sm:text-xl text-yellow-400 mb-2 font-semibold">Your Investment Today</div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-yellow-400">
                  $297
                </div>
                <div className="text-sm sm:text-base text-yellow-200/80 mt-2">One-Time Payment</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Expectation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-400" />
            <span className="text-sm sm:text-base uppercase tracking-wider text-green-400 font-semibold">
              ROI Expectation
            </span>
          </div>

          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-600/5 border border-green-400/20 backdrop-blur-sm">
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-4">
              If the system books <span className="font-bold text-green-400">just one implant case</span>, your practice profits:
            </p>
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-green-400 mb-4">
              $10,000–$30,000+
            </div>
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-green-400/20 border border-green-400/30">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span className="text-base sm:text-lg md:text-xl font-bold text-white">
                20x–60x ROI Potential
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

