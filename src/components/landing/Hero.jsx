import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Add{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                10–15 Implant Consultations Every Month
              </span>
              {' '}With a System That Runs Itself.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-balance text-lg text-white/80 md:text-xl"
          >
            A 7-day plug-and-play system your staff can run daily to deliver 10–15 new consultations a month — no agency required.
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
            className="flex flex-col items-center gap-4 md:gap-5 mb-6 md:mb-8 px-4"
          >
            <RainbowButton
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Main Hero CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('https://whop.com/archify-io/social-media-dental-blueprint/', '_blank');
              }}
              className="w-full sm:w-[397px] text-lg sm:text-xl font-bold h-auto py-4 sm:py-[15.6px]"
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
        </div>
      </div>
    </BeamsBackground>
  );
}
