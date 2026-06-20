"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Introducing Luminary 2.0: The Future of Generation",
    excerpt: "We rebuilt our underlying engine from the ground up to support React Server Components and Vue 3.",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    color: "from-purple-500 to-indigo-600",
    featured: true
  },
  {
    title: "How to integrate Luminary with your Figma workflow",
    excerpt: "A step-by-step guide to syncing your design tokens directly into our AI models.",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    color: "from-pink-500 to-rose-500",
    featured: false
  },
  {
    title: "The State of AI in Frontend Development",
    excerpt: "Our thoughts on where the industry is heading and how developers can adapt.",
    date: "Sep 15, 2026",
    readTime: "12 min read",
    color: "from-blue-500 to-cyan-500",
    featured: false
  },
  {
    title: "5 Tips for better prompt engineering",
    excerpt: "Learn how to write prompts that generate exactly the UI you have in your head.",
    date: "Aug 30, 2026",
    readTime: "4 min read",
    color: "from-emerald-400 to-teal-500",
    featured: false
  }
];

export default function BlogPage() {
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
            The Luminary <span className="text-gradient">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#a3a3a3] max-w-2xl mx-auto"
          >
            Thoughts, updates, and tutorials from the team building the future of software development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-3xl overflow-hidden border border-white/5 group cursor-pointer ${
                post.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              <div className={`w-full ${post.featured ? "h-64 md:h-80" : "h-48"} bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-[#a3a3a3] mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className={`${post.featured ? "text-3xl" : "text-2xl"} font-bold mb-4 group-hover:text-[#8b5cf6] transition-colors`}>
                  {post.title}
                </h2>
                <p className="text-[#a3a3a3] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
