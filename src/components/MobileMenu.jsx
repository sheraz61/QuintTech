import { FiHome, FiLayers, FiBriefcase, FiUser, FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, setOpen, menuRef }) {
  const baseClasses =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform";
  const activeClasses =
    "bg-gradient-to-r from-indigo-400/20 to-indigo-500/20 text-indigo-800 dark:text-indigo-200 font-semibold shadow-sm scale-[1.02]";

  // Animation variants for staggered menu items
  const menuItems = [
    { to: "/", icon: FiHome, label: "Home", end: true },
    { to: "/service", icon: FiLayers, label: "Services" },
    { to: "/portfolio", icon: FiBriefcase, label: "Portfolio" },
    { to: "/about", icon: FiUser, label: "About" },
  ];

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      className={`md:hidden absolute left-4 right-4 mt-3 transition-all duration-500 ease-out will-change-transform ${
        open
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
      }`}
      style={{ top: "100%" }}
    >
      <div className="relative mx-auto w-full max-w-[420px] rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 backdrop-blur-xl border-2 border-indigo-200 dark:border-indigo-800/50 shadow-2xl overflow-hidden">
        {/* Decorative gradient glows */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-400/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 -right-10 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        {/* Menu links with staggered animation */}
        <nav className="flex flex-col gap-2 p-5" role="menu" aria-label="Mobile primary">
          {menuItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : "text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"}`
              }
              style={{
                animationDelay: open ? `${index * 0.05}s` : "0s",
                animationName: open ? "slideInLeft" : "none",
                animationDuration: "0.4s",
                animationFillMode: "both",
              }}
            >
              <item.icon className="text-indigo-600 dark:text-indigo-400 w-5 h-5 flex-shrink-0" />
              {item.label}
            </NavLink>
          ))}

          <div 
            className="pt-4 border-t border-amber-200 dark:border-indigo-800 mt-3"
            style={{
              animationDelay: open ? "0.2s" : "0s",
              animationName: open ? "fadeIn" : "none",
              animationDuration: "0.5s",
              animationFillMode: "both",
            }}
          >
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] transform transition-all duration-300 hover:brightness-110"
              role="menuitem"
            >
              <FiMail className="w-5 h-5" />
              Get a Quote
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.5;
            }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
    </div>
  );
}