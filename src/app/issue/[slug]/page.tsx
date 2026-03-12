"use client";
import { useState, useEffect, use } from "react";
import { issues } from "../../../data/content";
import Link from "next/link";
import { CheckCircle2, Loader2, Heart, Search, ShieldCheck, Info, Sparkles } from "lucide-react";

export default function IssueDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const issue = issues.find((i) => i.slug === slug);

  // States
  const [username, setUsername] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [gender, setGender] = useState("male");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  // TikTok specific steps
  const tiktokSteps = [
    "Verifying username...",
    "Checking account suspension status...",
    "Reviewing community guidelines...",
    "Analyzing server logs...",
    "Finalizing request..."
  ];

  // Love/Partner specific steps
  const funSteps = [
    "Analyzing personalities...",
    "Checking star compatibility...",
    "Calculating destiny vibes...",
    "Finalizing result..."
  ];

  const currentSteps = (issue?.type === 'love' || issue?.type === 'partner') ? funSteps : tiktokSteps;

  if (!issue) return <div className="p-10 text-center">Issue Not Found</div>;

  const handleProcess = () => {
    if (!username) return alert("Please fill the details!");
    
    // Check if already completed in localStorage
    const savedStatus = localStorage.getItem(`status_${issue.slug}_${username.toLowerCase()}`);
    if (savedStatus === "completed") {
      setResult("completed");
      return;
    }

    setLoading(true);
    setStep(0);
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < currentSteps.length - 1) {
        currentStep++;
        setStep(currentStep);
      } else {
        clearInterval(interval);
        setLoading(false);
        setResult("success");
        localStorage.setItem(`status_${issue.slug}_${username.toLowerCase()}`, "completed");
      }
    }, 1500);
  };

  // Random Data Generators
  const randomLove = Math.floor(Math.random() * 41) + 55; // 55% to 95%
  const pakNames = gender === "male" 
    ? ["Zoya", "Areeba", "Hania", "Mahnoor", "Sajal", "Kinza", "Anum"] 
    : ["Hamza", "Zain", "Bilal", "Usman", "Fahad", "Saad", "Ameer"];
  const randomPartner = pakNames[Math.floor(Math.random() * pakNames.length)];

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white min-h-screen">
      <Link href="/" className="text-blue-600 font-bold mb-6 inline-block hover:underline">← Back to Dashboard</Link>
      
      <div className={`${issue.type === 'love' ? 'bg-pink-50 border-pink-100' : 'bg-blue-50 border-blue-100'} p-8 rounded-[2.5rem] border shadow-sm transition-colors`}>
        <div className="flex items-center gap-3 mb-2">
           {issue.type === 'love' ? <Heart className="text-pink-500 fill-current" /> : <ShieldCheck className="text-blue-600" />}
           <h1 className="text-3xl font-black text-gray-900">{issue.title}</h1>
        </div>
        <p className="text-gray-600 mb-8">{issue.detailedContent}</p>

        {/* 1. INPUT SECTION */}
        {!result && !loading && (
          <div className="space-y-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">{issue.inputLabel}</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={issue.type === 'love' || issue.type === 'partner' ? "Enter Name" : "@username"} 
                className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all"
              />
            </div>

            {issue.type === 'love' && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Partner's Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Partner's Name" 
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-pink-400 rounded-2xl outline-none"
                />
              </div>
            )}

            {issue.type === 'partner' && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Gender</label>
                <select 
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none"
                >
                  <option value="male">I am Male</option>
                  <option value="female">I am Female</option>
                </select>
              </div>
            )}

            <button 
              onClick={handleProcess}
              className={`w-full ${issue.type === 'love' ? 'bg-pink-500 hover:bg-pink-600 shadow-pink-200' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'} text-white py-4 rounded-2xl font-black transition-all shadow-lg`}
            >
              {issue.type === 'love' || issue.type === 'partner' ? "Check Destiny" : "Submit Request"}
            </button>
          </div>
        )}

        {/* 2. LOADING SECTION */}
        {loading && (
          <div className="text-center py-10 animate-pulse">
            <Loader2 className={`w-12 h-12 ${issue.type === 'love' ? 'text-pink-500' : 'text-blue-600'} animate-spin mx-auto mb-4`} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">{currentSteps[step]}</h3>
            <p className="text-gray-500">Please wait, AI is processing...</p>
          </div>
        )}

        {/* 3. INITIAL SUCCESS (FIRST TIME) */}
        {result === "success" && (
          <div className="text-center py-10 animate-in zoom-in duration-500">
            <div className={`w-20 h-20 ${issue.type === 'love' ? 'bg-pink-100 text-pink-600' : 'bg-green-100 text-green-600'} rounded-full flex items-center justify-center mx-auto mb-6`}>
              {issue.type === 'love' ? <Heart className="w-10 h-10 fill-current" /> : <CheckCircle2 className="w-10 h-10" />}
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              {issue.type === 'love' || issue.type === 'partner' ? "Analysis Complete!" : "Request Submitted!"}
            </h2>
            <p className="text-gray-600 mb-6 px-4">
              {issue.type === 'love' || issue.type === 'partner' 
                ? "Your destiny report is ready. Please re-enter your name to view the secret result!" 
                : "Your request has been submitted. Please come back later and check about your request."}
            </p>
            <button onClick={() => {setResult(null); setUsername("");}} className="text-blue-600 font-bold underline">Try Again / Refresh</button>
          </div>
        )}

        {/* 4. FINAL RESULT (ALREADY COMPLETED) */}
        {result === "completed" && (
          <div className={`text-center py-10 rounded-3xl border-2 ${issue.type === 'love' ? 'bg-pink-100 border-pink-300' : 'bg-green-50 border-green-200'} animate-in slide-in-from-bottom duration-500`}>
            <h2 className={`text-3xl font-black ${issue.type === 'love' ? 'text-pink-700' : 'text-green-700'} mb-4`}>
              {issue.type === 'love' ? "💖 Love Match Found!" : "🎉 Congratulations!"}
            </h2>
            
            {issue.type === 'love' ? (
               <div className="space-y-2">
                  <p className="text-4xl font-black text-pink-600">{randomLove}%</p>
                  <p className="text-gray-700 font-medium">Emotional & Spiritual Compatibility</p>
               </div>
            ) : issue.type === 'partner' ? (
               <div className="space-y-2">
                  <p className="text-gray-500 text-sm">Your future partner's name is:</p>
                  <p className="text-4xl font-black text-blue-600">{randomPartner}</p>
               </div>
            ) : issue.type === 'health' ? (
              <p className="text-xl font-bold text-gray-800">Account Health: <span className="text-green-600">98% (Excellent)</span></p>
            ) : (
              <p className="text-lg text-gray-700 font-medium px-4">
                The process for <span className="text-blue-600 font-black">@{username}</span> is now fully completed!
              </p>
            )}
            
            <button onClick={() => setResult(null)} className="mt-6 text-sm text-gray-500 underline">Check Another</button>
          </div>
        )}
      </div>

      {/* 5. OFFICIAL GUIDANCE SECTION */}
      <div className="mt-12">
        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
          <Info className="mr-2 text-blue-600" /> {issue.type === 'love' ? 'Compatibility Notes' : 'Official Guidance'}
        </h3>
        <div className="grid gap-4">
          {issue.guidance.map((item: string, idx: number) => (
            <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className={`w-6 h-6 ${issue.type === 'love' ? 'bg-pink-500' : 'bg-blue-600'} text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}>
                {idx + 1}
              </div>
              <p className="text-gray-700 font-medium text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}