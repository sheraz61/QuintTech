// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Brand + Vision */}
        <div>
          <div className="flex items-center gap-3">
            {/* <img src="/logo.png" alt="Quint Tech Logo" className="h-10 w-auto" /> */}
            <span className="text-xl font-bold text-white">Quint Tech</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            We build scalable web and mobile solutions, focusing on maintainable code and measurable outcomes.
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-200">Vision</h4>
            <p className="text-sm text-slate-300 mt-1">
              To be the trusted technology partner that helps products scale from concept to market leader.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold text-slate-200">Mission</h4>
            <p className="text-sm text-slate-300 mt-1">
              Deliver user-centered software quickly, reliably, and securely while empowering our clients with clear roadmaps.
            </p>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Our Services (expanded) */}
        <div>
          <h4 className="text-lg font-semibold text-white">Our Services</h4>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>Web Applications (MERN / Next.js)</li>
            <li>Mobile Applications (React Native / Flutter)</li>
            <li>UI / UX Design & Prototyping</li>
            <li>Data Engineering & Machine Learning</li>
            <li>Cloud Architecture & DevOps</li>
            <li>API Design & Integrations</li>
            <li>QA, Testing & Automation</li>
            <li>E-commerce Platforms & Marketplaces</li>
            <li>Maintenance, Monitoring & SRE</li>
            <li>Security Audits & Compliance</li>
          </ul>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-200">Need a custom solution?</h4>
            <p className="text-sm text-slate-300 mt-1">
              <Link to="/contact" className="underline hover:text-white">Request a quote</Link>
            </p>
          </div>
        </div>

        {/* Column 4 - Contact + Social */}
        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>

          <address className="not-italic mt-4 text-slate-300 text-sm space-y-2">
            <div>Quint Tech</div>
            <div>Karachi, Pakistan</div>
            <div>
              Email: <a href="mailto:hello@quinttech.com" className="underline hover:text-white">hello@quinttech.com</a>
            </div>
            <div>
              Phone: <a href="tel:+922100000000" className="underline hover:text-white">+92 21 0000 0000</a>
            </div>
          </address>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-200">Follow Us</h4>
            <div className="mt-3 flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quint Tech on LinkedIn"
                className="p-2 rounded-md hover:bg-slate-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-200">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v14h-4zM8.5 8h3.9v2h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.6 4.5 6v8h-4v-7c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V22h-4V8z"></path>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quint Tech on Twitter"
                className="p-2 rounded-md hover:bg-slate-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-200">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.1 9.1 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.5 2.26-4.5 5.05 0 .4.05.8.14 1.17C7.7 6.94 4.1 5.13 1.67 2.15a5.03 5.03 0 00-.61 2.54c0 1.75.8 3.3 2.02 4.2A4.47 4.47 0 01.96 8.2v.06c0 2.44 1.64 4.47 3.82 4.93-.4.1-.83.15-1.27.15-.3 0-.6-.03-.9-.09.6 2.05 2.4 3.55 4.52 3.6A9.05 9.05 0 010 20.25 12.77 12.77 0 006.83 22c8.21 0 12.72-7 12.72-13.07 0-.2 0-.4-.02-.6A9.14 9.14 0 0023 3z"></path>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quint Tech on GitHub"
                className="p-2 rounded-md hover:bg-slate-800"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-200">
                  <path d="M12 .5C5.65.5.5 5.64.5 12.02c0 5.07 3.29 9.36 7.86 10.87.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.4-3.88-1.4-.52-1.36-1.27-1.72-1.27-1.72-1.04-.7.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.17a11 11 0 015.79 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.6.24 2.78.12 3.07.73.8 1.17 1.82 1.17 3.07 0 4.4-2.69 5.35-5.25 5.64.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.79.56A10.52 10.52 0 0023.5 12.02C23.5 5.64 18.35.5 12 .5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower copyright bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <div>© {currentYear} Quint Tech. All rights reserved.</div>
          <div className="mt-2 md:mt-0 flex gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
