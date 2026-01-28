"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Pink asterisk component
function PinkAsterisk({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#e91e63"/>
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
      <button className="bg-[#1a1a1a] text-white px-3 py-4 text-xs mono-label rounded-bl-lg" style={{ writingMode: 'vertical-rl' }}>
        Honors
      </button>
    </div>
  );
}

// Hero Section
function HeroSection() {
  const [time, setTime] = useState("");
  const [temp] = useState("23.79");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const brasiliaTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
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
      {/* Background image layer */}
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

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* soft vignette */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 55%)",
          }}
        />
      </motion.div>

      {/* Center text (video 2 second part style) */}
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

      {/* Bottom bar (keeps your original info + scroll) */}
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

// Intro Section
function IntroSection() {
  return (
    <section id="intro" className="px-4 md:px-8 py-16 md:py-24 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-light text-gray-400 leading-relaxed">
        Brazilian <span className="text-white">Product Designer</span> dedicated to the craft of creating{" "}
        <span className="text-white">0→1 experiences</span> till the last detail.
      </h2>

      <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start justify-between gap-8">
        <div>
          <p className="text-sm text-gray-500">I've helped multiple companies</p>
          <p className="text-sm">deliver <span className="underline cursor-pointer hover:text-gray-300">high-quality design</span>.</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Currently founding</p>
          <p className="text-sm">design at <Link href="https://basistheory.com" className="underline hover:text-gray-300">Basis Theory</Link>.</p>
        </div>
      </div>

      {/* Company logos */}
      <div className="mt-8 flex flex-wrap items-center gap-6 md:gap-8 opacity-50">
        <span className="text-gray-500 text-sm">creatif</span>
        <span className="text-gray-500 text-sm font-bold">GO dream</span>
        <span className="text-gray-500 text-sm">avenue</span>
        <span className="text-gray-500 text-sm">kapa</span>
      </div>
    </section>
  );
}

// Bento Grid Section
function BentoGrid() {
  return (
    <section className="px-4 md:px-8 py-8 md:py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {/* Look Around Card */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 aspect-square flex flex-col items-center justify-center hover:bg-[#222] transition-colors cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <span className="mono-label text-gray-400 mt-4">LOOK</span>
          <span className="mono-label text-gray-400">AROUND</span>
        </div>

        {/* K Logo Card */}
        <div className="bg-[#2a2a2a] rounded-2xl p-6 aspect-square flex items-center justify-center hover:bg-[#333] transition-colors cursor-pointer">
          <span className="text-5xl md:text-6xl font-light text-gray-400">k</span>
        </div>

        {/* Number 1 Card */}
        <div className="bg-[#1f1f1f] rounded-2xl p-6 aspect-square flex items-center justify-center hover:bg-[#252525] transition-colors cursor-pointer">
          <div className="border-2 border-gray-600 rounded-lg p-3 md:p-4">
            <span className="text-3xl md:text-4xl font-light text-gray-400">1</span>
          </div>
        </div>

        {/* Basis Theory Docs Card */}
        <div className="bg-white rounded-2xl p-4 md:p-6 aspect-square text-black hover:bg-gray-100 transition-colors cursor-pointer">
          <h4 className="font-semibold text-sm md:text-base">Basis Theory Docs</h4>
          <p className="text-[10px] md:text-xs text-gray-600 mt-2">Basis Theory will guide you on how to safely collect, share, process and govern your applications.</p>
          <div className="mt-4 flex gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
              <span className="text-[8px] md:text-xs text-gray-500">Get</span>
            </div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
              <span className="text-[8px] md:text-xs text-gray-500">Col</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Marquee Section
function MarqueeSection({ text, subtitle }: { text: string; subtitle: string }) {
  return (
    <div className="overflow-hidden py-6 md:py-8 border-y border-[#1f1f1f]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 md:gap-8 mx-4 md:mx-8">
            <span className="text-4xl md:text-8xl font-bold text-gray-800">{text}</span>
            <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-4xl md:text-8xl font-bold text-white">{text}</span>
            <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        ))}
      </div>
      <div className="flex gap-24 md:gap-48 mt-4 px-4 md:px-8">
        <span className="mono-label text-gray-500">{subtitle}</span>
        <span className="mono-label text-gray-500">DESIGN PROCESS</span>
      </div>
    </div>
  );
}

