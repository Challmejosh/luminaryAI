"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const integrations = [
  { name: "Figma", desc: "Sync your designs directly to code.", color: "from-pink-500 to-purple-500" },
  { name: "GitHub", desc: "Push generated code directly to your repos.", color: "from-gray-600 to-gray-900" },
  { name: "Slack", desc: "Get notifications on project updates.", color: "from-green-400 to-emerald-600" },
  { name: "Notion", desc: "Embed interactive prototypes in docs.", color: "from-gray-300 to-gray-500" },
  { name: "Linear", desc: "Create issues from design feedback.", color: "from-indigo-500 to-blue-600" },
  { name: "Jira", desc: "Link UI components to Jira tickets.", color: "from-blue-400 to-blue-600" },
];

export default function IntegrationsPage() {
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
            Plays well with <span className="text-gradient">others</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a3a3a3] max-w-2xl mx-auto"
          >
            Connect Luminary AI with the tools you already use. Streamline your entire product development lifecycle.
          </motion.p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="glass px-6 py-3 rounded-full flex items-center gap-4 border border-white/10 w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search integrations..." 
              className="bg-transparent border-none outline-none w-full text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 border border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl shrink-0 bg-gradient-to-br ${item.color} shadow-lg`} />
              <div>
                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-[#a3a3a3]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
