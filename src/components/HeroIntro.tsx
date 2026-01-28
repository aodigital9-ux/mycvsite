"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroIntro() {
  const [time, setTime] = useState("");
  const temp = "23.79";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const brasiliaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setTime(brasiliaTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black flex items-center justify-center px-4 md:px-8 pt-24"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1891291079/3332482028.jpeg"
            alt="Hero background"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 55%)",
          }}
        />
      </motion.div>

      {/* Center text */}
      <div className="relative z-10 px-6 text-center select-none">
        <motion.div
          className="text-white/60 uppercase tracking-[0.28em] text-xs md:text-sm"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          PRODUCT DESIGN • FRONTEND • UX
        </motion.div>

        <motion.div
          className="mt-5 text-white font-semibold tracking-tight leading-[0.9]
                     text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.28, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          RADILSON
        </motion.div>

        <motion.div
          className="text-white font-semibold tracking-tight leading-[0.9]
                     text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.38, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          GOMES
        </motion.div>

        <motion.div
          className="mt-8 inline-flex items-center justify-center gap-2
                     rounded-full border border-white/15 bg-white/5
                     px-5 py-2 text-white/80 text-xs md:text-sm tracking-wide"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Available for freelance • Let’s build something clean
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm px-4 md:px-8">
          <div className="flex items-center gap-4">
            <span className="text-white">Based in Brasilia, Brazil</span>
            <span className="mono-label text-white/55">{time} UTC</span>
            <span className="mono-label text-white/55">{temp}°C</span>
          </div>

          <Link href="#intro" className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="mono-label text-white/55">SCROLL</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/60"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12 5v14M5 12l7 7 7-7" strokeWidth="2" />
            </motion.svg>
          </Link>

          <div className="flex items-center gap-2">
            <span className="mono-label text-white/55 hidden md:inline">Freelance Availability</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="mono-label text-white">LIMITED HOURS</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
