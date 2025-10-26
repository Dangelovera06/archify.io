import React, { useState, useEffect } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";

import Hero from "../components/landing/Hero";
import HardTruth from "../components/landing/HardTruth";
import WhatHappens from "../components/landing/WhatHappens";
import SocialProof from "../components/landing/SocialProof";
import VideoSlider from "../components/landing/VideoSlider";
import EmotionalCore from "../components/landing/EmotionalCore";
import Blueprint from "../components/landing/Blueprint";
import FinalClose from "../components/landing/FinalClose";
import Testimonials from "../components/landing/Testimonials";
import WhatYouGet from "../components/landing/WhatYouGet";

export default function Landing() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 31, seconds: 59 });

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
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-950">
      {/* Floating Navigation Header - Visible Throughout Site */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Archify.io" className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-lg" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">Archify.io</span>
          </div>

          {/* Timer */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="font-semibold text-white/80">
              Offer ends:
            </span>
            <span className="font-extrabold tabular-nums bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
              {formatTime()}
            </span>
          </div>

          {/* Rainbow CTA Button */}
          <RainbowButton
            onClick={(e) => {
              if (window.fbq) {
                window.fbq('track', 'Lead', {
                  content_name: 'Header CTA Click',
                  content_category: 'CTA Button'
                });
              }
              window.open('https://whop.com/checkout/plan_uSIx6iByd4a9F?d2c=true', '_blank');
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl px-10 sm:px-14 md:px-20 lg:px-28 py-6 sm:py-7 md:py-9 lg:py-11 h-auto"
          >
            Join Now
          </RainbowButton>
        </div>
      </header>

      <Hero />
      <WhatYouGet />
      <Testimonials />
      <HardTruth />
      <WhatHappens />
      <SocialProof />
      <VideoSlider />
      <EmotionalCore />
      <Blueprint />
      <FinalClose />

      {/* Footer */}
      <footer className="py-8 sm:py-12 w-full border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl sm:text-2xl mb-3 sm:mb-4 font-display font-bold text-white">
            Archify.io
          </div>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-white/60">
            Turning social media into predictable implant revenue
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-white/40">
            © 2025 Archify.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}