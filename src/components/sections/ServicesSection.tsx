"use client";
import { motion } from "framer-motion";
import {
  Bot, ShoppingBag, Workflow, FileText, MessageCircle,
  Mail, Layers, Sparkles, ArrowRight,
} from "lucide-react";
import { services } from "@/data";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Bot, ShoppingBag, Workflow, FileText, MessageCircle, Mail, Layers, Sparkles,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="bg-blob-purple w-[700px] h-[700px] top-[10%] right-[-20%] opacity-20" />

      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeader
          label="What I Do"
          title="Services &"
          highlight="Solutions"
          description="From autonomous AI agents to production SaaS — I build systems that create real, measurable business outcomes."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Bot;
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className={`relative glass rounded-2xl p-5 space-y-4 group cursor-pointer overflow-hidden
                  hover:border-white/10 transition-all duration-300
                  ${idx === 0 || idx === 2 ? "lg:col-span-2" : "lg:col-span-2"}
                  ${idx >= 4 ? "sm:col-span-1" : ""}`}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br ${service.gradient}`}
                />

                {/* Glow dot */}
                <div
                  className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: service.color, boxShadow: `0 0 8px ${service.color}` }}
                />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                    style={{
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-2">{service.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/40">
                        <div
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ background: service.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex items-center gap-1.5 text-xs font-medium transition-all duration-200 group/btn"
                    style={{ color: service.color }}
                  >
                    Get Started
                    <ArrowRight
                      size={12}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/40 text-sm mb-4">
            Need a custom solution? I build bespoke AI systems tailored to your exact needs.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Discuss Your Project
            <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
