import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
import PricingBadge from './PricingBadge';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const totalHours = (timeLeft.days * 24) + timeLeft.hours;
    return `${totalHours}hrs ${timeLeft.minutes}mins ${timeLeft.seconds}secs`;
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
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white"
          >
            The Proven Blueprint for{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
              Full-Arch Growth
            </span>
            {' '}— Launch in Under 7 Days
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-balance text-lg text-white/80 md:text-xl"
          >
            Turn social media into 20+ implant consults in 14 days — and add $500K+ in predictable revenue
          </motion.p>

          {/* VSL Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 mb-8 md:mb-10 max-w-4xl mx-auto w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20 ring-1 ring-white/10">
              <wistia-player media-id="wnxtau4o6k" aspect="1.7777777777777777"></wistia-player>
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
              className="text-base sm:text-lg md:text-xl lg:text-2xl px-8 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 h-auto"
            >
              Get the Blueprint. Get the Patients.
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
                  30-Day Money Back Guarantee
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
