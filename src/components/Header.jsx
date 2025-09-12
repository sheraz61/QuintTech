import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
/**
 * FloatingHeader.jsx
 * - Centered floating pill navbar (always floating)
 * - Larger paddings & rounded-full pill for visibility
 * - Animated hamburger -> X icon (react-icons)
 * - Accessible mobile menu with click-outside + Escape close
 * - No scroll-based switching; always floating on top of content
 */

const Header = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  // lock page scroll when mobile menu open
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

  // close on Escape and click outside
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDocClick = (e) => {
      if (!open) return;
      const t = e.target;
      if (
        containerRef.current &&
        !containerRef.current.contains(t) &&
        menuRef.current &&
        !menuRef.current.contains(t)
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

  const baseLink = "px-2 py-1 text-slate-700 hover:text-indigo-600 transition rounded-md";
  const activeLink = "px-2 py-1 text-indigo-600 font-semibold ";

  return (
    <>
      <header
        ref={containerRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-[65%] "
        aria-label="Main navigation"
      >
        <div
          className={
            "mx-auto flex items-center justify-between gap-6 px-5 md:px-8 py-2 md:py-3 rounded-full " +
            "backdrop-blur-md bg-white/75 border border-gray-200 shadow-2xl max-w-[1240px]"
          }
          style={{ alignItems: "center" }}
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-1">
              {/* uncomment if you have logo at /logo.png */}
              <img src="/light.png" alt="Quint Tech" className="h-11 md:h-12" />
              {/* <span className="text-lg md:text-2xl  font-bold text-indigo-600">Quint Tech</span> */}
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-6" role="navigation" aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => (isActive ? activeLink : baseLink)}>
              Home
            </NavLink>

            <NavLink to="/service" className={({ isActive }) => (isActive ? activeLink : baseLink)}>
              Services
            </NavLink>

            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? activeLink : baseLink)}>
              Portfolio
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : baseLink)}>
              About
            </NavLink>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:scale-[1.02] transition-shadow shadow"
            >
              Get a Quote
            </NavLink>

            {/* Mobile toggle */}
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-lg bg-transparent hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <FiMenu
                  className={
                    "absolute w-6 h-6 text-slate-700 transform transition-all duration-300 " +
                    (open ? "opacity-0 scale-90 -translate-y-1 rotate-12" : "opacity-100 scale-100 translate-y-0 rotate-0")
                  }
                  aria-hidden
                />
                <FiX
                  className={
                    "absolute w-6 h-6 text-slate-700 transform transition-all duration-300 " +
                    (open ? "opacity-100 scale-100 translate-y-0 rotate-0" : "opacity-0 scale-90 translate-y-1 -rotate-12")
                  }
                  aria-hidden
                />
              </div>
            </button>
          </div>

          {/* Mobile menu (positioned below the floating pill) */}
             <MobileMenu open={open} setOpen={setOpen} menuRef={menuRef} />

        </div>
      </header>

      {/* spacer so content isn't hidden behind floating header */}
      {/* <div className="h-[84px] md:h-[110px]" aria-hidden="true" /> */}
    </>
  );
};

export default Header;
