import {
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";
function MainServicesCard({serviceId, from, to, icon, tDelay, title, desc, features}) {
  return (
            <article
                key={serviceId}
                className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ transitionDelay: `${tDelay}ms` }}
              >
                {/* Gradient background overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${from}15 0%, ${to}15 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Icon & Price */}
                  <div className="flex items-start justify-between">
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-xl text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                    >
                      {icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-500">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                    {desc}
                  </p>

                  {/* Features */}
                  <div className="mt-4 space-y-2">
                    {features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 group-hover:text-slate-700 transition-colors duration-500">
                        <FaCheckCircle className="w-3 h-3 text-emerald-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-indigo-600 group-hover:text-indigo-600 transition-colors duration-500"
                    >
                      Get Quote <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${from}, ${to})`,
                    filter: 'blur(20px)',
                    transform: 'scale(1.1)'
                  }}
                />
              </article>
  )
}

export default MainServicesCard