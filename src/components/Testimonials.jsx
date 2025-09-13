import React from 'react'
import {
    FaStar,
    FaQuoteLeft,
  } from "react-icons/fa";
function Testimonials() {
  return (
    <section className="py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-sm text-indigo-600 font-semibold">Trusted by</h3>
      <h2 className="mt-2 text-2xl md:text-3xl font-manrope font-bold text-slate-900">Companies & teams we helped</h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <blockquote className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-start gap-3">
            <span className="text-indigo-500"><FaQuoteLeft className="w-6 h-6" /></span>
            <p className="text-slate-700">“Quint Tech built our marketplace MVP ahead of schedule — the team was responsive and focused on outcomes.”</p>
          </div>
          <footer className="mt-4 text-sm text-slate-500">— Product Lead, AutoTrade</footer>
        </blockquote>

        <blockquote className="p-6 bg-gradient-to-br from-white to-amber-50 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-start gap-3">
            <span className="text-amber-500"><FaQuoteLeft className="w-6 h-6" /></span>
            <p className="text-slate-700">“Their engineering skills and clear communication made delivery painless. Highly recommend.”</p>
          </div>
          <footer className="mt-4 text-sm text-slate-500">— Founder, EduPlatform</footer>
        </blockquote>

        <blockquote className="p-6 bg-gradient-to-br from-white to-cyan-50 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-start gap-3">
            <span className="text-cyan-500"><FaQuoteLeft className="w-6 h-6" /></span>
            <p className="text-slate-700">“Handled infra and CI/CD, now our deployments are reliable and fast.”</p>
          </div>
          <footer className="mt-4 text-sm text-slate-500">— CTO, AnalyticsCo</footer>
        </blockquote>
      </div>
    </div>
  </section>
  )
}

export default Testimonials
