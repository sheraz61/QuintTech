// src/pages/Portfolio.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carImage from './../../public/car.jpg';
import Data from './../../public/Data.jpg';
import Devops from './../../public/DevOps.jpg';
import Ecommerce from './../../public/Ecommerce.jpg';
import MobileApp from './../../public/Mobile app.jpg';
import Ui from './../../public/UI.jpg';
import {
  FaRocket,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaDesktop,
  FaPaintBrush,
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaCalendarAlt,
  FaUsers,
  FaCode,
  FaSearch,
  FaFilter,
  FaTimes,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Dummy project data based on your services
  const projects = [
    {
      id: 1,
      title: "AutoTrade Marketplace",
      category: "web-app",
      service: "Web Applications",
      desc: "Complete automotive marketplace with advanced search, seller dashboard, and integrated payment system.",
      longDesc: "A comprehensive B2B automotive marketplace that connects car dealers with potential buyers. Features include advanced filtering, real-time chat, payment processing, and detailed analytics dashboard.",
      image: `${carImage}`,
      images: [`${carImage}`, `${carImage}`, `${carImage}`],
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      client: "AutoTrade Inc.",
      duration: "4 months",
      year: "2024",
      status: "Live",
      url: "https://autotrade-demo.com",
      github: "https://github.com/quinttech/autotrade",
      results: [
        "300% increase in user engagement",
        "50% faster search performance",
        "$2M+ in transactions processed"
      ],
      features: [
        "Advanced vehicle search & filtering",
        "Real-time messaging system",
        "Integrated payment processing",
        "Seller dashboard & analytics",
        "Mobile-responsive design"
      ],
      testimonial: {
        text: "Quint Tech delivered beyond our expectations. The platform is robust, user-friendly, and has significantly improved our business operations.",
        author: "John Smith, CEO AutoTrade Inc."
      }
    },
    {
      id: 2,
      title: "EduLearn Mobile App",
      category: "mobile-app",
      service: "Mobile Applications",
      desc: "Cross-platform learning app with offline content, progress tracking, and interactive quizzes.",
      longDesc: "An innovative educational mobile app that provides personalized learning experiences with AI-powered content recommendations and comprehensive progress tracking.",
      image: `${MobileApp}`,
      images: [`${MobileApp}`,`${MobileApp}`,`${MobileApp}`],
      tech: ["React Native", "Redux", "Node.js", "PostgreSQL", "Firebase"],
      client: "EduLearn Solutions",
      duration: "6 months",
      year: "2024",
      status: "Live",
      url: "https://edulearn-app.com",
      github: "https://github.com/quinttech/edulearn",
      results: [
        "50K+ active users",
        "4.8★ app store rating",
        "85% course completion rate"
      ],
      features: [
        "Offline content access",
        "Progress tracking & analytics",
        "Interactive quizzes & assignments",
        "Social learning features",
        "Multi-language support"
      ],
      testimonial: {
        text: "The app has transformed how our students learn. The offline functionality and progress tracking are game-changers.",
        author: "Sarah Johnson, Head of Product"
      }
    },
    {
      id: 3,
      title: "CloudOps Infrastructure",
      category: "cloud-devops",
      service: "Cloud & DevOps",
      desc: "Scalable cloud infrastructure with automated deployments, monitoring, and disaster recovery.",
      longDesc: "Enterprise-grade cloud infrastructure solution with automated CI/CD pipelines, comprehensive monitoring, and robust disaster recovery mechanisms.",
      image: `${Devops}`,
      images: [`${Devops}`,`${Devops}`,`${Devops}`],
      tech: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"],
      client: "TechCorp Enterprise",
      duration: "3 months",
      year: "2024",
      status: "Live",
      url: "https://techcorp-infrastructure.com",
      github: "https://github.com/quinttech/cloudops",
      results: [
        "99.9% uptime achieved",
        "60% cost reduction",
        "10x faster deployments"
      ],
      features: [
        "Auto-scaling infrastructure",
        "CI/CD pipeline automation",
        "Real-time monitoring & alerts",
        "Disaster recovery setup",
        "Security compliance (SOC2)"
      ],
      testimonial: {
        text: "Our deployment process is now seamless and our infrastructure costs have dropped significantly while improving reliability.",
        author: "Michael Chen, CTO TechCorp"
      }
    },
    {
      id: 4,
      title: "DataViz Analytics Platform",
      category: "data-ml",
      service: "Data & Machine Learning",
      desc: "Real-time analytics dashboard with ML-powered insights and predictive analytics.",
      longDesc: "Advanced data analytics platform that processes millions of data points to provide actionable business insights using machine learning algorithms.",
      image: `${Data}`,
      images: [`${Data}`,`${Data}`,`${Data}`],
      tech: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
      client: "DataFlow Analytics",
      duration: "5 months",
      year: "2024",
      status: "Live",
      url: "https://dataviz-platform.com",
      github: "https://github.com/quinttech/dataviz",
      results: [
        "40% improvement in decision accuracy",
        "Real-time processing of 1M+ events",
        "25% increase in revenue"
      ],
      features: [
        "Real-time data visualization",
        "Predictive analytics with ML",
        "Custom dashboard builder",
        "Automated report generation",
        "API for third-party integrations"
      ],
      testimonial: {
        text: "The insights we get from this platform have revolutionized our business strategy and decision-making process.",
        author: "Emily Rodriguez, VP Analytics"
      }
    },
    {
      id: 5,
      title: "DesignStudio Portfolio",
      category: "ui-ux",
      service: "UI/UX Design",
      desc: "Modern portfolio website with interactive animations and mobile-first design.",
      longDesc: "A stunning portfolio website for a creative agency featuring cutting-edge animations, smooth transitions, and an intuitive user experience.",
      image: `${Ui}`,
      images: [`${Ui}`,`${Ui}`,`${Ui}`],
      tech: ["Figma", "React", "Framer Motion", "Tailwind CSS", "Netlify"],
      client: "Creative Studio Agency",
      duration: "2 months",
      year: "2024",
      status: "Live",
      url: "https://designstudio-portfolio.com",
      github: "https://github.com/quinttech/designstudio",
      results: [
        "200% increase in client inquiries",
        "90+ Google PageSpeed score",
        "Featured on design showcases"
      ],
      features: [
        "Interactive portfolio showcase",
        "Smooth scroll animations",
        "Mobile-first responsive design",
        "Contact form with validation",
        "SEO optimized"
      ],
      testimonial: {
        text: "Our new website perfectly represents our brand and has significantly increased our client inquiries.",
        author: "Alex Thompson, Creative Director"
      }
    },
    {
      id: 6,
      title: "ShopEasy E-commerce",
      category: "ecommerce",
      service: "E-commerce Platform",
      desc: "Complete e-commerce solution with inventory management, payment processing, and admin dashboard.",
      longDesc: "Full-featured e-commerce platform with advanced inventory management, multi-payment gateway integration, and comprehensive analytics.",
      image: `${Ecommerce}`,
      images: [`${Ecommerce}`,`${Ecommerce}`,`${Ecommerce}`],
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Vercel"],
      client: "ShopEasy Retail",
      duration: "4 months",
      year: "2024",
      status: "Live",
      url: "https://shopeasy-store.com",
      github: "https://github.com/quinttech/shopeasy",
      results: [
        "$500K+ in sales generated",
        "45% improvement in conversion",
        "99.8% uptime maintained"
      ],
      features: [
        "Multi-vendor marketplace",
        "Advanced search & filtering",
        "Inventory management system",
        "Multiple payment gateways",
        "Order tracking & notifications"
      ],
      testimonial: {
        text: "The platform has exceeded our expectations. Sales have increased dramatically and the system is incredibly reliable.",
        author: "David Wilson, CEO ShopEasy"
      }
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web-app", label: "Web Apps", count: projects.filter(p => p.category === "web-app").length },
    { id: "mobile-app", label: "Mobile Apps", count: projects.filter(p => p.category === "mobile-app").length },
    { id: "cloud-devops", label: "Cloud & DevOps", count: projects.filter(p => p.category === "cloud-devops").length },
    { id: "data-ml", label: "Data & ML", count: projects.filter(p => p.category === "data-ml").length },
    { id: "ui-ux", label: "UI/UX Design", count: projects.filter(p => p.category === "ui-ux").length },
    { id: "ecommerce", label: "E-commerce", count: projects.filter(p => p.category === "ecommerce").length }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    const icons = {
      "web-app": <FaRocket className="w-4 h-4" />,
      "mobile-app": <FaMobileAlt className="w-4 h-4" />,
      "cloud-devops": <FaCloud className="w-4 h-4" />,
      "data-ml": <FaDatabase className="w-4 h-4" />,
      "ui-ux": <FaPaintBrush className="w-4 h-4" />,
      "ecommerce": <FaDesktop className="w-4 h-4" />
    };
    return icons[category];
  };

  const getCategoryColor = (category) => {
    const colors = {
      "web-app": "from-indigo-500 to-violet-500",
      "mobile-app": "from-amber-500 to-orange-500",
      "cloud-devops": "from-cyan-500 to-blue-500",
      "data-ml": "from-fuchsia-500 to-pink-500",
      "ui-ux": "from-emerald-500 to-teal-500",
      "ecommerce": "from-purple-500 to-violet-500"
    };
    return colors[category] || "from-slate-500 to-slate-600";
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Our Work</h3>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Projects That Make Impact
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Discover our latest work across web applications, mobile apps, cloud infrastructure,
              and data analytics. Real projects with measurable results.
            </p>
          </div>

          {/* Stats */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { number: "50+", label: "Projects Completed", icon: "🚀" },
              { number: "25+", label: "Happy Clients", icon: "😊" },
              { number: "15+", label: "Industries Served", icon: "🏢" },
              { number: "98%", label: "Success Rate", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-indigo-600 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Featured Projects</h2>
              <p className="text-slate-600 text-sm mt-1">Filter by category to explore specific solutions</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-600">
              <FaFilter className="w-4 h-4" />
              <span>Filter:</span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                }`}
              >
                {category.id !== "all" && getCategoryIcon(category.id)}
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilter === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openProjectModal(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-800`}>
                          {getCategoryIcon(project.category)}
                          {project.service}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/90 text-white">
                          {project.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                          <FaEye className="w-4 h-4" />
                        </button>
                        {project.url && (
                          <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                            <FaExternalLinkAlt className="w-4 h-4" />
                          </button>
                        )}
                        {project.github && (
                          <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                            <FaGithub className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-slate-800">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{project.client}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} flex items-center justify-center text-white shadow-md transform transition-transform duration-300 group-hover:scale-110`}>
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        {project.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors">
                      View Details
                      <FaArrowRight className="w-3 h-3 transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
              <p className="text-slate-600 mb-6">Try selecting a different category or view all projects.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
                <p className="text-slate-600">{selectedProject.client}</p>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Gallery */}
              <div className="relative mb-6">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    >
                      <FaChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    >
                      <FaChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Project Overview</h3>
                    <p className="text-slate-600 leading-relaxed">{selectedProject.longDesc}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Results Achieved</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                          <div className="text-lg font-bold text-emerald-700 mb-1">{result.split(' ')[0]}</div>
                          <div className="text-sm text-emerald-600">{result.split(' ').slice(1).join(' ')}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {selectedProject.testimonial && (
                    <div className="p-6 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl border border-indigo-100">
                      <blockquote className="text-slate-700 italic mb-4">
                        "{selectedProject.testimonial.text}"
                      </blockquote>
                      <footer className="text-sm font-medium text-indigo-700">
                        — {selectedProject.testimonial.author}
                      </footer>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Project Details */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Client:</span>
                        <span className="text-sm font-medium text-slate-900">{selectedProject.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Duration:</span>
                        <span className="text-sm font-medium text-slate-900">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Year:</span>
                        <span className="text-sm font-medium text-slate-900">{selectedProject.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Status:</span>
                        <span className="text-sm font-medium text-emerald-600">{selectedProject.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-600">Service:</span>
                        <span className="text-sm font-medium text-slate-900">{selectedProject.service}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm font-medium bg-white border border-slate-200 text-slate-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        View Live Site
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <FaUsers className="w-4 h-4" />
                      Start Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALL TO ACTION */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-indigo-50 to-violet-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join our satisfied clients and let's build something amazing together.
              Every project starts with a conversation about your goals.
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: "💡", title: "Free Consultation", desc: "30-min strategy session" },
              { icon: "⚡", title: "Quick Turnaround", desc: "Project starts in 1 week" },
              { icon: "🎯", title: "Results Guaranteed", desc: "100% satisfaction promise" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-2">{benefit.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/service"
              className="inline-block px-8 py-4 rounded-lg border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Trusted by companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* You can replace these with actual client logos */}
              <div className="text-slate-400 font-semibold text-sm">AutoTrade Inc.</div>
              <div className="text-slate-400 font-semibold text-sm">EduLearn Solutions</div>
              <div className="text-slate-400 font-semibold text-sm">TechCorp Enterprise</div>
              <div className="text-slate-400 font-semibold text-sm">DataFlow Analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="py-12 md:py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Learn More</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Explore Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Our Services",
                desc: "Comprehensive development and design services tailored to your needs.",
                link: "/service",
                icon: <FaCode className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "How We Work",
                desc: "Learn about our proven process from discovery to deployment.",
                link: "/about",
                icon: <FaUsers className="w-6 h-6" />,
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Get In Touch",
                desc: "Ready to discuss your project? Let's start the conversation.",
                link: "/contact",
                icon: <FaRocket className="w-6 h-6" />,
                color: "from-violet-500 to-purple-500"
              }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group p-6 bg-white rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors duration-300 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                <div className="flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                  Learn more
                  <FaArrowRight className="w-3 h-3 ml-2 transform transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}