// Work Section - Case Studies
function WorkSection() {
  const projects = [
    {
      name: "Starbucks",
      year: "2021",
      title: "Starbucks Farm",
      subtitle: "Virtual Tour",
      color: "bg-gradient-to-br from-green-600 to-green-800",
      image: "https://ext.same-assets.com/1891291079/2669381955.webp"
    },
    {
      name: "Basis Theory",
      year: "2023",
      title: "Shaping a Tokenization",
      subtitle: "Platform for Developers",
      color: "bg-gradient-to-br from-purple-600 to-purple-900",
      image: "https://ext.same-assets.com/1891291079/2882920354.png"
    },
    {
      name: "NoBolso",
      year: "2020",
      title: "Boosting Sales",
      subtitle: "for Local Retailers",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      image: "https://ext.same-assets.com/1891291079/4030116513.png"
    }
  ];

  return (
    <section id="work" className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <span className="text-6xl md:text-8xl font-bold text-gray-800">01</span>
        <PinkAsterisk className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      <MarqueeSection text="WORK" subtitle="CASE STUDIES" />

      <div className="mt-12 md:mt-16 space-y-6 md:space-y-8">
        {projects.map((project, index) => (
          <Link href="#" key={index} className="block project-card group">
            <div className={`rounded-2xl overflow-hidden ${project.color}`}>
              <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-black/20">
                <span className="text-white font-medium text-sm md:text-base">{project.name}</span>
                <span className="mono-label text-white/70">{project.year}</span>
              </div>
              <div className="relative h-48 md:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 md:bottom-8 left-4 md:left-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-lg md:text-xl italic text-white/80">{project.subtitle}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Playground Section
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

      <MarqueeSection text="PLAYGROUND" subtitle="OTHER PROJECTS" />

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#141414] rounded-2xl overflow-hidden project-card cursor-pointer group">
            <div className="relative h-40 md:h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
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

// About Section
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
        {/* Left column - Bio */}
        <div>
          <div className="bg-[#141414] rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
            <p className="text-base md:text-lg leading-relaxed">
              Product Designer with 13 years of experience, focused on creating functional and user-centered digital products with visually stunning designs.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4">
              <button className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
              <Link href="https://linkedin.com/in/radilson" target="_blank" className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </Link>
              <Link href="https://dribbble.com/radilson" target="_blank" className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.654 5.715z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com/radilson" target="_blank" className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z"/>
                </svg>
              </Link>
              <button className="px-4 py-2 rounded-full bg-[#1f1f1f] flex items-center gap-2 text-sm hover:bg-[#2a2a2a] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Resume
              </button>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-[#141414] rounded-2xl p-6 md:p-8">
            <h4 className="mono-label text-gray-400 mb-6">EXPERIENCE</h4>
            <div className="space-y-5 md:space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-8">
                  <span className="mono-label text-gray-500 whitespace-nowrap text-xs">{exp.period}</span>
                  <div>
                    <p className="font-medium text-sm md:text-base">{exp.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Link href={exp.link} className="text-sm text-gray-400 underline hover:text-white transition-colors">{exp.company}</Link>
                      {exp.remote && <span className="text-xs px-2 py-0.5 bg-[#1f1f1f] rounded text-gray-400">Remote</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Photo and Background */}
        <div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-6 md:mb-8">
            <Image
              src="https://ext.same-assets.com/1891291079/3332482028.jpeg"
              alt="Radilson Gomes"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[#141414] rounded-2xl p-6 md:p-8">
            <h4 className="mono-label text-gray-400 mb-6">MY BACKGROUND</h4>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                Growing up in Brasilia, the{" "}
                <Link href="#" className="underline hover:text-white transition-colors">modernist architectural capital</Link> of Brazil, my home was a fusion of creativity and analytical thinking, influenced by my father's career as a photographer and my mother's profession as a lawyer. This <span className="text-white font-medium">unique blend</span> has deeply shaped my perspective.
              </p>
              <p>
                My <Link href="#" className="underline hover:text-white transition-colors">fascination with technology</Link> began at age four, sparked by our trusty beige computer. Although I pursued a degree in <span className="text-white">Computer Science</span>, my true passion lies in the{" "}
                <Link href="#" className="underline hover:text-white transition-colors">transformative power of great design craft</Link>, mainly inspired by the design craftsmanship behind Apple products.
              </p>
              <p>
                My curiosity led me to wonder: <span className="text-white italic">could I also create something that can evoke this effect on people?</span>
              </p>
              <p>
                Today, I <span className="underline">apply my multidisciplinary design skills</span>, aiming to create solutions that make people feel and remember, <span className="text-white font-medium">elevating everyday experiences into inspiring solutions</span>.
              </p>
            </div>
            <div className="mt-6 text-2xl italic text-gray-600 font-serif">Rad</div>
          </div>
        </div>
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#1f1f1f] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="text-center md:text-left">
            <p className="text-gray-400">© 2026 · Radilson Gomes</p>
            <p className="mono-label text-gray-600">ALL RIGHTS RESERVED</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="hidden md:inline">Copy Email</span>
            </button>
            <Link href="https://linkedin.com/in/radilson" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              Linkedin
            </Link>
            <Link href="https://dribbble.com/radilson" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.654 5.715z"/>
              </svg>
              Dribbble
            </Link>
            <Link href="https://twitter.com/radilson" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z"/>
              </svg>
              <span className="hidden md:inline">Twitter (Sorry, X)</span>
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">Created with ♥ in Brasilia</p>
            <p className="mono-label text-gray-600">MADE IN FRAMER</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Sidebar />
      <HeroSection />
      <IntroSection />
      <BentoGrid />
      <WorkSection />
      <PlaygroundSection />
      <AboutSection />
      <Footer />
    </main>
  );
}