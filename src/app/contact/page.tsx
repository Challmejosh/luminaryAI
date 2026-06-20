"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] selection:bg-[#8b5cf6]/30">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-6xl mx-auto min-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Get in <span className="text-gradient">touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[#a3a3a3] mb-12"
            >
              We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
            </motion.p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-xl text-[#8b5cf6]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email us</h3>
                  <p className="text-[#a3a3a3]">hello@luminary.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-xl text-[#8b5cf6]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit us</h3>
                  <p className="text-[#a3a3a3]">123 Innovation Drive<br/>San Francisco, CA 94103</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-xl text-[#8b5cf6]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call us</h3>
                  <p className="text-[#a3a3a3]">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-white/5 relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#a3a3a3]">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8b5cf6] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#a3a3a3]">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8b5cf6] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#a3a3a3]">Email Address</label>
                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8b5cf6] transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#a3a3a3]">Message</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#8b5cf6] transition-colors" />
              </div>
              <button type="button" className="w-full bg-[#f0f0f0] text-[#050505] font-semibold py-4 rounded-xl hover:scale-[1.02] transition-transform">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
