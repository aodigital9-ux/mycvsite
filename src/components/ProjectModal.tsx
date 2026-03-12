"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";

type ProjectModalProps = {
  project: {
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
  } | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[#07111f]/95 shadow-[0_0_80px_rgba(0,200,255,0.10)]"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-cyan-300/10" />
            <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="max-h-[90vh] overflow-y-auto">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/25 to-transparent" />

                    <div className="absolute left-6 top-6">
                      <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-200">
                        {project.category}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-white">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/45">
                        {project.year}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-4">
                    {project.gallery.map((img, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={img}
                            alt={`${project.title} ${index + 1}`}
                            fill
                            className="object-cover transition duration-500 hover:scale-[1.03]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-8">
                    <p className="text-base leading-7 text-white/80">
                      {project.description}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {project.longDescription}
                    </p>
                  </div>

                  <div className="mb-8 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200/80">
                        Role
                      </p>
                      <p className="text-sm leading-6 text-white/75">
                        {project.role}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-cyan-200/80">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-cyan-200/80">
                      Key Features
                    </p>
                    <div className="grid gap-3">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                        >
                          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                          <span className="text-sm text-white/75">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-100 transition hover:bg-cyan-400/15"
                    >
                      Live preview <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}