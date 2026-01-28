"use client";

import Image from "next/image";
import Link from "next/link";
import HeroIntro from "@/components/HeroIntro";
import { motion, useReducedMotion } from "framer-motion";

// Pink asterisk component
function PinkAsterisk({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#e91e63" />
    </svg>
  );
}

// Navigation component
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-[#0a0a0a]/80 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-1">
        <span className="text-xl md:text-2xl font-bold tracking-tight">RAD</span>
        <span className="text-[#e91e63] text-xl md:text-2xl">*</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#work" className="mono-label text-gray-400 hover:text-white transition-colors">
          <span className="text-gray-600">01</span> Work
        </Link>
        <Link href="#playground" className="mono-label text-gray-400 hover:text-white transition-colors">
          <span className="text-gray-600">02</span> Playground
        </Link>
        <Link href="#about" className="mono-label text-gray-400 hover:text-white transition-colors">
          <span className="text-gray-600">03</span> About Me
        </Link>
      </div>
    </nav>
  );
}

// Sidebar component
function Sidebar() {
  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col">
      <button className="bg-white text-black px-3 py-4 font-bold text-sm rounded-l-lg">W.</button>
      <button
        className="bg-[#1a1a1a] text-white px-3 py-4 text-xs mono-label rounded-bl-lg"
        style={{ writingMode: "vertical-rl" }}
      >
        Honors
      </button>
    </div>
  );
}

/**
 * ✅ Animated marquee title (Framer Motion, no dependency on external CSS)
 * This is the “exact same thing” style: edge fade + infinite loop.
 */
function SectionTitleMarquee({
  leftWord,
  rightWord,
  labels,
}: {
  leftWord: string;
  rightWord: string;
  labels: string[];
}) {
  const reduce = useReducedMotion();

  // If reduced motion: no marquee movement (still shows the title)
  const marqueeAnim = reduce
    ? {}
    : {
        x: ["0%", "-50%"],
        transition: { duration: 18, ease: "linear", repeat: Infinity },
      };

  const Chunk = () => (
    <div className="flex items-center gap-10 pr-10">
      <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-white">{rightWord}</span>
      <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
      <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-[#121c28]">{leftWord}</span>
      <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
      <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-white">{rightWord}</span>
      <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
    </div>
  );

  return (
    <div className="relative overflow-hidden py-8 md:py-10 border-y border-[#1f1f1f]">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

      {/* Track */}
      <div className="whitespace-nowrap">
        <motion.div className="flex w-[200%]" animate={marqueeAnim}>
          {/* Fill enough content to avoid gaps */}
          <div className="flex w-1/2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Chunk key={`a-${i}`} />
            ))}
          </div>
          <div className="flex w-1/2" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <Chunk key={`b-${i}`} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* bottom labels row */}
      <div className="mt-4 px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs mono-label text-gray-500">
          <span>{labels[0] ?? ""}</span>
          <span>{labels[1] ?? ""}</span>
          <span>{labels[2] ?? ""}</span>
        </div>
      </div>
    </div>
  );
}

