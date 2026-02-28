"use client";
import { Mail, MessageSquare, ShieldCheck, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Have questions about account compliance or recovery? Our expert team is here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100 flex items-start space-x-6">
              <div className="bg-blue-600 p-4 rounded-2xl text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Email Support</h3>
                <p className="text-gray-600 font-medium">support@herrytiktoktool.com</p>
                <p className="text-sm text-blue-600 mt-2 font-bold uppercase tracking-wider">Average response: 2 hours</p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex items-start space-x-6">
              <div className="bg-gray-900 p-4 rounded-2xl text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Operating Hours</h3>
                <p className="text-gray-600 font-medium">Monday - Sunday</p>
                <p className="text-sm text-gray-400 mt-2 font-bold uppercase tracking-wider">24/7 Global Compliance Support</p>
              </div>
            </div>

            <div className="p-8 bg-green-50 rounded-[2rem] border border-green-100 flex items-start space-x-6">
              <div className="bg-green-600 p-4 rounded-2xl text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Official Verification</h3>
                <p className="text-gray-600 font-medium">Herry TikTok Tool - Independent Assistant</p>
                <p className="text-sm text-green-600 mt-2 font-bold uppercase tracking-wider">Secured by Enterprise SSL</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Visual Only for now) */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-100/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="Herry Dev" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="herry@example.com" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Issue Type</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                  <option>Account Recovery</option>
                  <option>Shadowban Fix</option>
                  <option>Monetization Issue</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest">Your Message</label>
                <textarea rows={4} placeholder="Describe your issue in detail..." className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <MessageSquare className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}