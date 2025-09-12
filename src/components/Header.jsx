import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

/**
 * Header.jsx
 * - Smooth open/close animations for mobile menu (no glitches)
 * - Icon morph animation with react-icons
 * - Click-outside-to-close + Escape close
 * - Scroll lock while mobile menu is open
 *
 * Requires: `npm install react-icons`
 * Uses Tailwind CSS classes (JIT recommended)
 */

const Header = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  // Lock scroll while open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape + click outside
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onDocClick = (e) => {
      if (!open) return;
      const target = e.target;
      // if click happened outside the header container and the menu
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onDocClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDocClick);
    };
  }, [open]);

  const baseLink =
    "inline-block px-3 py-2 text-sm md:text-base rounded-md transition-colors duration-150";
  const inactiveLink = baseLink + " text-gray-700 hover:text-blue-600";
  const activeLink =
    baseLink + " text-blue-600 font-semibold bg-blue-50/70 md:bg-transparent md:backdrop-blur-0";

  return (
    <>
      {/* Fixed floating header */}
      <header
        ref={containerRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] sm:w-[94%] md:w-auto"
        aria-label="Main navigation"
      >
        <div
          className={
            "relative flex items-center justify-between gap-4 md:gap-8 px-4 py-3 md:px-8 md:py-4 rounded-full " +
            "backdrop-blur-md bg-white/90 border border-gray-200 shadow-lg max-w-[1400px] mx-auto"
          }
        >
          {/* Brand */}
         <div className="flex items-center gap-2">
  {/* <img
    src="/logo.png"
    alt="Quint Tech Logo"
    className="h-10 w-auto md:h-12"
  /> */}
  <span className="text-xl md:text-2xl font-bold text-blue-600">
    Quint Tech
  </span>
</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4" role="navigation" aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
              Home
            </NavLink>

            <NavLink to="/service" className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
              Services
            </NavLink>

            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
              Portfolio
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : inactiveLink)}>
              About
            </NavLink>
          </nav>

          {/* Right side: CTA + Mobile Icon */}
          <div className="flex items-center gap-3">
            {/* CTA (visible on md+) */}
            <NavLink
              to="/contact"
              className="hidden md:inline-block px-4 py-2 text-sm md:text-base rounded-md bg-blue-600 text-white hover:opacity-95 transition"
            >
              Get a Quote
            </NavLink>

            {/* Mobile toggle */}
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className={
                "md:hidden relative w-10 h-10 flex items-center justify-center p-1 rounded-lg " +
                "bg-white/75 border border-gray-200 shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400"
              }
            >
              {/* Icon container to enable smooth animation */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Menu Icon */}
                <FiMenu
                  className={
                    "absolute w-6 h-6 text-slate-700 transform transition-all duration-300 ease-in-out " +
                    (open ? "opacity-0 scale-90 -translate-y-1 rotate-12" : "opacity-100 scale-100 translate-y-0 rotate-0")
                  }
                  aria-hidden
                />

                {/* Close Icon */}
                <FiX
                  className={
                    "absolute w-6 h-6 text-slate-700 transform transition-all duration-300 ease-in-out " +
                    (open ? "opacity-100 scale-100 translate-y-0 rotate-0" : "opacity-0 scale-90 translate-y-1 -rotate-12")
                  }
                  aria-hidden
                />
              </div>
            </button>
          </div>

          {/* Mobile menu (absolute; positioned below header) */}
          {/* Keep it mounted so transitions run on close as well */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={
              "md:hidden absolute left-4 right-4 mt-2 px-0 pointer-events-auto " +
              "transition-[opacity,transform] duration-300 ease-in-out will-change-transform"
            }
            style={{
              top: "100%",
              // dynamic transform/opactiy handled by classes below
            }}
          >
            {/* Animated wrapper: use conditional classes to animate both open & close */}
            <div
              className={
                "mx-auto w-full max-w-[920px] rounded-2xl bg-white border border-gray-200 shadow-xl p-5 " +
                (open
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none")
              }
            >
              <nav className="flex flex-col gap-3" role="menu" aria-label="Mobile primary">
                <NavLink
                  to="/"
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/service"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                >
                  Services
                </NavLink>

                <NavLink
                  to="/portfolio"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                >
                  Portfolio
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                >
                  About
                </NavLink>

                <div className="pt-4 border-t border-gray-100 mt-3">
                  <NavLink
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block text-center px-4 py-3 rounded-md bg-blue-600 text-white"
                    role="menuitem"
                  >
                    Get a Quote
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content isn't hidden under fixed header */}
      <div className="h-[72px] md:h-[92px]" aria-hidden="true" />
    </>
  );
};

export default Header;
