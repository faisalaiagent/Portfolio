"use client";
import { motion } from "framer-motion";
import { skills, techMarquee } from "@/data";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/utils";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden flex">
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center px-4 py-2 rounded-full glass text-white/50 text-sm border border-white/5 hover:border-purple-500/30 hover:text-white/80 transition-colors whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-[#050505]">
      <div className="bg-blob-blue w-[600px] h-[600px] top-0 left-[-20%] opacity-25" />

      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeader
          label="Tech Stack"
          title="Skills &"
          highlight="Technologies"
          description="A curated arsenal of modern tools I use to build production-grade AI systems, full-stack applications, and automation workflows."
        />

        {/* Skill Category Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={staggerItem}
              className="glass rounded-2xl p-5 space-y-4 hover:border-white/10 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${skill.color}15 0%, transparent 70%)`,
                }}
              />

              <div className="relative flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: skill.color, boxShadow: `0 0 12px ${skill.color}80` }}
                />
                <h3 className="text-white font-semibold text-sm">{skill.category}</h3>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <motion.span
                    key={item}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                    style={{
                      background: `${skill.color}12`,
                      color: skill.color,
                      border: `1px solid ${skill.color}25`,
                    }}
                    whileHover={{
                      background: `${skill.color}25`,
                      scale: 1.05,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Tech Bands */}
        <div className="space-y-3 py-4">
          <MarqueeRow items={techMarquee.slice(0, 12)} />
          <MarqueeRow items={techMarquee.slice(8)} reverse />
        </div>
      </div>
    </section>
  );
}
