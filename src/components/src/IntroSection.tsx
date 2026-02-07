"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative w-full bg-black px-4 md:px-8 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left big card */}
          <motion.div
            className="lg:col-span-7 rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white text-lg md:text-xl leading-relaxed">
              With a strong background in <span className="text-white/90 font-medium">aquaculture</span> and hands-on
              experience in marine and farm environments, I combine practical field work with
              technical and monitoring skills. Over the past years, I have worked closely with
              aquaculture farms, supporting daily operations such as stock monitoring, harvesting,
              site visits, and farm maintenance. My experience allows me to adapt easily to field
              conditions, work effectively with farm teams, and contribute reliably to aquaculture
              production activities. I am motivated to continue working directly in aquaculture
              farming and to add value through commitment, adaptability, and practical experience.
            </p>
          </motion.div>

          {/* Right portrait */}
          <motion.div
            className="lg:col-span-5 rounded-3xl bg-white/5 border border-white/10 overflow-hidden min-h-[320px] lg:min-h-[420px]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/intro-portrait.png"
                alt="Otmane Joual portrait"
                fill
                priority={false}
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 55%)",
                }}
              />
            </div>
          </motion.div>

          {/* Work experience card */}
          <motion.div
            className="lg:col-span-12 rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between gap-6">
              <h2 className="text-white text-2xl md:text-3xl font-semibold">
                Work Experience
              </h2>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <div className="mt-8 space-y-8 text-white/85">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-white/55 font-mono text-sm">
                  2021 — 2025
                </div>
                <div className="md:col-span-9">
                  <div className="text-white font-semibold">
                    AO Digital, Tangier
                    <span className="text-white/55 font-normal">
                      {" "}
                      (Digital solutions & data-driven services for aquaculture and marine-related companies)
                    </span>
                  </div>
                  <div className="text-white/70 text-sm mt-1">
                    Co-founder, Technical Director
                  </div>

                  <ul className="mt-4 space-y-2 list-disc pl-5 text-white/80">
                    <li>Assisted in daily aquaculture farm operations: stock monitoring, feeding, and growth observation</li>
                    <li>Participated in on-site farm visits to monitor fish health, behavior, and environmental conditions</li>
                    <li>Supported harvesting activities, including preparation and assistance during live harvests</li>
                    <li>Participated in stock counting, grading, and basic biomass estimation</li>
                    <li>Collected basic water quality data (temperature, oxygen) and supported production monitoring</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-white/55 font-mono text-sm">
                  2020
                </div>
                <div className="md:col-span-9">
                  <div className="text-white font-semibold">
                    Mainroc <span className="text-white/55 font-normal">(Digital solutions company)</span>
                  </div>
                  <div className="text-white/70 text-sm mt-1">Web apps project manager</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-white/55 font-mono text-sm">
                  2019
                </div>
                <div className="md:col-span-9">
                  <div className="text-white font-semibold">
                    Aqua Mdiq <span className="text-white/55 font-normal">(Marine aquaculture company)</span>
                  </div>
                  <div className="text-white/70 text-sm mt-1">4-month internship within the production department</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-white/55 font-mono text-sm">
                  2018
                </div>
                <div className="md:col-span-9">
                  <div className="text-white font-semibold">
                    Amendis{" "}
                    <span className="text-white/55 font-normal">
                      (Electricity, water supply, and wastewater management company)
                    </span>
                  </div>
                  <div className="text-white/70 text-sm mt-1">Two-month internship in a sewage treatment plant</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-white/55 font-mono text-sm">
                  2017
                </div>
                <div className="md:col-span-9">
                  <div className="text-white font-semibold">
                    Sieta Boughaz{" "}
                    <span className="text-white/55 font-normal">
                      (Urban sanitation and environmental services company)
                    </span>
                  </div>
                  <div className="text-white/70 text-sm mt-1">PHead of sector</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
