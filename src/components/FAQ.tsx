"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need coding experience to use Luminary AI?",
    answer: "Not at all. Luminary is designed for creators of all skill levels. You can generate entire layouts and components using plain English text prompts.",
  },
  {
    question: "Can I export the code to my existing project?",
    answer: "Yes! You can export production-ready code in React, Vue, HTML/CSS, and even React Native for mobile apps. We ensure the code is clean and perfectly structured.",
  },
  {
    question: "How does the Real-time Collaboration work?",
    answer: "Just like Google Docs or Figma, you can invite team members to your project. You'll see their cursors in real-time and any changes they make instantly appear on your screen.",
  },
  {
    question: "Is there a limit to how many projects I can create?",
    answer: "The Free plan allows for 1 active project. Our Pro and Enterprise plans offer unlimited projects, so you can build as much as you want.",
  },
  {
    question: "What happens to my data and IP?",
    answer: "Your intellectual property remains 100% yours. We do not use your private projects to train our foundational models unless you explicitly opt-in.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#a3a3a3] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#a3a3a3] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
