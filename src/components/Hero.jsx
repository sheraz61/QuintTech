import React from 'react'
import { Link } from "react-router-dom";
import { FaRocket, FaMobileAlt, FaCloud, FaDatabase, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

function Hero({mounted}) {
  return (
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
              className={`md:col-span-7 py-3 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
              className={`md:col-span-5 flex justify-center md:justify-end ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
  )
}

export default Hero