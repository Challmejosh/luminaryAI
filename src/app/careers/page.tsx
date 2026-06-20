"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const positions = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote (US/Canada)", type: "Full-time" },
  { title: "AI Research Scientist", dept: "Research", location: "San Francisco, CA", type: "Full-time" },
  { title: "Product Designer", dept: "Design", location: "Remote (Global)", type: "Full-time" },
  { title: "Developer Advocate", dept: "DevRel", location: "New York, NY", type: "Full-time" },
  { title: "Backend Engineer (Go/Rust)", dept: "Engineering", location: "Remote (Europe)", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] selection:bg-[#8b5cf6]/30">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-[80vh]">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Join the <span className="text-gradient">rebellion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a3a3a3]"
          >
            Help us build the next generation of software tools. We're looking for passionate builders who want to change the world.
          </motion.p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/5 hover:border-[#8b5cf6]/50 transition-colors group cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#a3a3a3]">
                    <span className="bg-white/10 px-2 py-1 rounded-md text-white">{job.dept}</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="bg-transparent border border-white/20 hover:border-white text-white px-6 py-2 rounded-xl flex items-center justify-center gap-2 transition-colors shrink-0">
                  Apply <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
