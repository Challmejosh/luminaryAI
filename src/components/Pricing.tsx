"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring the platform.",
    features: [
      "5 AI generations per day",
      "Basic export formats",
      "Community support",
      "1 project",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professionals and freelancers.",
    features: [
      "Unlimited AI generations",
      "All export formats (React, iOS, Android)",
      "Priority support",
      "Unlimited projects",
      "Custom brand colors",
    ],
    buttonText: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams and organizations.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "SSO & advanced security",
      "Custom AI model fine-tuning",
      "Service Level Agreement",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Simple, transparent <span className="text-gradient">pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#a3a3a3] max-w-2xl mx-auto"
          >
            Choose the plan that best fits your needs. Start building the future today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass p-8 rounded-3xl relative overflow-hidden flex flex-col h-full ${
                tier.popular ? "border-[#8b5cf6]/50 shadow-2xl shadow-[#8b5cf6]/10 transform md:-translate-y-4" : "border-white/5"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]" />
              )}
              {tier.popular && (
                <span className="bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-[#a3a3a3]">/month</span>}
              </div>
              <p className="text-[#a3a3a3] text-sm mb-8">{tier.description}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#8b5cf6] shrink-0" />
                    <span className="text-[#f0f0f0] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-transform hover:scale-105 ${
                  tier.popular
                    ? "bg-[#f0f0f0] text-[#050505]"
                    : "glass hover:bg-white/5"
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
