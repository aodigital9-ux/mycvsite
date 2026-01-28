"use client";

import Image from "next/image";
import Link from "next/link";
import HeroIntro from "@/components/HeroIntro";

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
          <p className="text-sm">
            deliver <span className="underline cursor-pointer hover:text-gray-300">high-quality design</span>.
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Currently founding</p>
          <p className="text-sm">
            design at{" "}
            <Link href="https://basistheory.com" className="underline hover:text-gray-300">
              Basis Theory
            </Link>
            .
          </p>
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
            <polygon points="5 3 19 12 5 21 5 3" />
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
          <p className="text-[10px] md:text-xs text-gray-600 mt-2">
            Basis Theory will guide you on how to safely collect, share, process and govern your applications.
          </p>
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
      image: "https://ext.same-assets.com/1891291079/2669381955.webp",
    },
    {
      name: "Basis Theory",
      year: "2023",
      title: "Shaping a Tokenization",
      subtitle: "Platform for Developers",
      color: "bg-gradient-to-br from-purple-600 to-purple-900",
      image: "https://ext.same-assets.com/1891291079/2882920354.png",
    },
    {
      name: "NoBolso",
      year: "2020",
      title: "Boosting Sales",
      subtitle: "for Local Retailers",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      image: "https://ext.same-assets.com/1891291079/4030116513.png",
    },
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
    <Navigation />
      <Sidebar />
      <HeroIntro />
      <AboutSection />
      <BentoGrid />
      <WorkSection />
      <PlaygroundSection />
      <Footer />
    </main>
  );
}
