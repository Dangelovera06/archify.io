import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Video, CheckCircle2, ArrowRight } from "lucide-react";

const playbookFeatures = [
  "The Four Pillars Routine: Social Authority Ads, Trust-First Authority Videos, Prequalified Consult Flow, And A Case Close System",
  "Empathy-First Scripting Using The Hook, Heart, Help, Hope Framework To Build Trust And Overcome Fear",
  "Distribution Blueprint For YouTube, Instagram, And TikTok To Maximize Watch Time And Consults",
  "Visual And Editing Standards For Authority Videos: Natural Expressions, Eye Contact, Clean Backgrounds, Captions, And Emotional Proof",
  "Done-For-You Ad And Video Templates To Launch Fast Without Guesswork",
  "Pre-Consult Education Path That Prepares Patients Emotionally And Financially Before The First Call",
  "Metrics That Matter Dashboard: Watch Time, Qualified Consults, Show Rate, Case Acceptance, And Cost Per Booked Consult",
  "30-Day Sprint Plan To Launch, Validate, And Scale Without Discounts, Insurance Battles, Or Referrals",
  "Troubleshooting Playbook For Low Watch Time, Drop-Offs, No-Shows, And Price-Shopping",
  "Compliance-Minded Messaging To Stay Clear, Ethical, And Patient-Centered"
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

        {/* Detailed Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-white">
            Inside The Playbook
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {playbookFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {feature}
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


