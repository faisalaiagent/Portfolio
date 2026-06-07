"use client";
import { motion } from "framer-motion";
import { timeline } from "@/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function TimelineSection() {
  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="bg-blob-purple w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-20" />

      <div className="max-w-4xl mx-auto space-y-16">
        <SectionHeader
          label="My Journey"
          title="Experience &"
          highlight="Growth"
          description="The milestones that shaped me into the engineer I am today."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                className={`relative flex gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} pl-14 md:pl-0`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20 top-5" />

                {/* Content (takes one side on desktop) */}
                <div className={`md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"}`}>
                  <motion.div
                    className="glass rounded-2xl p-5 space-y-3 hover:border-white/10 transition-colors group"
                    whileHover={{ y: -3 }}
                  >
                    <div className={`flex items-center gap-3 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        {item.year}
                      </span>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    </div>

                    <p className="text-white/45 text-xs leading-relaxed">{item.description}</p>

                    <div className={`flex flex-wrap gap-1.5 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.tech.map((t) => (
                        <span key={t} className="tech-tag text-[10px] px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
