// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaMobileAlt, FaCloud, FaDatabase, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard"; 
/**
 * Improved Home page:
 * - Better hero contrast and controlled gradient fade so text remains readable
 * - Colorful service cards with "See all services" CTA
 * - Project cards with stronger visuals
 * - Testimonial cards with quote icon and accent
 */

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

 const services = [
  {
    id: 1,
    title: "Web Applications",
    desc: "MERN & Next.js apps — fast, accessible and SEO-friendly.",
    icon: <FaRocket className="w-5 h-5" />,
    from: "#6366f1", // indigo-500
    to: "#8b5cf6",   // violet-500
  },
  {
    id: 2,
    title: "Mobile Apps",
    desc: "Cross-platform apps with native feel and performance.",
    icon: <FaMobileAlt className="w-5 h-5" />,
    from: "#f59e0b", // amber-500
    to: "#fb923c",   // orange-400
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    desc: "CI/CD, IaC, monitoring and scalable cloud architecture.",
    icon: <FaCloud className="w-5 h-5" />,
    from: "#06b6d4", // cyan-500
    to: "#0ea5e9",   // sky-500
  },
  {
    id: 4,
    title: "Data & ML",
    desc: "Analytics, pipelines and ML prototypes for quick wins.",
    icon: <FaDatabase className="w-5 h-5" />,
    from: "#d946ef", // fuchsia-500
    to: "#fb7185",   // rose-400
  },
];

  const projects = [
    { id: 1, title: "AutoTrade Finder", summary: "Aggregator with repair & profit estimator + Airtable sync.", tags: ["React", "Node", "Scraping"] },
    { id: 2, title: "Edu LMS", summary: "Modular LMS with assignments, progress tracking & payments.", tags: ["Next.js", "MongoDB", "Stripe"] },
    { id: 3, title: "Analytics Dashboard", summary: "Real-time dashboards, alerts and custom reporting.", tags: ["React", "D3", "Postgres"] },
  ];

  return (
    <main className="relative">
      {/* HERO */}
    <section className="relative overflow-hidden">
  {/* Responsive gradient background */}
  <div className="absolute inset-0 -z-20">
    <div className="h-full md:h-[700px] min-h-screen bg-gradient-to-b from-indigo-800 via-violet-700 to-violet-600 opacity-95" />
    {/* soft bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/95 to-transparent pointer-events-none" />
  </div>

  <div className="max-w-7xl mx-auto md:mt-8 mt-12 px-6 pt-16 md:pt-24 pb-16 md:pb-20 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      {/* Left - text */}
      <div
        className={`md:col-span-7 py-3 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } transition-all duration-700`}
      >
        <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-white/90 w-max backdrop-blur-sm border border-white/20">
          Trusted engineering partner
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl leading-tight font-manrope font-extrabold text-white drop-shadow-lg">
          We build digital products that scale — fast, secure & delightful.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-white/85 drop-shadow-sm">
          Quint Tech delivers production-ready web and mobile apps with clear
          roadmaps, measurable outcomes, and ongoing support.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium shadow-lg hover:scale-[1.02] transition"
          >
            Get a Quote <FaArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/5 transition"
          >
            View Portfolio
          </Link>
        </div>

        <ul className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
          <li className="inline-flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />{" "}
            Fast delivery
          </li>
          <li className="inline-flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />{" "}
            Transparent process
          </li>
          <li className="inline-flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-sky-400" />{" "}
            Ongoing support
          </li>
        </ul>
      </div>

      {/* Right - illustration */}
      <div
        className={`md:col-span-5 flex justify-center md:justify-end ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } transition-all duration-900`}
      >
        <div className="w-full max-w-md relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute -left-8 bottom-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />
          <svg
            viewBox="0 0 520 360"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Decorative"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="520"
              height="360"
              rx="20"
              fill="url(#g1)"
              opacity="0.08"
            />
            <g
              transform="translate(30,40)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              opacity="0.85"
            >
              <path d="M30 200 Q120 140 210 200 T390 200" />
              <circle cx="90" cy="150" r="8" fill="#fff" />
              <circle cx="210" cy="120" r="8" fill="#fff" />
              <circle cx="330" cy="170" r="8" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Services Section */}
<section className="py-12 md:py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-sm text-indigo-600 font-semibold">What we do</h3>
        <h2 className="mt-2 text-2xl md:text-3xl font-manrope font-bold text-slate-900">
          Our Services
        </h2>
        <p className="mt-2 text-slate-600 max-w-xl">
          Engineering, design and data solutions to help businesses grow.
        </p>
      </div>

      <div className="ml-auto">
        <Link
          to="/service"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition"
        >
          See all services <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.map((s, i) => (
    <ServiceCard
      key={s.id}
      id={s.id}
      title={s.title}
      desc={s.desc}
      icon={s.icon}
      from={s.from}
      to={s.to}
      delay={i * 60}
    />
  ))}
</div>
  </div>
</section>


      {/* PROJECTS */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm text-indigo-600 font-semibold">Selected work</h3>
              <h2 className="mt-2 text-2xl md:text-3xl font-manrope font-bold text-slate-900">Projects that shipped</h2>
            </div>
            <Link to="/portfolio" className="text-sm text-indigo-600 hover:underline">See all projects</Link>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <article key={p.id} className="relative group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-lg transition" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="h-44 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center text-slate-400">
                  {/* Replace with image if available */}
                  <span className="text-sm">Project screenshot</span>
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-semibold text-slate-900">{p.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{p.summary}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-indigo-50 rounded-full text-indigo-700 border border-indigo-100">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
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
