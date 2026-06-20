"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 to-[#ec4899]/10" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to transform your <br className="hidden md:block" />
              workflow?
            </h2>
            <p className="text-xl text-[#a3a3a3] mb-10 max-w-2xl mx-auto">
              Join thousands of creators who are already building the future with Luminary AI.
            </p>
            
            <button className="px-8 py-4 bg-[#f0f0f0] text-[#050505] rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform group mx-auto text-lg">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-[#a3a3a3] mt-6">
              14-day free trial. No credit card required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
