// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesSection from "../components/HomeService";
import { FaQuoteLeft } from "react-icons/fa";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";


export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const projects = [
    { id: 1, title: "AutoTrade Finder", summary: "Aggregator with repair & profit estimator + Airtable sync.", tags: ["React", "Node", "Scraping"] },
    { id: 2, title: "Edu LMS", summary: "Modular LMS with assignments, progress tracking & payments.", tags: ["Next.js", "MongoDB", "Stripe"] },
    { id: 3, title: "Analytics Dashboard", summary: "Real-time dashboards, alerts and custom reporting.", tags: ["React", "D3", "Postgres"] },
  ];

  return (
    <main className="relative">
      {/* HERO */}
      <Hero mounted={mounted}/>
      {/* Services Section */}
      <ServicesSection />
      {/* PROJECTS */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Selected work</h3>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
                Projects that shipped
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 group transition-all"
            >
              See all projects
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => {
              // Generate a unique gradient for each card based on index
              const gradients = [
                'from-indigo-500/10 to-purple-500/10',
                'from-blue-500/10 to-cyan-500/10',
                'from-emerald-500/10 to-teal-500/10',
                'from-amber-500/10 to-orange-500/10',
                'from-rose-500/10 to-pink-500/10',
                'from-violet-500/10 to-fuchsia-500/10'
              ];

              const gradient = gradients[i % gradients.length];

              return (
                <article
                  key={p.id}
                  className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Gradient accent bar */}
                  <div className={`h-2 w-full bg-gradient-to-r ${gradient}`}></div>

                  <div className="h-44 relative overflow-hidden">
                    {/* Project image placeholder with gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
                    <img src="image.png" alt="" />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-xs font-medium px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">View case study</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{p.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{p.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t, tagIndex) => {
                        const tagColors = [
                          'bg-indigo-100 text-indigo-800 border-indigo-200',
                          'bg-purple-100 text-purple-800 border-purple-200',
                          'bg-cyan-100 text-cyan-800 border-cyan-200',
                          'bg-emerald-100 text-emerald-800 border-emerald-200',
                          'bg-amber-100 text-amber-800 border-amber-200'
                        ];

                        return (
                          <span
                            key={t}
                            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColors[tagIndex % tagColors.length]}`}
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    {/* View project button that appears on hover */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Link
                        to={`/portfolio/${p.id}`}
                        className="inline-flex items-center text-xs font-medium text-indigo-600 hover:text-indigo-700"
                      >
                        View project
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials/>

      {/* FINAL CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-indigo-50 to-violet-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-manrope font-bold text-slate-900">Ready to build something great?</h3>
          <p className="mt-3 text-slate-600">Tell us about your project and we’ll get back with a clear plan and estimate.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/contact" className="inline-block px-6 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:scale-105 transition">
              Request a Quote
            </Link>
            <Link to="/portfolio" className="inline-block px-6 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-white transition">
              See our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
