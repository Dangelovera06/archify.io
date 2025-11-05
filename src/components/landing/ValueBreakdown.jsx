import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, DollarSign } from "lucide-react";

const components = [
  {
    name: "Staff Script Templates",
    description: "Word-for-word call, text, and DM frameworks built from $1M+ in real implant campaigns. Includes rebuttals, tone training, and live-use examples so any team member can convert confidently.",
    value: "$697"
  },
  {
    name: "Content Calendar System",
    description: "A 30-day plug-and-post calendar packed with patient education, emotional hooks, and authority-building video prompts. Designed for quick execution — no doctor filming required.",
    value: "$397"
  },
  {
    name: "Ad Mastery Blueprint",
    description: "A complete $1,500 training suite of video modules showing your team exactly how to run Meta ads for implants — from targeting and ad creation to compliance-safe copywriting and optimization.",
    value: "$1,497"
  },
  {
    name: "Setup & Launch Guide",
    description: "Step-by-step video onboarding series that walks your staff through implementation, ad launch, and follow-up workflows in under 7 days — no marketing background needed.",
    value: "$997"
  },
  {
    name: "Custom AI Growth Agent \"ArchAssist\"",
    description: "Your personalized AI assistant trained on high-performing dental and implant data. Writes new ad copy, staff scripts, and captions monthly — adapting to your brand voice and local results automatically.",
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
          className="mb-8 md:mb-12 max-w-4xl mx-auto"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="space-y-4">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start justify-between gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0"
                >
                  <div className="flex items-start gap-2 flex-1">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                        {component.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-yellow-400 whitespace-nowrap">
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
          className="mb-8 md:mb-12 max-w-4xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-500/10 border-2 border-yellow-400/30 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-base sm:text-lg text-white/80 mb-1">Total Perceived Value</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white line-through opacity-60">
                  $5,085+
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-base sm:text-lg text-yellow-400 mb-1 font-semibold">Your Investment Today</div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-yellow-400">
                  $497
                </div>
                <div className="text-xs sm:text-sm text-yellow-200/80 mt-1">One-Time Payment</div>
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
          className="text-center max-w-4xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-600/5 border border-green-400/20 backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-xs sm:text-sm uppercase tracking-wider text-green-400 font-semibold">
                ROI Expectation
              </span>
            </div>
            <p className="text-base sm:text-lg text-white mb-3">
              If the system books <span className="font-bold text-green-400">just one implant case</span>, your practice profits:
            </p>
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-green-400 mb-3">
              $10,000–$30,000+
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/20 border border-green-400/30">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span className="text-sm sm:text-base font-bold text-white">
                20x–60x ROI Potential
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

