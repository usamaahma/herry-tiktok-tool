"use client";
import Link from "next/link";
import { Smartphone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group transition-transform hover:scale-105">
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl shadow-lg shadow-blue-200">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black leading-none tracking-tight text-gray-900 uppercase">
                Herry <span className="text-blue-600">TikTok</span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Compliance Tool</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider text-gray-600">
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/#solutions" className="hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </div>

          <Link href="/#solutions" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 font-bold text-sm">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}