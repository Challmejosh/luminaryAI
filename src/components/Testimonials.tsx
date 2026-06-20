"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Lead Designer at Stripe",
    content: "Luminary has completely changed how our team approaches UI design. The AI generation is unbelievably accurate and saves us countless hours every week.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "Founder at Orbit",
    content: "We were able to launch our MVP 3 weeks ahead of schedule. The ability to go from a text prompt directly to production-ready React components is magical.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Elena Rodriguez",
    role: "Freelance Creative",
    content: "As a solo developer, Luminary acts as my entire design department. The smart layers and auto-layout features are simply best-in-class.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=elena",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative bg-[#050505]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Loved by <span className="text-gradient">creators</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-lg text-[#f0f0f0] mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <h4 className="font-medium text-[#f0f0f0]">{testimonial.name}</h4>
                  <p className="text-sm text-[#a3a3a3]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
