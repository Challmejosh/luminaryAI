"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{
            rotate: [0, 360],
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "60% 40% 30% 70% / 60% 30% 70% 40%"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-[#8b5cf6]/40 to-[#ec4899]/40 blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "70% 30% 30% 70% / 50% 60% 40% 50%",
              "40% 60% 70% 30% / 40% 50% 60% 50%"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-[#3b82f6]/40 to-[#8b5cf6]/40 blur-[100px] mix-blend-screen"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#ec4899]" />
            <span className="text-sm font-medium">Introducing Luminary AI 2.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Create at the speed of <br className="hidden md:block" />
            <span className="text-gradient">thought with AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-[#a3a3a3] mb-12 max-w-2xl mx-auto"
          >
            The all-in-one creative suite powered by advanced artificial intelligence.
            Generate, edit, and publish stunning content in seconds, not hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-[#f0f0f0] text-[#050505] rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform group">
              Start for free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass rounded-full font-semibold hover:bg-white/5 transition-colors">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 50 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="glass rounded-2xl p-2 shadow-2xl">
            <div className="bg-[#171717] rounded-xl aspect-[16/9] w-full overflow-hidden relative flex items-center justify-center border border-white/5">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-[#8b5cf6]/50 mx-auto mb-4" />
                <p className="text-[#a3a3a3] font-medium">Interactive AI Canvas Workspace</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
