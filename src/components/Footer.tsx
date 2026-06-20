import { Sparkles, MessageCircle, Globe, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="bg-[#8b5cf6]/20 p-2 rounded-xl">
                <Sparkles className="w-5 h-5 text-[#8b5cf6]" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#f0f0f0]">Luminary</span>
            </Link>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              The AI-powered creative suite for modern teams. Build faster, design better, and publish instantly.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#f0f0f0] mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-[#a3a3a3]">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
              <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#f0f0f0] mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-[#a3a3a3]">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#f0f0f0] mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-[#a3a3a3]">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-[#a3a3a3]">
          <p>© {new Date().getFullYear()} Luminary AI, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
