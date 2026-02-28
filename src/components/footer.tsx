import Link from "next/link";
import { Smartphone, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center space-x-2 mb-8 uppercase font-black tracking-widest text-xl">
           <Smartphone className="w-8 h-8 text-blue-500" />
           <span>Herry <span className="text-blue-500">TikTok</span> Tool</span>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-12 text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <Link href="/privacy" className="hover:text-white transition-colors underline underline-offset-4 decoration-blue-500">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors underline underline-offset-4 decoration-blue-500">Terms of Service</Link>
        </div>

        {/* Disclaimer - AdSense loves this for niche tools */}
        <div className="max-w-3xl mx-auto mb-10 p-6 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-wider">
            Disclaimer: Herry TikTok Tool is an independent compliance resource. We are not affiliated with, 
            endorsed by, or connected to TikTok or ByteDance. All product names and logos are 
            trademarks of their respective owners.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] font-medium">
            © 2026 OFFICIAL HERRY TIKTOK TOOL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}