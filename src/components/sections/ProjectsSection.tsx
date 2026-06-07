"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, X, Tag } from "lucide-react";
import { projects } from "@/data";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/utils";

const categories = ["All", "AI", "Shopify", "Automation"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-[#050505]">
      <div className="bg-blob-blue w-[500px] h-[500px] bottom-0 left-[-15%] opacity-25" />

      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader
          label="Portfolio"
          title="Featured"
          highlight="Projects"
          description="Production-grade applications that generate real results for real businesses."
        />

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "glass text-white/50 hover:text-white"
              }`}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={staggerItem}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-white/10 transition-all duration-300"
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#111]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-purple-600/80 backdrop-blur-sm text-white text-xs font-medium">
                      Featured
                    </div>
                  )}

                  {/* Quick links on hover */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={13} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-white font-semibold text-sm leading-tight">{project.title}</h3>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs shrink-0"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tech-tag text-[10px] px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="tech-tag text-[10px] px-2 py-0.5">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <div className="relative h-56 overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-white text-xl font-bold">{selectedProject.title}</h2>
                  <span
                    className="px-3 py-1 rounded-full text-xs shrink-0"
                    style={{
                      background: `${selectedProject.color}15`,
                      color: selectedProject.color,
                      border: `1px solid ${selectedProject.color}30`,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-white/55 text-sm leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/30 text-xs">
                    <Tag size={12} />
                    <span>Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm flex-1 justify-center"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm flex-1 justify-center"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
