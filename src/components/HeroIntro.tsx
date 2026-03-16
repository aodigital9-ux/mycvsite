"use client";

import Image from "next/image";

export default function HeroIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] pt-24 md:pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 scale-[0.78] md:scale-[0.72]">
          <Image
            src="/images/about-otmane.png"
            alt="Otmane Joual portrait"
            fill
            priority
            className="object-contain object-center opacity-35"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 flex min-h-[88vh] flex-col items-center justify-center px-4 text-center">
        <p className="mono-label mb-6 text-xs md:text-sm tracking-[0.35em] text-white/70">
          DIGITAL STRATEGIES · AQUACULTURE PRODUCTION · SYSTEM DESIGN
        </p>

        <h1 className="max-w-5xl text-6xl font-semibold tracking-[-0.06em] text-white sm:text-7xl md:text-[120px] md:leading-[0.92]">
          OTMANE
          <br />
          JOUAL
        </h1>

        <a
          href="mailto:otman.jowal@gmail.com"
          className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base text-white transition hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}