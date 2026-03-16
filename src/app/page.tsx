"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HeroIntro from "@/components/HeroIntro";
import ProjectModal from "@/components/ProjectModal";

function PinkAsterisk({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#e91e63" />
    </svg>
  );
}

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

function BentoGrid() {
  return (
    <section className="px-4 md:px-8 py-8 md:py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-[#1a1a1a] rounded-2xl p-6 aspect-square flex flex-col items-center justify-center hover:bg-[#222] transition-colors cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span className="mono-label text-gray-400 mt-4">LOOK</span>
          <span className="mono-label text-gray-400">AROUND</span>
        </div>

        <div className="bg-[#2a2a2a] rounded-2xl p-6 aspect-square flex items-center justify-center hover:bg-[#333] transition-colors cursor-pointer">
          <span className="text-5xl md:text-6xl font-light text-gray-400">k</span>
        </div>

        <div className="bg-[#1f1f1f] rounded-2xl p-6 aspect-square flex items-center justify-center hover:bg-[#252525] transition-colors cursor-pointer">
          <div className="border-2 border-gray-600 rounded-lg p-3 md:p-4">
            <span className="text-3xl md:text-4xl font-light text-gray-400">1</span>
          </div>
        </div>

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

function SectionTitleMarquee({
  leftWord,
  rightWord,
  labels,
}: {
  leftWord: string;
  rightWord: string;
  labels: string[];
}) {
  return (
    <div className="relative overflow-hidden py-8 md:py-10 border-y border-[#1f1f1f]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

      <div className="flex whitespace-nowrap">
        <div className="section-marquee-track flex items-center gap-10 pr-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-white">{rightWord}</span>
              <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
              <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-[#121c28]">{leftWord}</span>
              <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
              <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-white">{rightWord}</span>
              <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          ))}
        </div>

        <div className="section-marquee-track flex items-center gap-10 pr-10" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-white">{rightWord}</span>
              <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
              <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-[#121c28]">{leftWord}</span>
              <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
              <span className="font-bold tracking-tight text-[clamp(72px,14vw,220px)] text-white">{rightWord}</span>
              <PinkAsterisk className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          ))}
        </div>
      </div>

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

