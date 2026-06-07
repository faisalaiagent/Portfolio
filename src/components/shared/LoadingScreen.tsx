"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              className="relative w-16 h-16"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-blue-500" />
              <div className="absolute inset-2 rounded-full border border-purple-500/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold font-mono text-lg">AI</span>
              </div>
            </motion.div>

            {/* Progress */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #3B82F6, #06B6D4)",
                    width: `${Math.min(progress, 100)}%`,
                    boxShadow: "0 0 10px rgba(124, 58, 237, 0.6)",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                className="text-white/30 text-xs font-mono tracking-widest"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
