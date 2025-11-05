import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, DollarSign } from "lucide-react";

const components = [
  {
    name: "Staff Script Templates",
    description: "Word-for-word call, text, and DM frameworks from $1M+ campaigns",
    value: "$697"
  },
  {
    name: "Content Calendar System",
    description: "30-day plug-and-post calendar with video prompts",
    value: "$397"
  },
  {
    name: "Ad Mastery Blueprint",
    description: "Complete Meta ads training for your team",
    value: "$1,497"
  },
  {
    name: "Setup & Launch Guide",
    description: "7-day implementation walkthrough",
    value: "$997"
  },
  {
    name: "AI Growth Agent \"ArchAssist\"",
    description: "Writes ad copy and scripts automatically",
    value: "$1,497"
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
          className="mb-8 md:mb-12 max-w-3xl mx-auto"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="space-y-5">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                        {component.name}
                      </h3>
                      <p className="text-sm text-white/50">
                        {component.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-yellow-400 whitespace-nowrap">
                    {component.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Total Value */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-500/10 border-2 border-yellow-400/30">
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="text-sm text-white/60 mb-1">Total Value</div>
                <div className="text-3xl sm:text-4xl font-black text-white/40 line-through">
                  $5,085
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-yellow-400/80 mb-1">Today</div>
                <div className="text-5xl sm:text-6xl font-black text-yellow-400">
                  $497
                </div>
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
          className="text-center max-w-3xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-600/5 border border-green-400/20">
            <p className="text-base sm:text-lg text-white/70 mb-2">
              Book one case, profit
            </p>
            <div className="text-3xl sm:text-4xl font-black text-green-400 mb-3">
              $10K–$30K+
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/20">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-white">
                20x–60x ROI
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

