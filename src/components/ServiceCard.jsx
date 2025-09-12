import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ id, title, desc, icon, from, to, delay = 0 }) {
  return (
 <article
  aria-labelledby={`service-${id}`}
  className="group relative rounded-xl bg-white 
             shadow-2xl transition-all duration-500 ease-in-out transform 
             hover:-translate-y-3 hover:shadow-2xl
             overflow-hidden"
  style={{ transitionDelay: `${delay}ms` }}
>
  {/* Gradient background */}
  <div
    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
               transition-opacity duration-500 ease-in-out"
    style={{
      background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
    }}
  />

  {/* Content */}
  <div className="relative z-10 p-6 transition-colors duration-500 ease-in-out">
    {/* Icon */}
    <div
      className="flex items-center justify-center w-12 h-12 rounded-lg text-white shadow-md 
                 transform transition-transform duration-500 ease-in-out 
                 group-hover:scale-110 group-hover:rotate-3"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {icon}
    </div>

    {/* Title */}
    <h4
      id={`service-${id}`}
      className="mt-4 text-lg font-semibold text-slate-900 
                 transition-colors duration-500 ease-in-out group-hover:text-white"
    >
      {title}
    </h4>

    {/* Description */}
    <p
      className="mt-2 text-sm text-slate-600 
                 transition-colors duration-500 ease-in-out group-hover:text-white/90"
    >
      {desc}
    </p>

    {/* CTA */}
    <div className="mt-4">
      <Link
        to="/service"
        className="inline-flex items-center gap-2 text-sm font-medium 
                   text-indigo-600 transition-colors duration-500 ease-in-out group-hover:text-white"
      >
        Learn more <FaArrowRight className="w-3 h-3" />
      </Link>
    </div>
  </div>
</article>

  );
}
