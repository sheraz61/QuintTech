// src/pages/Services.jsx
import React, { useState, useEffect } from "react";
import MainServicesCard from "../components/MainServicesCard";
import AdditionalServicesCard from "../components/AdditionalServicesCard";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaDesktop,
  FaPaintBrush,
  FaShieldAlt,
  FaCog,
  FaChartLine,
  FaCode,
  FaRobot,
  FaSearch,
  FaServer,
  FaChartBar

} from "react-icons/fa";

export default function Services() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Main service categories
  const mainServices = [
    {
      id: 1,
      title: "Web Applications",
      desc: "Full-stack web apps with MERN, Next.js, and modern frameworks. From MVPs to enterprise solutions.",
      icon: <FaRocket className="w-6 h-6" />,
      from: "#6366f1",
      to: "#8b5cf6",
      category: "development",
      features: ["React/Next.js", "Node.js APIs", "Database Design", "Authentication"],
  
    },
    {
      id: 2,
      title: "Mobile Applications",
      desc: "Cross-platform mobile apps with React Native and Flutter for iOS and Android.",
      icon: <FaMobileAlt className="w-6 h-6" />,
      from: "#f59e0b",
      to: "#fb923c",
      category: "development",
      features: ["React Native", "Flutter", "App Store Deployment", "Push Notifications"],
     
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      desc: "CI/CD pipelines, infrastructure as code, monitoring, and scalable cloud architecture.",
      icon: <FaCloud className="w-6 h-6" />,
      from: "#06b6d4",
      to: "#0ea5e9",
      category: "infrastructure",
      features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring"],
   
    },
    {
      id: 4,
      title: "Data & Machine Learning",
      desc: "Analytics dashboards, data pipelines, and ML prototypes for actionable insights.",
      icon: <FaDatabase className="w-6 h-6" />,
      from: "#d946ef",
      to: "#fb7185",
      category: "data",
      features: ["Python/R", "ML Models", "Data Visualization", "ETL Pipelines"],
    
    },
    {
      id: 5,
      title: "UI/UX Design",
      desc: "User-centered design, prototyping, and design systems that convert visitors to customers.",
      icon: <FaPaintBrush className="w-6 h-6" />,
      from: "#10b981",
      to: "#14b8a6",
      category: "design",
      features: ["Figma Design", "User Research", "Design Systems", "Prototyping"],
   
    },
    {
      id: 6,
      title: "E-commerce Platforms",
      desc: "Complete e-commerce solutions with payment processing, inventory, and order management.",
      icon: <FaDesktop className="w-6 h-6" />,
      from: "#8b5cf6",
      to: "#a855f7",
      category: "development",
      features: ["Shopify/WooCommerce", "Payment Integration", "Inventory Management", "Analytics"],
    
    },
    {
      id: 7,
      title: "Business Intelligence",
      desc: "Interactive dashboards and BI solutions that transform raw data into decision-ready insights.",
      icon: <FaChartBar className="w-6 h-6" />,
      from: "#06b6d4",
      to: "#3b82f6",
      category: "data",
      features: ["Power BI / Tableau", "KPI Tracking", "Data Warehousing", "Custom Dashboards"],
    },
    
    {
      id: 8,
      title: "Big Data Solutions",
      desc: "Scalable data platforms for processing and analyzing large, complex datasets efficiently.",
      icon: <FaServer className="w-6 h-6" />,
      from: "#10b981",
      to: "#84cc16",
      category: "data",
      features: ["Hadoop / Spark", "Data Lakes", "Streaming Pipelines", "Cloud Data Services"],
    },
    
  ];

  // Additional services
  const additionalServices = [
    {
      title: "Security Audits",
      desc: "Comprehensive security assessment and vulnerability testing.",
      icon: <FaShieldAlt className="w-5 h-5" />,
      category: "security"
    },
    {
      title: "API Development",
      desc: "RESTful and GraphQL APIs with proper documentation.",
      icon: <FaCog className="w-5 h-5" />,
      category: "development"
    },
    {
      title: "SEO Optimization",
      desc: "Technical SEO, performance optimization, and search ranking.",
      icon: <FaSearch className="w-5 h-5" />,
      category: "marketing"
    },
    {
      title: "Analytics & Reporting",
      desc: "Business intelligence dashboards and automated reporting.",
      icon: <FaChartLine className="w-5 h-5" />,
      category: "data"
    },
    {
      title: "Code Reviews",
      desc: "Code quality assessment and best practices implementation.",
      icon: <FaCode className="w-5 h-5" />,
      category: "development"
    },
    {
      title: "AI Integration",
      desc: "ChatGPT, computer vision, and AI-powered features.",
      icon: <FaRobot className="w-5 h-5" />,
      category: "ai"
    }
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "development", label: "Development" },
    { id: "data", label: "Data & AI" }
  ];
const process=[
  { 
    step: "01", 
    title: "Planning", 
    desc: "Define project goals, create architecture blueprints, set timelines, and allocate resources effectively." 
  },
  { 
    step: "02", 
    title: "Development", 
    desc: "Agile development with sprint-based progress, regular updates, and client feedback integration." 
  },
  { 
    step: "03", 
    title: "Quality Assurance", 
    desc: "Comprehensive testing for functionality, performance, and security to ensure a reliable product." 
  },
  { 
    step: "04",
    title: "Launch & Support", 
    desc: "Smooth deployment, knowledge transfer, and ongoing support for scaling and improvements." 
}
]
  const filteredServices = activeCategory === "all"
    ? mainServices
    : mainServices.filter(service => service.category === activeCategory);

  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase pt-12">Our Services</h3>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Technology Solutions That Scale
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              From concept to deployment, we build robust, scalable solutions that help businesses grow.
              Expert engineering, thoughtful design, and measurable results.
            </p>
          </div>

          {/* Service Categories Filter */}
          <div className={`mt-8 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SERVICES GRID */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((s, i) => (
              <MainServicesCard
              key={s.id}
              serviceId={s.id}
              from={s.from}
              to={s.to}
              icon={s.icon}
              tDelay={i * 100}
              title={s.title}
              desc={s.desc}
              features={s.features}
               />
              ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Additional Services</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Specialized Solutions
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Complementary services to enhance your core product and ensure long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s, i) => (
              <AdditionalServicesCard
              key={i}
              serviceId={i}
              tDelay={i*80}
              icon={s.icon}
              title={s.title}
              desc={s.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Our Process</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-transparent -translate-x-8" />
                  )}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{phase.title}</h4>
                <p className="text-sm text-slate-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-indigo-50 to-violet-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Ready to Start Your Project?</h3>
          <p className="mt-3 text-slate-600">
            Let's discuss your requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="inline-block px-8 py-4 rounded-lg border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}