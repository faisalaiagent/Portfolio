"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { MapPin, Calendar, Briefcase, Award } from "lucide-react";
import { stats, siteConfig } from "@/data";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/utils";

const highlights = [
  { icon: MapPin, label: "Based In", value: siteConfig.location },
  { icon: Calendar, label: "Experience", value: "3+ Years" },
  { icon: Briefcase, label: "Projects", value: "50+ Delivered" },
  { icon: Award, label: "Speciality", value: "AI & Automation" },
];

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="bg-blob-purple w-[500px] h-[500px] bottom-[-20%] right-[-10%] opacity-30" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              label="About Me"
              title="I Build AI Systems"
              highlight="That Actually Work"
              align="left"
            />

            <div className="space-y-4 text-white/55 leading-relaxed">
              <p>
                I&apos;m a passionate AI Engineer and Full Stack Developer based in Karachi, Pakistan.
                I specialize in building production-grade AI agents, automation systems, and SaaS
                products that solve real business problems at scale.
              </p>
              <p>
                With 3+ years of hands-on experience, I&apos;ve helped startups, SaaS companies, and
                Shopify businesses across the USA, UK, and Middle East automate their workflows,
                reduce costs, and grow revenue through intelligent software.
              </p>
              <p>
                My approach is{" "}
                <span className="text-purple-400 font-medium">results-first</span> — I don&apos;t just
                write code, I build systems that create measurable business impact.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  className="glass rounded-xl p-4 flex items-center gap-3 hover:border-purple-500/20 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary text-sm"
              >
                Work With Me
              </button>
              <a href="/resume.pdf" download className="btn-ghost text-sm">
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right: Stats + Visual */}
          <motion.div
            className="flex flex-col gap-6"
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="glass-strong rounded-2xl p-6 text-center gradient-border hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="text-4xl font-bold gradient-text mb-1">
                    {inView ? (
                      <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Expertise card */}
            <motion.div
              className="glass-strong rounded-2xl p-6 space-y-4"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Core Expertise</h3>
                <span className="text-xs text-purple-400 font-mono">v3.0</span>
              </div>
              {[
                { label: "AI Agent Development", pct: 95, color: "#A855F7" },
                { label: "Full Stack Development", pct: 90, color: "#4F8EF7" },
                { label: "Shopify / SaaS", pct: 88, color: "#10B981" },
                { label: "Automation Systems", pct: 92, color: "#06B6D4" },
              ].map(({ label, pct, color }) => (
                <div key={label} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">{label}</span>
                    <span className="text-white/40 font-mono text-xs">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: color, boxShadow: `0 0 8px ${color}60` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
