import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "YOU DON'T NEED YEARS OF MARKETING EXPERIENCE",
    description: "Building a predictable full-arch practice doesn't require marketing expertise or years in the industry—it's about following a proven system and using modern tools to reach ready-to-buy patients."
  },
  {
    title: "YOU DON'T NEED TO BE ON CAMERA",
    description: "Archify.io lets you grow your implant practice without ever appearing on video. Our content templates and ad strategies work without you needing to show your face."
  },
  {
    title: "YOU DON'T NEED SOCIAL MEDIA EXPERIENCE",
    description: "The Full-Arch Blueprint gives complete beginners a clear path from zero followers to 20+ monthly consults. A step-by-step system shows you every post, ad, and strategy—proven by practices that added $500K+ in just 90 days."
  },
  {
    title: "YOU DON'T NEED A HUGE FOLLOWING",
    description: "When you join Archify.io, you'll instantly learn how to reach motivated implant patients who are already searching, even with no followers, no ad experience, and no guesswork."
  }
];

export default function HardTruth() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-sm text-yellow-400 uppercase tracking-wider">
              Good News
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-white">
            You Don't Need Any of This to Start
          </h2>

          <div className="space-y-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl text-left bg-white/[0.02] border border-white/10 backdrop-blur-sm"
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-green-400" />
                <div>
                  <p className="text-base sm:text-lg font-bold text-yellow-400 mb-2">
                    {benefit.title}
                  </p>
                  <p className="text-sm sm:text-base text-white/80">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border-2 border-yellow-400/30 backdrop-blur-sm">
            <p className="text-lg text-white/90">
              That's why we built <span className="text-yellow-400 font-bold">Archify.io</span>: a complete system that works even if you're starting from scratch—putting qualified patients on your calendar week after week.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
