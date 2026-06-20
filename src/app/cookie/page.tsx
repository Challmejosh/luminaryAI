"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f0f0f0] selection:bg-[#8b5cf6]/30">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 max-w-3xl mx-auto min-h-[80vh]">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Cookie Policy</h1>
        <p className="text-[#a3a3a3] mb-12">Last updated: October 20, 2026</p>
        
        <div className="space-y-8 text-[#d4d4d4] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. What are cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How we use cookies</h2>
            <p className="mb-4">Luminary AI uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential cookies:</strong> These are required for the operation of our website (e.g., keeping you logged in).</li>
              <li><strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website.</li>
              <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website and remember your preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Managing cookies</h2>
            <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.</p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
