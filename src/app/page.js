"use client";
import { useState } from "react";
import { issues } from "../data/content";
import { blogs } from "../data/blogs";
import Link from "next/link";
import {
  Shield,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  ChevronRight,
  Zap,
  ShieldCheck,
  Plus,
  Minus,
} from "lucide-react";

export default function Home() {
  // ERROR FIXED: Yahan se <number | null> hata diya hai
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { label: "Issues Resolved", value: "50K+", icon: CheckCircle },
    { label: "Active Users", value: "100K+", icon: Users },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Avg. Response", value: "< 2hrs", icon: Clock },
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      desc: "Your data is protected with enterprise-level encryption.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Get solutions in minutes with our AI-powered support.",
    },
    {
      icon: Globe,
      title: "Global Compliance",
      desc: "Full GDPR and international data standard compliance.",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Certified professionals with platform-specific experience.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Business Owner",
      content: "Resolved my account issue in under 2 hours. Exceptional!",
      rating: 5,
      image: "SC",
    },
    {
      name: "Michael Roberts",
      role: "Content Creator",
      content: "The compliance team guided me through verification seamlessly.",
      rating: 5,
      image: "MR",
    },
    {
      name: "Emily Watson",
      role: "Digital Marketer",
      content: "Best investment for my business security. Worth every penny!",
      rating: 5,
      image: "EW",
    },
  ];

  const faqs = [
    {
      q: "How can I recover my banned TikTok account?",
      a: "Recovery depends on the ban type. Our tool helps you generate professional compliance appeals based on TikTok's latest guidelines.",
    },
    {
      q: "Why is my TikTok content getting '0 views'?",
      a: "This is often a shadowban or 'Unoriginal Content' flag. We provide a step-by-step fix to restore your organic reach.",
    },
    {
      q: "How do I fix TikTok Shop eligibility issues?",
      a: "Eligibility often fails due to region or tax info errors. We provide a compliance checklist to sync your data correctly.",
    },
    {
      q: "Is my data safe with Herry TikTok Tool?",
      a: "Absolutely. We use end-to-end encryption and never ask for your passwords or direct login access.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2 fill-current text-yellow-500" />{" "}
            Trusted by 100,000+ creators
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900">
            Digital Identity <span className="text-blue-600">Protection</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 font-medium italic">
            Official Herry TikTok Tool - Secure and recover your digital
            assets.
          </p>
          <Link
            href="#solutions"
            className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 shadow-xl inline-flex items-center"
          >
            Start Your Recovery <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white/50 rounded-3xl border border-white"
              >
                <div className="text-2xl font-black text-gray-900">
                  {s.value}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">
              Enterprise Security
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12">Recovery Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {issues.map((issue) => (
              <Link
                href={`/issue/${issue.slug}`}
                key={issue.id}
                className="bg-white p-8 rounded-[2rem] hover:border-blue-500 border border-transparent transition-all shadow-sm"
              >
                <ShieldCheck className="w-8 h-8 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-3">{issue.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{issue.shortDesc}</p>
                <div className="text-blue-600 font-bold text-xs uppercase flex items-center">
                  Initialize <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-24 bg-white" id="faqs">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">
            TikTok Help Center
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between p-6 bg-gray-50 font-bold text-gray-900"
                >
                  {faq.q} {openFaq === i ? <Minus /> : <Plus />}
                </button>
                {openFaq === i && (
                  <div className="p-6 bg-white text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">
            User Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {t.image}
                  </div>
                  <div className="ml-3">
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 uppercase">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed">
                  {t.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BLOG SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black">Latest Insights</h2>
          <Link href="/blog" className="text-blue-600 font-black">
            View All Articles →
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.slice(0, 4).map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group flex gap-6 bg-gray-50 p-4 rounded-3xl border border-gray-100"
            >
              <div className="w-32 h-32 bg-blue-600 rounded-2xl shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-900"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
