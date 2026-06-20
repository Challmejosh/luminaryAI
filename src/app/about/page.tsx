"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const team = [
  { name: "Alex Chen", role: "CEO & Founder", image: "https://i.pravatar.cc/150?u=a" },
  { name: "Sarah Jenkins", role: "CTO", image: "https://i.pravatar.cc/150?u=b" },
  { name: "David Kim", role: "Head of AI", image: "https://i.pravatar.cc/150?u=c" },
  { name: "Maria Garcia", role: "Lead Designer", image: "https://i.pravatar.cc/150?u=d" },
  { name: "James Wilson", role: "VP Engineering", image: "https://i.pravatar.cc/150?u=e" },
  { name: "Anita Patel", role: "Product Manager", image: "https://i.pravatar.cc/150?u=f" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] selection:bg-[#8b5cf6]/30">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-[80vh]">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Our <span className="text-gradient">Mission</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a3a3a3] leading-relaxed"
          >
            We believe that creating beautiful, functional software should be accessible to everyone. Luminary AI exists to bridge the gap between imagination and execution by leveraging the world's most advanced AI models.
          </motion.p>
        </div>

        <div className="mb-32">
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="py-4">
                <h3 className="text-4xl font-bold text-white mb-2">2024</h3>
                <p className="text-[#a3a3a3]">Founded</p>
              </div>
              <div className="py-4">
                <h3 className="text-4xl font-bold text-white mb-2">$15M</h3>
                <p className="text-[#a3a3a3]">Funding Raised</p>
              </div>
              <div className="py-4">
                <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                <p className="text-[#a3a3a3]">Team Members</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the <span className="text-gradient">Team</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-[#8b5cf6] transition-colors p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-sm text-[#a3a3a3]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
