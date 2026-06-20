"use client";

import { motion } from "framer-motion";
import { Wand2, Zap, Layers, Globe, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI Generation",
    description: "Generate beautiful vectors, images, and UI layouts instantly from simple text prompts.",
    color: "text-[#8b5cf6]",
    bg: "bg-[#8b5cf6]/10",
    borderHover: "group-hover:border-[#8b5cf6]/50",
  },
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description: "Work with your team in real-time. See changes as they happen without any lag.",
    color: "text-[#3b82f6]",
    bg: "bg-[#3b82f6]/10",
    borderHover: "group-hover:border-[#3b82f6]/50",
  },
  {
    icon: Layers,
    title: "Smart Layers",
    description: "Automatically organize and name your layers with our context-aware AI.",
    color: "text-[#ec4899]",
    bg: "bg-[#ec4899]/10",
    borderHover: "group-hover:border-[#ec4899]/50",
  },
  {
    icon: Globe,
    title: "One-Click Publish",
    description: "Export your designs directly to production-ready code for Web, iOS, and Android.",
    color: "text-[#10b981]",
    bg: "bg-[#10b981]/10",
    borderHover: "group-hover:border-[#10b981]/50",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your intellectual property is protected with bank-grade encryption and access controls.",
    color: "text-[#f59e0b]",
    bg: "bg-[#f59e0b]/10",
    borderHover: "group-hover:border-[#f59e0b]/50",
  },
  {
    icon: Smartphone,
    title: "Responsive by Default",
    description: "Designs automatically adapt to any screen size, saving you hours of manual tweaking.",
    color: "text-[#06b6d4]",
    bg: "bg-[#06b6d4]/10",
    borderHover: "group-hover:border-[#06b6d4]/50",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Everything you need to <span className="text-gradient">build faster</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#a3a3a3]"
          >
            Luminary replaces a dozen different tools with one seamless, AI-native environment.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`glass p-8 rounded-2xl border border-white/5 transition-all duration-300 group hover:-translate-y-1 ${feature.borderHover} hover:shadow-2xl hover:shadow-[#ffffff]/5 relative overflow-hidden`}
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent transition-colors duration-500" />
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.bg}`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-[#a3a3a3] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
