"use client";
import { Target, Heart, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Our Mission", desc: "To provide creators with the most accurate compliance tools and recovery strategies for their digital assets." },
    { icon: Heart, title: "Community First", desc: "We started as creators ourselves, so we understand the frustration of account issues and shadowbans." },
    { icon: Award, title: "Expertise", desc: "Our team consists of digital security enthusiasts who stay updated with platform policy changes daily." }
  ];

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section 1: Introduction */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4 block">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Empowering <span className="text-blue-600">Creators</span> Globally
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Herry TikTok Tool was founded in 2024 to bridge the gap between complex social media policies and the creators who drive the platforms. We simplify recovery and compliance.
          </p>
        </div>

        {/* Section 2: Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((v, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 3: The Story */}
        <div className="bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">The Herry TikTok Tool Story</h2>
            <div className="space-y-6 text-blue-100 text-lg font-medium leading-relaxed">
              <p>
                It all started when our founder lost access to a growing account due to a misunderstanding of the platform community guidelines. We realized there was no easy way for creators to understand compliance without hiring expensive agencies.
              </p>
              <p>
                We built this tool as a free resource to help users generate professional appeals, analyze shadowbans, and secure their digital identity with enterprise-grade methods.
              </p>
            </div>
            
            <div className="mt-10 flex items-center space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 inline-flex">
              <ShieldCheck className="w-6 h-6 text-blue-300" />
              <span className="text-sm font-bold uppercase tracking-widest">100% Independent & Secure</span>
            </div>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        </div>

      </div>
    </main>
  );
}