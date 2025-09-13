// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FaRocket, 
  FaMobileAlt, 
  FaCloud, 
  FaDatabase, 
  FaDesktop, 
  FaPaintBrush,
  FaShieldAlt,
  FaAward,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaChevronUp
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand + Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Quint Tech
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              We build scalable web and mobile solutions, focusing on maintainable code and measurable outcomes that drive business growth.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <FaShieldAlt className="w-4 h-4 text-emerald-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <FaAward className="w-4 h-4 text-amber-400" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <FaRocket className="w-4 h-4 text-indigo-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/service" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Web Applications", icon: FaDesktop },
                { name: "Mobile Apps", icon: FaMobileAlt },
                { name: "UI/UX Design", icon: FaPaintBrush },
                { name: "Cloud & DevOps", icon: FaCloud },
                { name: "Data & ML", icon: FaDatabase },
                { name: "E-commerce", icon: FaRocket }
              ].map((service, index) => (
                <li key={index}>
                  <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 group">
                    <service.icon className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                    <span className="text-sm">{service.name}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-xl border border-indigo-500/20">
              <h5 className="text-sm font-semibold text-white mb-2">Need a custom solution?</h5>
              <p className="text-xs text-slate-300 mb-3">
                Let's discuss your project requirements
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                Get Free Quote
                <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Column 4 - Contact & Social */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Quint Tech</div>
                  <div className="text-slate-300 text-sm">Karachi, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <a 
                  href="mailto:quinttechco@gmail.com" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  quinttechco@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <a 
                  href="tel:+922100000000" 
                  className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  +92 21 0000 0000
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
                  { icon: FaTwitter, href: "https://www.twitter.com", label: "Twitter" },
                  { icon: FaGithub, href: "https://www.github.com", label: "GitHub" },
                  { icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
                  { icon: FaYoutube, href: "https://www.youtube.com", label: "YouTube" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Quint Tech on ${social.label}`}
                    className="group p-3 bg-slate-800/50 hover:bg-indigo-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stay Updated with Our Latest Projects
            </h3>
            <p className="text-slate-300 mb-6">
              Get insights, tips, and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} Quint Tech. All rights reserved. Built with ❤️ in Pakistan.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <a href="/sitemap.xml" className="text-slate-400 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
