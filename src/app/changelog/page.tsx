"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const updates = [
  {
    version: "v2.4.0",
    date: "October 15, 2026",
    title: "Advanced Component Export & Vue Support",
    changes: [
      "Added support for exporting pure Vue 3 setup script components.",
      "Improved React export to use latest React 19 features.",
      "Fixed a bug where radial gradients were improperly scaled on mobile exports."
    ]
  },
  {
    version: "v2.3.0",
    date: "September 28, 2026",
    title: "Real-time Collaboration Beta",
    changes: [
      "Introduced multiplayer editing. See cursors and live changes.",
      "Added inline commenting on generated components.",
      "Performance improvements for large projects with 50+ screens."
    ]
  },
  {
    version: "v2.2.0",
    date: "September 10, 2026",
    title: "Design System Integration",
    changes: [
      "Connect your Figma variables directly to Luminary.",
      "Added global typography scaling settings.",
      "New 'Dark Mode First' generation preference."
    ]
  }
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] selection:bg-[#8b5cf6]/30">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-[80vh]">
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="text-gradient">Changelog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a3a3a3]"
          >
            Keep track of what's new and what has changed in Luminary AI.
          </motion.p>
        </div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {updates.map((update, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#050505] glass text-[#8b5cf6] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-[#8b5cf6]/20">
                <div className="w-3 h-3 bg-[#8b5cf6] rounded-full" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-white/5 hover:border-[#8b5cf6]/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-bold px-3 py-1 rounded-full">{update.version}</span>
                  <span className="text-sm text-[#a3a3a3]">{update.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{update.title}</h3>
                <ul className="space-y-2">
                  {update.changes.map((change, j) => (
                    <li key={j} className="text-[#a3a3a3] text-sm flex items-start gap-2">
                      <span className="text-[#8b5cf6] mt-1">•</span> {change}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