// About Section (your current)
function AboutSection() {
  const experience = [
    { period: "2021 — Now", title: "Founding Product Designer", company: "Basis Theory", link: "https://basistheory.com", remote: true },
    { period: "2022 — Now", title: "Freelance Product Designer", company: "Toptal", link: "https://toptal.com", remote: true },
    { period: "2020 — 2021", title: "Principal Product Designer", company: "Avenue Code", link: "#", remote: true },
    { period: "2015 — 2020", title: "Design Lead — Design Director", company: "Zello Tech", link: "#", remote: false },
    { period: "2013 — 2014", title: "UI/UX Designer", company: "Xys Interatividade", link: "#", remote: false },
    { period: "2011 — 2013", title: "Front-end Developer", company: "Novacia Tech", link: "#", remote: false },
  ];

  return (
    <section id="about" className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <span className="text-6xl md:text-8xl font-bold text-gray-800">03</span>
        <PinkAsterisk className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      {/* keep your ABOUT ME block unchanged */}
      <div className="overflow-hidden py-6 md:py-8 border-y border-[#1f1f1f] mb-12 md:mb-16">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 mx-4 md:mx-8">
              <span className="text-4xl md:text-8xl font-bold text-gray-800">ABOUT</span>
              <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-4xl md:text-8xl font-bold text-white">ME</span>
              <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 md:gap-48 mt-4 px-4 md:px-8">
          <span className="mono-label text-gray-500">BASED IN BRAZIL</span>
          <span className="mono-label text-gray-500">DETAIL-ORIENTED</span>
          <span className="mono-label text-gray-500">CURIOUS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="bg-[#141414] rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
            <p className="text-base md:text-lg leading-relaxed">
              Product Designer with 13 years of experience, focused on creating functional and user-centered digital products with visually stunning designs.
            </p>
          </div>

          <div className="bg-[#141414] rounded-2xl p-6 md:p-8">
            <h4 className="mono-label text-gray-400 mb-6">EXPERIENCE</h4>
            <div className="space-y-5 md:space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-8">
                  <span className="mono-label text-gray-500 whitespace-nowrap text-xs">{exp.period}</span>
                  <div>
                    <p className="font-medium text-sm md:text-base">{exp.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Link href={exp.link} className="text-sm text-gray-400 underline hover:text-white transition-colors">
                        {exp.company}
                      </Link>
                      {exp.remote && <span className="text-xs px-2 py-0.5 bg-[#1f1f1f] rounded text-gray-400">Remote</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-6 md:mb-8">
            <Image src="https://ext.same-assets.com/1891291079/3332482028.jpeg" alt="Radilson Gomes" fill className="object-cover" />
          </div>

          <div className="bg-[#141414] rounded-2xl p-6 md:p-8">
            <h4 className="mono-label text-gray-400 mb-6">MY BACKGROUND</h4>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                Growing up in Brasilia, the{" "}
                <Link href="#" className="underline hover:text-white transition-colors">
                  modernist architectural capital
                </Link>{" "}
                of Brazil, my home was a fusion of creativity and analytical thinking.
              </p>
            </div>
            <div className="mt-6 text-2xl italic text-gray-600 font-serif">Rad</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Selected Work (animated cards + same title marquee style)
function SelectedWorkSection() {
  const reduce = useReducedMotion();

  const projects = [
    {
      name: "Starbucks",
      year: "2021",
      title: "Starbucks Farm",
      subtitle: "Virtual Experience",
      image: "https://ext.same-assets.com/1891291079/2669381955.webp",
      accent: "from-green-600 to-green-900",
    },
    {
      name: "Basis Theory",
      year: "2023",
      title: "Shaping a Tokenization",
      subtitle: "Platform for Developers",
      image: "https://ext.same-assets.com/1891291079/2882920354.png",
      accent: "from-purple-600 to-purple-950",
    },
    {
      name: "NoBolso",
      year: "2020",
      title: "Boosting Sales",
      subtitle: "for Local Retailers",
      image: "https://ext.same-assets.com/1891291079/4030116513.png",
      accent: "from-blue-500 to-blue-900",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="work" className="px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <span className="text-6xl md:text-8xl font-bold text-gray-800">01</span>
        <PinkAsterisk className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      <SectionTitleMarquee leftWord="SELECTED" rightWord="WORK" labels={["CASE STUDIES", "PRODUCT DESIGN", "HIGHLIGHTS"]} />

      <motion.div
        className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        variants={container}
        initial={reduce ? "show" : "hidden"}
        whileInView={reduce ? "show" : "show"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href="#"
            variants={item}
            className="group block rounded-[28px] overflow-hidden border border-white/10 bg-[#0f0f0f] hover:border-white/20 transition-colors"
          >
            <div className="flex items-center justify-between px-5 md:px-6 py-4">
              <span className="text-white font-medium">{p.name}</span>
              <span className="mono-label text-white/40">{p.year}</span>
            </div>

            <div className={`rounded-[22px] overflow-hidden mx-3 mb-3 bg-gradient-to-br ${p.accent}`}>
              <div className="relative h-[340px] md:h-[520px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover opacity-70 grayscale group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
                <div className="absolute inset-0 ring-1 ring-white/10 rounded-[22px]" />
              </div>

              <div className="absolute left-5 right-5 bottom-6">
                <div className="text-white text-3xl md:text-[40px] leading-[1.05] font-medium">{p.title}</div>
                <div className="text-white/85 text-2xl md:text-[34px] leading-[1.05] italic">{p.subtitle}</div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

// Playground Section (your current)
function PlaygroundSection() {
  const projects = [
    { name: "Kapa.ai", type: "WEBDESIGN", image: "https://ext.same-assets.com/1891291079/3915969036.png" },
    { name: "Event Ticketing App", type: "WEB APP", image: "https://ext.same-assets.com/1891291079/559246829.webp" },
    { name: "SendSecure.ly", type: "WEB APP", image: "https://ext.same-assets.com/1891291079/1057073512.webp" },
    { name: "Mobile Banking Suite", type: "MOBILE", image: "https://ext.same-assets.com/1891291079/4030116513.png" },
    { name: "Rio's Botanical Garden", type: "MOBILE", image: "https://ext.same-assets.com/1891291079/3139325625.jpeg" },
    { name: "Shopping App Concept", type: "MOBILE", image: "https://ext.same-assets.com/1891291079/2259630177.png" },
  ];

  return (
    <section id="playground" className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <span className="text-6xl md:text-8xl font-bold text-gray-800">02</span>
        <PinkAsterisk className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      <SectionTitleMarquee leftWord="PLAYGROUND" rightWord="PLAYGROUND" labels={["OTHER PROJECTS", "EXPERIMENTS", "UI STUDIES"]} />

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#141414] rounded-2xl overflow-hidden project-card cursor-pointer group">
            <div className="relative h-40 md:h-48 overflow-hidden">
              <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm font-medium">{project.name}</span>
              <span className="mono-label text-gray-500">{project.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="px-4 md:px-8 py-12 md:py-16 border-t border-[#1f1f1f]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl md:text-2xl font-bold tracking-tight">RAD</span>
            <span className="text-[#e91e63] text-xl md:text-2xl">*</span>
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#1f1f1f] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>© 2026 · Radilson Gomes</p>
          <p className="mono-label text-gray-600">ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* ✅ make your ABOUT animate-marquee actually move */}
      <style jsx global>{`
        .animate-marquee {
          animation: marqueeX 16s linear infinite;
          will-change: transform;
        }
        @keyframes marqueeX {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none !important;
          }
        }
      `}</style>

      <Navigation />
      <Sidebar />
      <HeroIntro />

      <AboutSection />

      {/* ✅ next section: Selected Work */}
      <SelectedWorkSection />

      <PlaygroundSection />
      <Footer />
    </main>
  );
}
