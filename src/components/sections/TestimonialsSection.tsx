"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-[#050505]">
      <div className="bg-blob-blue w-[500px] h-[500px] bottom-[-20%] right-[-15%] opacity-20" />

      <div className="max-w-4xl mx-auto space-y-12">
        <SectionHeader
          label="Social Proof"
          title="Client"
          highlight="Testimonials"
          description="What the people I've worked with say about the results."
        />

        <div className="relative">
          {/* Main Testimonial */}
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <div className="glass-strong rounded-3xl p-8 md:p-10 space-y-6 text-center">
                  <Quote size={32} className="text-purple-500/40 mx-auto" />

                  <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </p>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {testimonials[current].avatar}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold text-sm">
                        {testimonials[current].name}
                      </div>
                      <div className="text-white/40 text-xs">{testimonials[current].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-purple-500" : "w-2 h-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
