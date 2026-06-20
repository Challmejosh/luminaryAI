"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Code, Palette, Smartphone } from "lucide-react";

const allFeatures = [
  {
    icon: <Sparkles className="w-8 h-8 text-[#8b5cf6]" />,
    title: "AI-Powered Generation",
    description: "Generate entire UI components and layouts using simple text prompts. Our models are trained on the latest design trends.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#ec4899]" />,
    title: "Real-time Collaboration",
    description: "Work with your team in real-time. See cursors, edits, and comments instantly, just like in your favorite design tools.",
  },
  {
    icon: <Code className="w-8 h-8 text-[#10b981]" />,
    title: "Clean Code Export",
    description: "Export production-ready React, Vue, or HTML/CSS. We don't just generate images; we generate clean, maintainable code.",
  },
  {
    icon: <Palette className="w-8 h-8 text-[#f59e0b]" />,
    title: "Design System Sync",
    description: "Connect your existing design tokens. Luminary AI respects your brand colors, typography, and spacing scales.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#3b82f6]" />,
    title: "Responsive by Default",
    description: "Everything generated is automatically responsive. Preview your designs on mobile, tablet, and desktop instantly.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#6366f1]" />,
    title: "Enterprise Security",
    description: "Your data is yours. We offer SSO, SOC2 compliance, and dedicated instances for our enterprise customers.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] selection:bg-[#8b5cf6]/30">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[80vh]">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Features built for <span className="text-gradient">speed</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a3a3a3] max-w-2xl mx-auto"
          >
            Discover all the powerful tools and capabilities packed into Luminary AI to help you build faster and better.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/[0.04] transition-colors border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{feature.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed relative z-10">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
