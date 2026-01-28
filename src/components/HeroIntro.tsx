"use client";

import { motion } from "framer-motion";

type HeroIntroProps = {
  nameTop?: string;      // e.g. "OTMANE"
  nameBottom?: string;   // e.g. "JOUAL"
  subtitle?: string;     // e.g. "Product Designer • Frontend"
  bgImageUrl?: string;   // demo image for now
};

export default function HeroIntro({
  nameTop = "OTMANE",
  nameBottom = "JOUAL",
  subtitle = "DESIGN • FRONTEND • UX",
  bgImageUrl = "https://images.unsplash.com/photo-1520975958225-41a1b6a4d9b3?auto=format&fit=crop&w=2400&q=80",
}: HeroIntroProps) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* image layer */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
        {/* dark overlay like the reference */}
        <div className="absolute inset-0 bg-black/55" />
        {/* subtle vignette */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 55%)",
          }}
        />
      </motion.div>

      {/* Center text */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6">
        <div className="text-center select-none">
          {/* small line */}
          <motion.div
            className="text-white/60 uppercase tracking-[0.28em] text-xs md:text-sm"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {subtitle}
          </motion.div>

          {/* big name line 1 */}
          <motion.div
            className="mt-5 text-white font-semibold tracking-tight leading-[0.9]
                       text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.28, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {nameTop}
          </motion.div>

          {/* big name line 2 (slight stagger + tighter) */}
          <motion.div
            className="text-white font-semibold tracking-tight leading-[0.9]
                       text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.38, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {nameBottom}
          </motion.div>

          {/* optional “pill” line like a badge */}
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
      </div>

      {/* subtle scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 text-xs uppercase tracking-[0.22em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
