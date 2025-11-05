import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

const components = [
  { name: "Staff Script Templates", value: "$697" },
  { name: "Content Calendar System", value: "$397" },
  { name: "Ad Mastery Blueprint", value: "$1,497" },
  { name: "Setup & Launch Guide", value: "$997" },
  { name: "AI Growth Agent \"ArchAssist\"", value: "$1,497" },
  { name: "Community", value: "Priceless" }
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

        {/* Single Box with Everything */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-6 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10">
            
            {/* Components List */}
            <div className="space-y-4 mb-8">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between gap-4 w-full"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <span className="text-base sm:text-lg md:text-xl text-white font-medium">
                      {component.name}
                    </span>
                  </div>
                  <span className={`text-base sm:text-lg md:text-xl font-bold whitespace-nowrap ${component.name === "Community" ? "text-yellow-400" : "text-yellow-400"}`}>
                    {component.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-8"></div>

            {/* Pricing */}
            <div className="flex items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-sm text-white/60 mb-1">Total Value</div>
                <div className="text-3xl sm:text-4xl font-black text-white/40 line-through">
                  $5,085
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-yellow-400/80 mb-1">Today</div>
                <div className="text-4xl sm:text-5xl font-black text-yellow-400">
                  $497
                </div>
              </div>
            </div>

            {/* ROI */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-600/5 border border-green-400/20 mb-6">
              <p className="text-sm sm:text-base text-white/70 mb-2">
                Book one case, profit
              </p>
              <div className="text-2xl sm:text-3xl font-black text-green-400 mb-2">
                $10K–$30K+
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-400/20">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  20x–60x ROI
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://whop.com/archify-io/social-media-dental-blueprint/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl px-10 sm:px-14 md:px-20 lg:px-28 py-6 sm:py-7 md:py-9 lg:py-11 text-black font-bold transition-all hover:scale-105 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 shadow-[0_0_20px_rgba(250,204,21,0.5),0_0_40px_rgba(250,204,21,0.3),0_0_60px_rgba(250,204,21,0.2)]"
            >
              <span 
                className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/40 via-transparent to-transparent"
              />
              <span className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed flex items-center justify-center gap-2 sm:gap-3">
                <span className="whitespace-nowrap">Yes, Get It!</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
              </span>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

