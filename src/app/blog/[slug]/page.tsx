"use client";
import { blogs } from "../../../data/blogs";
import { notFound } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

export default function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* 1. Progress Bar (Top) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-[60]">
        <div className="bg-blue-600 h-full w-1/3 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
      </div>

      {/* 2. Floating Navigation */}
      <nav className="border-b bg-white/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/blog" className="group flex items-center text-gray-600 hover:text-blue-600 transition-all font-medium">
            <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors mr-2">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Guides
          </Link>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12 lg:flex lg:gap-12">
        
        {/* LEFT SIDE: Main Article Content */}
        <article className="lg:w-2/3 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-6 md:p-12">
          
          {/* Header Section */}
          <header className="mb-10">
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Official Guide
              </span>
              <div className="flex items-center text-gray-400 text-xs font-medium">
                <Calendar className="w-3.5 h-3.5 mr-1" /> Feb 28, 2026
              </div>
              <div className="flex items-center text-gray-400 text-xs font-medium border-l pl-3">
                <Clock className="w-3.5 h-3.5 mr-1" /> 6 min read
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.15] mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-500 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              {post.excerpt}
            </p>
          </header>

          {/* ADSENSE TOP SLOT - Integrated into design */}
          <div className="my-10 p-4 bg-gray-50 border border-gray-100 rounded-3xl text-center">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-4">Advertisement</span>
            <div className="h-24 flex items-center justify-center font-bold text-gray-300">
              [Auto-Optimized Display Ad]
            </div>
          </div>

          {/* Actual Content with High-Quality Typography */}
          <div 
            className="prose prose-lg prose-blue max-w-none 
            prose-headings:font-black prose-headings:text-gray-900 
            prose-p:text-gray-600 prose-p:leading-[1.8]
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-img:rounded-3xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* ADSENSE MID-ARTICLE SLOT */}
          <div className="my-12 py-8 border-y border-gray-100 text-center">
             <div className="h-64 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 italic">
               [In-Article Native Ad Unit]
             </div>
          </div>

        </article>

        {/* RIGHT SIDE: Sidebar (Trust & Conversion) */}
        <aside className="lg:w-1/3 mt-12 lg:mt-0 space-y-8">
          
          {/* Author/Expert Card */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm sticky top-28">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold">
                JT
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">Jerry TikTok Team</h4>
                <p className="text-xs text-gray-400">Compliance Experts</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                <p className="text-sm text-gray-600 font-medium">Verified Safety Protocols</p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                <p className="text-sm text-gray-600 font-medium">Updated 2 hours ago</p>
              </div>
            </div>

            <Link 
              href="/#solutions" 
              className="block w-full text-center bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              Get Help Now
            </Link>
          </div>

          {/* Newsletter / Sticky Ad Slot */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-[2rem] text-white overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Stay Protected</h4>
              <p className="text-gray-400 text-sm mb-6">Get weekly compliance alerts directly in your inbox.</p>
              <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm mb-3 outline-none focus:border-blue-500 transition-all" />
              <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-100 transition-all">Subscribe</button>
            </div>
          </div>
        </aside>

      </main>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-blue-600 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Ready to Fix Your Account?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join 100,000+ creators who use our specialized tools to keep their digital identity safe and compliant.
          </p>
          <Link href="/#solutions" className="bg-white text-blue-600 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl relative z-10 inline-block">
            Explore All Solutions
          </Link>
        </div>
      </section>
    </div>
  );
}