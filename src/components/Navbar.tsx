"use client";

import { motion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-300 ${
            isScrolled
              ? "glass px-6 py-3"
              : "bg-transparent px-4 py-2"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#8b5cf6]/20 p-2 rounded-xl group-hover:bg-[#8b5cf6]/30 transition-colors">
              <Sparkles className="w-5 h-5 text-[#8b5cf6]" />
            </div>
            <span className="font-bold text-xl tracking-tight">Luminary</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Testimonials", "Pricing", "FAQ"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                className="text-sm font-medium text-[#a3a3a3] hover:text-[#f0f0f0] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="bg-[#f0f0f0] text-[#050505] px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#f0f0f0]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-4 flex flex-col gap-4"
        >
          {["Features", "Testimonials", "Pricing", "FAQ"].map((item) => (
              <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#a3a3a3] hover:text-[#f0f0f0] p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
            >
              {item}
            </Link>
          ))}
          <button className="bg-[#f0f0f0] text-[#050505] w-full py-3 rounded-xl text-sm font-semibold mt-2">
            Get Started
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
