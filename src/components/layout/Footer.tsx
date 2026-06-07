"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Heart, Zap } from "lucide-react";
import { siteConfig } from "@/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-[#050505]">
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold font-mono">AI</span>
              </div>
              <span className="text-white font-bold">{siteConfig.name}<span className="gradient-text">.</span></span>
            </div>
            <p className="text-white/30 text-xs max-w-xs leading-relaxed">
              {siteConfig.description.slice(0, 80)}...
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400/70 text-xs">Available for new projects</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials + scroll up */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: siteConfig.github },
              { icon: Linkedin, href: siteConfig.linkedin },
              { icon: Twitter, href: siteConfig.twitter },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all hover:scale-110"
              >
                <Icon size={14} />
              </a>
            ))}
            <motion.button
              onClick={scrollTop}
              className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all ml-1"
              whileHover={{ y: -2 }}
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1.5">
            Built with
            <Heart size={10} className="text-red-400 fill-current" />
            using
            <Zap size={10} className="text-yellow-400" />
            Next.js & AI
          </p>
        </div>
      </div>
    </footer>
  );
}
