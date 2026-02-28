import { blogs } from "../../data/blogs";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";

export default function BlogList() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Resources & Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Jerry TikTok Tool <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl">
            Latest updates on digital compliance, account security, and platform
            safety protocols.
          </p>
        </div>

        {/* Blog Grid - Using Landing Page Premium Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Card Image Placeholder / Gradient */}
              <div className="h-52 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-blue-600 flex items-center shadow-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>

              <div className="p-8 flex-grow">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {index === 0 ? "Trending" : "Guide"}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> 5 min read
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Adsense Slot Below Blog List */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white border-2 border-dashed border-gray-200 h-32 rounded-3xl flex items-center justify-center">
            <span className="text-gray-400 text-sm italic font-medium tracking-wider">
              [High CPC Display Ad Unit for Blog List]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
