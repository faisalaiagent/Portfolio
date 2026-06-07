"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Github, Linkedin, Twitter, Zap, Star, Code2, Brain, Boxes } from "lucide-react";
import { siteConfig } from "@/data";
import { staggerContainer, staggerItem } from "@/lib/utils";

const floatingIcons = [
  { icon: Brain, label: "AI", x: "12%", y: "20%", delay: 0, color: "#A855F7" },
  { icon: Code2, label: "Dev", x: "85%", y: "15%", delay: 0.5, color: "#4F8EF7" },
  { icon: Boxes, label: "SaaS", x: "88%", y: "70%", delay: 1, color: "#06B6D4" },
  { icon: Zap, label: "Auto", x: "8%", y: "75%", delay: 1.5, color: "#10B981" },
];

const socialLinks = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.twitter, label: "Twitter" },
];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; color: string;
    }> = [];

    const colors = ["#A855F7", "#4F8EF7", "#06B6D4", "#7C3AED"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 0.06;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#A855F7";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };

    animate();
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Background gradient blobs */}
      <div className="bg-blob-purple w-[800px] h-[800px] top-[-20%] left-[-15%] opacity-60" />
      <div className="bg-blob-blue w-[600px] h-[600px] bottom-[-10%] right-[-10%] opacity-40" />
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          top: "30%",
          right: "10%",
          filter: "blur(40px)",
        }}
      />

      {/* Floating tech icons */}
      {floatingIcons.map(({ icon: Icon, label, x, y, delay, color }) => (
        <motion.div
          key={label}
          className="absolute hidden lg:flex flex-col items-center gap-1.5"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
        >
          <motion.div
            className="glass rounded-2xl p-3 shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
            style={{ borderColor: `${color}30` }}
          >
            <Icon size={20} style={{ color }} />
          </motion.div>
          <span className="text-white/30 text-xs font-mono">{label}</span>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center gap-6"
        >
          {/* Availability badge */}
          <motion.div variants={staggerItem}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 bg-green-500/5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium tracking-wide">
                Available for freelance projects
              </span>
              <Star size={10} className="text-green-400 fill-current" />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={staggerItem} className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
              <span className="block text-white">{siteConfig.name.split(" ")[0]}</span>
              <span className="block gradient-text text-glow-purple">
                {siteConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </motion.div>

          {/* Animated role titles */}
          <motion.div variants={staggerItem} className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500" />
            <div className="text-lg md:text-xl font-medium text-white/70">
              <TypeAnimation
                sequence={siteConfig.roles.flatMap((r) => [r, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white font-semibold"
              />
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={staggerItem}
            className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Building{" "}
            <span className="text-purple-400">AI-powered systems</span>,{" "}
            <span className="text-blue-400">SaaS products</span>, and{" "}
            <span className="text-cyan-400">automation solutions</span> that help
            businesses scale to new heights.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary group px-8 py-4 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost px-8 py-4 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let&apos;s Talk
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={staggerItem} className="flex items-center gap-4 mt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
            <div className="h-4 w-px bg-white/10" />
            <span className="text-white/30 text-xs font-mono">{siteConfig.location}</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