function WorkCard({
  name,
  year,
  title,
  subtitle,
  image,
  href = "#",
  onClick,
}: {
  name: string;
  year: string;
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  onClick?: () => void;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.2 });
  const sy = useSpring(my, { stiffness: 150, damping: 20, mass: 0.2 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);

  const shineX = useTransform(sx, [-0.5, 0.5], ["20%", "80%"]);
  const shineY = useTransform(sy, [-0.5, 0.5], ["20%", "80%"]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    mx.set(px);
    my.set(py);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const cardContent = (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#0c1324] border border-cyan-400/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(103,232,249,0.20), 0 0 60px rgba(0,200,255,0.08)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_45%)]" />
      </div>

      <div className="relative z-10 flex items-center justify-between px-5 md:px-6 py-4 bg-black/20 backdrop-blur-sm">
        <span className="text-white font-medium">{name}</span>
        <span className="mono-label text-white/60">{year}</span>
      </div>

      <div className="relative h-56 md:h-96 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={image} alt={title} fill className="object-cover opacity-70" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-black/25 to-transparent" />

        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            background:
              "radial-gradient(220px 180px at var(--sx) var(--sy), rgba(255,255,255,0.14), rgba(255,255,255,0) 60%)",
            ["--sx" as any]: shineX,
            ["--sy" as any]: shineY,
            mixBlendMode: "screen",
          }}
        />

        <div className="absolute bottom-6 md:bottom-8 left-5 md:left-8 right-5 md:right-8">
          <motion.h3
            className="text-2xl md:text-4xl font-semibold text-white"
            initial={{ y: 10, opacity: 0.9 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-xl md:text-3xl italic text-white/80"
            initial={{ y: 12, opacity: 0.85 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.28 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );

  if (onClick) return cardContent;

  return (
    <Link href={href} className="block">
      {cardContent}
    </Link>
  );
}

function WorkSection({
  onOpenProject,
}: {
  onOpenProject: (
    projectKey:
      | "azura"
      | "lesdomaines"
      | "aquaops"
      | "ecomya"
      | "apm"
      | "movenpick"
  ) => void;
}) {
  const projects = useMemo(
    () => [
      {
        key: "azura" as const,
        name: "Azura",
        year: "2025",
        title: "Shellfish Farm Azura",
        subtitle: "Operations Platform",
        image: "/images/azura-cover.png",
      },
      {
        key: "lesdomaines" as const,
        name: "Les Domaines",
        year: "2024",
        title: "Fish Farm Lesdomaines",
        subtitle: "Digital Growth Strategy",
        image: "/images/lesdomaines-cover.png",
      },
      {
        key: "aquaops" as const,
        name: "Aquamdiq",
        year: "2026",
        title: "Marine Fish Farm Aquamdiq",
        subtitle: "Operations Platform",
        image: "/images/aquaops-cover.png",
      },
      {
        key: "ecomya" as const,
        name: "Ecomya",
        year: "2023",
        title: "Commerce Platform",
        subtitle: "Automation System",
        image: "/images/ecomya-cover.png",
      },
      {
        key: "apm" as const,
        name: "APM Tangier",
        year: "2022",
        title: "Port Terminal",
        subtitle: "Digital Presence",
        image: "/images/apm-cover.png",
      },
      {
        key: "movenpick" as const,
        name: "Mövenpick",
        year: "2022",
        title: "Hospitality Web",
        subtitle: "SEO & Social Media",
        image: "/images/movenpick-cover.png",
      },
    ],
    []
  );

  return (
    <section id="work" className="px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <span className="text-6xl md:text-8xl font-bold text-gray-800">01</span>
        <PinkAsterisk className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      <SectionTitleMarquee leftWord="WORK" rightWord="WORK" labels={["CASE STUDIES", "PRODUCT DESIGN", "HIGHLIGHTS"]} />

      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <WorkCard
              name={p.name}
              year={p.year}
              title={p.title}
              subtitle={p.subtitle}
              image={p.image}
              onClick={() => onOpenProject(p.key)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

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
    <section id="playground" className="px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto">
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

function AboutSection() {
  const experience = [
    {
      period: "2021 — 2025",
      title: "Co-founder, Technical Director",
      company: "AO Digital (Tangier)",
      link: "#",
      remote: false,
      note: "Digital solutions & data-driven services for aquaculture and marine-related companies",
    },
    { period: "2020", title: "Web apps project manager", company: "Mainroc (Digital solutions company)", link: "#", remote: false },
    { period: "2019", title: "Internship — Production Department (4 months)", company: "Aqua Mdiq (Marine aquaculture)", link: "#", remote: false },
    {
      period: "2018",
      title: "Internship — Sewage treatment plant (2 months)",
      company: "Amendis (Electricity, water supply, wastewater management)",
      link: "#",
      remote: false,
    },
    { period: "2017", title: "Head of sector", company: "Sieta Boughaz (Urban sanitation & environmental services)", link: "#", remote: false },
  ];

  return (
    <section id="about" className="px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto">
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
          <span className="mono-label text-gray-500">BASED IN SWEDEN</span>
          <span className="mono-label text-gray-500">AQUACULTURE + DIGITAL</span>
          <span className="mono-label text-gray-500">FIELD-READY</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="bg-[#141414] rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              With a strong background in <span className="text-white">aquaculture</span> and hands-on experience in
              marine and farm environments, I combine practical field work with technical and monitoring skills. I’ve
              worked closely with aquaculture farms supporting daily operations such as stock monitoring, harvesting,
              site visits, and farm maintenance. I adapt easily to field conditions, work effectively with farm teams,
              and contribute reliably to production activities.
            </p>
          </div>

          <div className="bg-[#141414] rounded-2xl p-6 md:p-8">
            <h4 className="mono-label text-gray-400 mb-6">EXPERIENCE</h4>

            <div className="space-y-5 md:space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-8">
                  <span className="mono-label text-gray-500 whitespace-nowrap text-xs">{exp.period}</span>

                  <div>
                    <p className="font-medium text-sm md:text-base text-white">{exp.title}</p>

                    <div className="flex flex-col gap-1 mt-1">
                      <div className="flex items-center gap-2">
                        <Link href={exp.link} className="text-sm text-gray-400 underline hover:text-white transition-colors">
                          {exp.company}
                        </Link>
                        {exp.remote && <span className="text-xs px-2 py-0.5 bg-[#1f1f1f] rounded text-gray-400">Remote</span>}
                      </div>

                      {"note" in exp && (exp as any).note ? (
                        <p className="text-xs text-gray-500 leading-relaxed max-w-[56ch]">
                          {(exp as any).note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h5 className="mono-label text-gray-400 mb-3">AQUACULTURE ACTIVITIES</h5>
              <ul className="text-sm text-gray-300 leading-relaxed space-y-2 list-disc pl-5">
                <li>Daily farm operations: stock monitoring, feeding, and growth observation</li>
                <li>On-site visits: fish health, behavior, and environmental conditions</li>
                <li>Harvest support: preparation and assistance during live harvests</li>
                <li>Stock counting, grading, and basic biomass estimation</li>
                <li>Water quality checks (temperature, oxygen) and production monitoring support</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-6 md:mb-8 bg-black">
            <Image
              src="/images/about-otmane.png"
              alt="Otmane Joual"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/25" />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background: "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 60%)",
              }}
            />
          </div>

          <div className="bg-[#141414] rounded-2xl p-6 md:p-8">
            <h4 className="mono-label text-gray-400 mb-6">MY BACKGROUND</h4>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                I bridge <span className="text-white">aquaculture operations</span> and{" "}
                <span className="text-white">digital solutions</span> — combining field experience with a technical mindset to improve monitoring,
                reporting, and day-to-day execution on farms.
              </p>
              <p>
                My focus is simple: be reliable on-site, understand real farm constraints, and help teams make decisions with better data.
              </p>
            </div>

            <div className="mt-6 text-2xl italic text-gray-600 font-serif">Otmane</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 md:px-8 py-12 md:py-16 border-t border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
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
          <p>© 2026 · Otmane Joual</p>
          <p className="mono-label text-gray-600">ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    year: string;
    category: string;
    image: string;
    description: string;
    longDescription: string;
    role: string;
    tools: string[];
    features: string[];
    gallery: string[];
    liveUrl?: string;
    buttonLabel?: string;
  }>(null);

  const openProject = (
    projectKey:
      | "azura"
      | "lesdomaines"
      | "aquaops"
      | "ecomya"
      | "apm"
      | "movenpick"
  ) => {
    if (projectKey === "azura") {
      setSelectedProject({
        title: "Azura AquaOps",
        year: "2025",
        category: "Industrial Shellfish Operations Platform",
        image: "/images/azura-cover.png",
        description:
          "Designed a full digital operations platform for industrial aquaculture management, built to support a vertically integrated shellfish production system from hatchery to export.",
        longDescription:
          "The platform centralizes farm activity across all production stages including phytoplankton culture, hatchery monitoring, grow-out park supervision, purification workflows, harvest planning, logistics, and production analytics. Main modules include real-time environmental monitoring, larval survival tracking, biomass and occupancy dashboards, operational task assignment, maintenance logs, quality control workflows, harvest forecasting, traceability records, and distribution management. Beyond the digital side, I also managed to spend time inside the farm environment and monitor parts of the production workflow directly, which gave me a practical foundation in the operational field. This helped shape the platform around real production visibility needs, reporting structure, and day-to-day operational logic.",
        role:
          "Product design, aquaculture operations structuring, production workflow mapping, and digital system architecture.",
        tools: [
          "React",
          "Vite",
          "Tailwind CSS",
          "React",
          "Netlify",
          "Supabase"
        ],
        features: [
          "Hatchery and phytoplankton workflow visibility",
          "Grow-out park supervision",
          "Purification and quality control tracking",
          "Harvest planning and forecasting",
          "Traceability and distribution records",
          "Live KPI dashboards and structured reporting"
        ],
        gallery: [
          "/images/azura-1.png",
          "/images/azura-2.png",
          "/images/azura-3.png",
          "/images/azura-4.png"
        ],
        liveUrl: "https://azura-group.com/activite/aquaculture/",
        buttonLabel: "Azura"
      });
      return;
    }

    if (projectKey === "lesdomaines") {
      setSelectedProject({
        title: "Les Domaines Agricoles",
        year: "2024",
        category: "Agribusiness Digital Strategy",
        image: "/images/lesdomaines-cover.png",
        description:
          "Introduced a digital strategy focused on promoting aquaculture products for one of the largest agribusiness groups in Morocco.",
        longDescription:
          "The project involved building a 360° digital growth approach, starting from the design and creation of a dedicated e-commerce section for the aquaculture product line, and extending to the full digital acquisition strategy across multiple channels. This included planning how traffic would be generated through organic social media, paid advertising, SEO optimization, and digital content positioning, with the objective of turning digital presence into a commercial channel for seafood product visibility and sales.",
        role:
          "Digital strategy development, e-commerce structuring, acquisition channel planning, and digital positioning for aquaculture products.",
        tools: [
          "Meta Ads",
          "Google Analytics",
          "SEO",
          "E-commerce Strategy"
        ],
        features: [
          "Aquaculture product e-commerce page",
          "Meta traffic acquisition planning",
          "Google Analytics monitoring",
          "SEO product positioning",
          "Social media campaign architecture",
          "Digital sales funnel design"
        ],
        gallery: ["/images/lesdomaines-1.png"],
        liveUrl: "https://rabat.boutiquelesdomaines.ma/poissonnerie-4",
        buttonLabel: "Les Domaines"
      });
      return;
    }

    if (projectKey === "aquaops") {
      setSelectedProject({
        title: "AquaOps",
        year: "2026",
        category: "Aquaculture Operations Platform",
        image: "/images/aquaops-cover.png",
        description:
          "Aquamdiq is the largest marine aquaculture farm in Morocco, and AquaOps is an aquaculture farm operations platform designed to help farm teams monitor cage performance, track mortality, review environmental conditions, and manage daily production activities through a single operational interface.",
        longDescription:
          "Built as a digital operational layer for aquaculture farms, AquaOps centralizes cage monitoring, mortality logging, feeding overview, environmental parameters, and task visibility into one structured dashboard, enabling operators to quickly identify risks, navigate between cages, and make faster operational decisions with less friction. What makes this project especially valuable is that it was developed alongside direct field exposure: I had the opportunity to be involved in day-to-day farm operations, receive full production training, and closely understand how aquaculture workflows function in practice at Aquamdiq. This operational immersion allowed me to design the platform based on real production needs rather than assumptions. In parallel, I also trained farm operators on how to use the application effectively, ensuring that the digital tool could be integrated smoothly into daily routines and adopted by teams in the field.",
        role:
          "Product design, operational workflow translation, field observation, operator onboarding, and direct farm operational involvement.",
        tools: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
        features: [
          "Farm overview dashboard",
          "Per-cage monitoring",
          "Mortality logging",
          "Environmental metrics tracking",
          "Risk / watch / good status system",
          "Fast navigation between cages"
        ],
        gallery: [
          "/images/aquaops-1.png",
          "/images/aquaops-2.png",
          "/images/aquaops-3.png",
          "/images/aquaops-4.png",
          "/images/aquaops-5.png"
        ]
      });
      return;
    }

    if (projectKey === "ecomya") {
      setSelectedProject({
        title: "Ecomya Commerce Automation Platform",
        year: "2023",
        category: "E-commerce Operations Platform",
        image: "/images/ecomya-cover.png",
        description:
          "Contributed to the development and structuring of a digital commerce platform designed to simplify e-commerce operations for emerging brands and online sellers.",
        longDescription:
          "The platform brings together storefront creation, supplier synchronization, dropshipping logistics, order management, and payment workflows in one system, helping users launch and manage online businesses with less operational friction. Main features included product import automation, inventory synchronization, order tracking, cash-on-delivery management, customer communication workflows, and logistics coordination. The platform also integrated growth tools such as SEO modules, WhatsApp sales support, affiliate systems, referral logic, and flexible sales features adapted to local market realities.",
        role:
          "Product structuring, digital workflow design, commerce operations logic, and platform growth strategy.",
        tools: [
          "E-commerce Logic",
          "Automation",
          "SEO",
          "WhatsApp Workflows"
        ],
        features: [
          "Storefront creation",
          "Supplier synchronization",
          "Dropshipping logistics",
          "Order and payment workflows",
          "Affiliate and referral systems",
          "SEO and customer communication tools"
        ],
        gallery: [
          "/images/ecomya-1.png",
          "/images/ecomya-2.png",
          "/images/ecomya-3.png",
          "/images/ecomya-4.png"
        ],
        liveUrl: "https://ecomya.services/en/",
        buttonLabel: "Ecomya"
      });
      return;
    }

    if (projectKey === "apm") {
      setSelectedProject({
        title: "APM Terminals Tangier",
        year: "2022",
        category: "Corporate Web Presence & Tool Integration",
        image: "/images/apm-cover.png",
        description:
          "Led the digital presence of APM Terminals Tangier through website development, social media management, and digital performance monitoring.",
        longDescription:
          "The work focused on maintaining a clear and structured web presence that presents terminal services, operational information, customer access points, and corporate communication in an accessible way. The website includes integrations for customer-facing tools such as track-and-trace, vessel schedules, and gate appointment access, allowing operational services to remain easily reachable inside the website ecosystem. Social media communication and analytics tracking were also managed to improve visibility, engagement, and digital performance across channels. The operational tracking tools themselves were not built by us — our role was to integrate them seamlessly into the digital experience.",
        role:
          "Website development, digital communication, analytics monitoring, and operational tool integration.",
        tools: [
          "Website Development",
          "Analytics",
          "Social Media",
          "Tool Integration"
        ],
        features: [
          "Corporate website structuring",
          "Track-and-trace integration",
          "Vessel schedule access",
          "Gate appointment access",
          "Social media management",
          "Digital performance monitoring"
        ],
        gallery: ["/images/apm-1.png"],
        liveUrl: "#",
        buttonLabel: "APM Terminals Tangier"
      });
      return;
    }

    setSelectedProject({
      title: "Mövenpick Tangier",
      year: "2022",
      category: "Hospitality Web Presence & SEO",
      image: "/images/movenpick-cover.png",
      description:
        "Worked on the digital presence of Mövenpick Tangier through webpage development, social media management, and SEO optimization.",
      longDescription:
        "The work focused on improving how the hotel property was presented online, with attention to user experience, destination visibility, and booking-oriented content. The page highlights the hotel’s location overlooking the Bay of Tangier, its accommodation offer, business facilities, gardens, pool, and proximity to the city center. In parallel, social media communication was managed to maintain a consistent hospitality-focused brand presence, while SEO work improved discoverability and search relevance. The overall objective was to connect content, visibility, and booking intent within a coherent digital presence.",
      role:
        "Web content structuring, social media management, and SEO execution.",
      tools: [
        "SEO",
        "Web Content",
        "Social Media",
        "Hospitality Positioning"
      ],
      features: [
        "Hotel page development",
        "Destination-focused content",
        "SEO optimization",
        "Social media communication",
        "Booking-oriented structure",
        "Brand visibility support"
      ],
      gallery: []
    });
  };

  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a]">
        <Navigation />
        <Sidebar />
        <HeroIntro />
        <AboutSection />
        <BentoGrid />
        <WorkSection onOpenProject={openProject} />
        <PlaygroundSection />
        <Footer />
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}