"use client";
import { Link } from "lucide-react";
import { issues } from "../../../data/content"; 
import { notFound } from "next/navigation";
import React, { use } from "react"; // 'use' import karen

export default function IssueDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Params ko unwrap karen
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const issue = issues.find((i) => i.slug === slug);

  if (!issue) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Issue Not Found</h1>
        <p className="text-gray-500">Requested Slug: <span className="font-bold text-black">{slug}</span></p>
        <Link href="/" className="text-blue-600 underline mt-4 font-bold">← Back to Herry TikTok Tool</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-xl rounded-3xl mt-10 border border-gray-100">
      <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Official Support</span>
      <h1 className="text-4xl font-extrabold text-gray-900 mt-2">{issue.title}</h1>
      
      <div className="mt-8 p-8 bg-blue-50 rounded-2xl border border-blue-100">
        <p className="text-gray-700 leading-relaxed text-lg">{issue.detailedContent}</p>
        
        <div className="mt-8">
          <label className="block text-sm font-bold text-gray-700 mb-2">{issue.inputLabel}</label>
          <input 
            type="text" 
            placeholder="@username" 
            className="w-full p-4 border-2 border-white rounded-xl shadow-sm focus:border-blue-500 outline-none transition-all"
          />
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all">
            Generate Recovery Appeal
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-bold text-gray-900 mb-3">Professional Compliance Template:</h3>
        <div className="bg-gray-900 text-green-400 p-6 rounded-2xl font-mono text-sm">
          <pre className="whitespace-pre-wrap">{issue.appealTemplate}</pre>
        </div>
      </div>
    </div>
  );
}