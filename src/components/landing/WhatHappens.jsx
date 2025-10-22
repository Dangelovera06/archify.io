import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Get Your Full-Arch Practice Built with a Proven System",
    description: "Our proven blueprint will analyze your market and combine it with your practice goals to build your full-arch program from scratch—from selecting the most profitable positioning to creating all the content and ads you need.",
    image: "/WHAT HAPPENS/1.webp"
  },
  {
    title: "Get Patients Without Spending Thousands on Ads",
    description: "Learn how to make your first 5-10 consults for free by leveraging social media organically, without creating content or showing your face, and turn quick wins into consistent monthly revenue.",
    image: "/WHAT HAPPENS/2.webp"
  },
  {
    title: "Let the System Do the Work for You",
    description: "Our proven templates and strategies will build all the marketing materials you need to promote your full-arch services across different platforms, scaling your revenue indefinitely.",
    image: "/WHAT HAPPENS/3.webp"
  }
];

export default function WhatHappens() {
  return (
    <section className="py-16 md:py-24 relative bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            This is What Happens After You Join{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Archify.io
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 rounded-2xl text-left bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300">
                {/* Image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

