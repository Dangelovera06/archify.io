import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
import PricingBadge from './PricingBadge';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 31, seconds: 59 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else {
          return { ...prev, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return `${timeLeft.hours}hrs ${timeLeft.minutes}mins ${timeLeft.seconds}secs`;
  };

  return (
    <BeamsBackground intensity="medium">
      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" /> Full-Arch Growth System
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white/90">
              The{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                $100K Implant Funnel
              </span>
              :
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              The Funnel Full-Arch Practices Use to Book 3–5 Cases Monthly
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-balance text-lg text-white/80 md:text-xl"
          >
            A 30-Day Precision System to Pre-Sell Arches & Turn Social Media Into a Booking Engine — Even If You've Never Gone Viral
          </motion.p>

          {/* Landing Page Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mb-8 md:mb-10 max-w-4xl mx-auto w-full"
          >
            <div className="relative">
              <img 
                src="/fixed-size-im.png" 
                alt="Archify.io Landing Page" 
                className="w-full h-auto opacity-100"
              />
            </div>
          </motion.div>

          {/* Rainbow CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 mb-6 md:mb-8"
          >
            <RainbowButton
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Main Hero CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true', '_blank');
              }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl px-12 sm:px-16 md:px-24 lg:px-32 py-7 sm:py-8 md:py-10 lg:py-12 h-auto"
            >
              Yes, Get It!
            </RainbowButton>
            
            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
              <span className="font-semibold text-white/80">
                Offer ends in:
              </span>
              <span className="font-extrabold tabular-nums bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                {formatTime()}
              </span>
            </div>
          </motion.div>

          {/* Pricing Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <PricingBadge />
          </motion.div>

          {/* Money Back Guarantee - EMPHASIZED */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-500/10 border-2 border-yellow-400/30 backdrop-blur-sm shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-shadow">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 text-yellow-400 animate-pulse" />
              <div className="text-left">
                <div className="font-extrabold text-xl sm:text-2xl md:text-3xl text-white mb-1">
                  Money Back Guarantee
                </div>
                <div className="text-sm sm:text-base md:text-lg text-yellow-200/90 font-medium">
                  Not satisfied? Get a full refund, no questions asked.
                </div>
              </div>
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 text-yellow-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}
