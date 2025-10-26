import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const benefits = [
  {
    title: "YOU DON'T NEED YEARS OF MARKETING EXPERIENCE",
    description: "Building a predictable full-arch practice doesn't require marketing expertise or years in the industry—it's about following a proven system and using modern tools to reach ready-to-buy patients.",
    icon: "/website icons/21.png"
  },
  {
    title: "YOU DON'T NEED TO BE ON CAMERA",
    description: "Archify.io lets you grow your implant practice without ever appearing on video. Our content templates and ad strategies work without you needing to show your face.",
    icon: "/website icons/22.png"
  },
  {
    title: "YOU DON'T NEED SOCIAL MEDIA EXPERIENCE",
    description: "The Full-Arch Blueprint gives complete beginners a clear path from zero followers to 20+ monthly consults. A step-by-step system shows you every post, ad, and strategy—proven by practices that added $500K+ in just 90 days.",
    icon: "/website icons/23.png"
  },
  {
    title: "YOU DON'T NEED A HUGE FOLLOWING",
    description: "When you join Archify.io, you'll instantly learn how to reach motivated implant patients who are already searching, even with no followers, no ad experience, and no guesswork.",
    icon: "/website icons/24.png"
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop Watching Other Practices Grow from the Sidelines
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-3xl mx-auto">
            Up until a few months ago, building a successful full-arch practice was only for those who already had years of marketing expertise and huge ad budgets.
          </p>

          <p className="text-xl sm:text-2xl font-bold text-yellow-400 mb-12 max-w-3xl mx-auto">
            Now, our proven system can do everything for you.
          </p>

          <div className="space-y-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl text-left bg-white/[0.02] border border-white/10 backdrop-blur-sm"
              >
                <img 
                  src={benefit.icon} 
                  alt="" 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90 mb-6"
                />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-3">
                  {benefit.title}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <RainbowButton
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Benefits Section CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('https://whop.com/archify-io/social-media-dental-blueprint/', '_blank');
              }}
              className="text-base sm:text-lg md:text-xl px-10 sm:px-14 md:px-20 py-6 sm:py-7 md:py-9 h-auto"
            >
              Yes, Get It!
            </RainbowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
