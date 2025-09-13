// src/pages/About.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaCogs,
  FaHeart,
  FaStar,
  FaQuoteLeft,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCode,
  FaPaintBrush,
  FaDatabase,
  FaCloud,
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaGraduationCap,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaClock,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import Testimonials from "../components/Testimonials";

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Auto-rotate values every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const companyValues = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Innovation First",
      desc: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Quality Driven",
      desc: "Every line of code, every design pixel, and every user interaction is crafted with precision.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Client Success",
      desc: "Your success is our success. We're not just vendors; we're your technology partners.",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "People First",
      desc: "Technology serves people. Every solution we build prioritizes human experience and accessibility.",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      specialty: "Full-Stack Development",
      image: "/api/placeholder/300/300",
      bio: "10+ years building scalable web applications. Led development teams at Fortune 500 companies before founding Quint Tech.",
      skills: ["React", "Node.js", "AWS", "Team Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/alex-rodriguez",
        github: "https://github.com/alex-rodriguez",
        twitter: "https://twitter.com/alex_codes"
      },
      achievements: [
        "AWS Solutions Architect Certified",
        "Led 50+ successful projects",
        "Speaker at React Conference 2023"
      ]
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO & Co-founder",
      specialty: "Cloud Architecture",
      image: "/api/placeholder/300/300",
      bio: "Expert in cloud infrastructure and DevOps. Former Senior Engineer at Google with a passion for scalable systems.",
      skills: ["AWS", "Kubernetes", "DevOps", "System Design"],
      social: {
        linkedin: "https://linkedin.com/in/sarah-chen",
        github: "https://github.com/sarah-chen",
        twitter: "https://twitter.com/sarah_cloud"
      },
      achievements: [
        "Google Cloud Professional Architect",
        "Optimized systems serving 1M+ users",
        "Open source contributor (5K+ stars)"
      ]
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Lead Designer",
      specialty: "UI/UX Design",
      image: "/api/placeholder/300/300",
      bio: "Creative problem solver with 8+ years in design. Specializes in user-centered design and design systems.",
      skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
      social: {
        linkedin: "https://linkedin.com/in/michael-johnson-design",
        github: "https://github.com/michael-design",
        twitter: "https://twitter.com/mike_designs"
      },
      achievements: [
        "Dribbble Top Designer 2023",
        "Designed for 100+ brands",
        "UX certification from Nielsen Norman"
      ]
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "Data Scientist",
      specialty: "AI & Machine Learning",
      image: "/api/placeholder/300/300",
      bio: "PhD in Computer Science with focus on ML. Transforms complex data into actionable business insights.",
      skills: ["Python", "TensorFlow", "Data Analysis", "AI Strategy"],
      social: {
        linkedin: "https://linkedin.com/in/emily-watson-data",
        github: "https://github.com/emily-watson",
        twitter: "https://twitter.com/emily_ai"
      },
      achievements: [
        "PhD in Computer Science - MIT",
        "Published 15 research papers",
        "Built ML models with 95%+ accuracy"
      ]
    }
  ];
  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full text-indigo-600 font-semibold text-sm tracking-wider uppercase shadow-sm mb-6 ">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              About Quint Tech
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 via-violet-900 to-slate-900 bg-clip-text text-transparent leading-tight mb-6">
              Building the Future,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                One Project at a Time
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We're a passionate team of engineers, designers, and strategists who believe that great technology
              should solve real problems and create meaningful impact for businesses and users alike.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">12+</div>
                <div className="text-sm text-slate-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-1">5+</div>
                <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">4.9</div>
                <div className="text-sm text-slate-600 font-medium">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">2024</div>
                <div className="text-sm text-slate-600 font-medium">Founded</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Our Work
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-700 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                Start a Project
                <FaRocket className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden lg:block">
            <div className="space-y-4">
              {[
                { icon: <FaCode className="w-6 h-6" />, color: "from-blue-500 to-cyan-500", delay: "0s" },
                { icon: <FaPaintBrush className="w-6 h-6" />, color: "from-emerald-500 to-teal-500", delay: "0.5s" },
                { icon: <FaDatabase className="w-6 h-6" />, color: "from-amber-500 to-orange-500", delay: "1s" },
                { icon: <FaCloud className="w-6 h-6" />, color: "from-violet-500 to-purple-500", delay: "1.5s" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 animate-pulse`}
                  style={{ animationDelay: item.delay }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
            <div className="space-y-4">
              {[
                { icon: <FaRocket className="w-6 h-6" />, color: "from-rose-500 to-pink-500", delay: "0.2s" },
                { icon: <FaShieldAlt className="w-6 h-6" />, color: "from-indigo-500 to-blue-500", delay: "0.7s" },
                { icon: <FaUsers className="w-6 h-6" />, color: "from-green-500 to-emerald-500", delay: "1.2s" },
                { icon: <FaHeart className="w-6 h-6" />, color: "from-red-500 to-rose-500", delay: "1.7s" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 animate-pulse`}
                  style={{ animationDelay: item.delay }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm  text-indigo-600 font-semibold tracking-wider uppercase">Our Team</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Meet the People Behind the Code
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We're a diverse team of experts who share a passion for creating exceptional software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay with Social Links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {platform === 'linkedin' && <FaLinkedin className="w-4 h-4" />}
                          {platform === 'github' && <FaGithub className="w-4 h-4" />}
                          {platform === 'twitter' && <FaTwitter className="w-4 h-4" />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-indigo-600 font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-slate-500 text-xs mb-4">{member.specialty}</p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Key Achievement */}
                  <div className="flex items-start gap-2">
                    <FaAward className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.achievements[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-full border border-indigo-100">
              <FaUsers className="w-5 h-5 text-indigo-600" />
              <span className="text-slate-700 font-medium">We're always looking for talented people to join our team</span>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION */}

      {/* OUR STORY SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div>
              <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Our Story</h3>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
                Born from a Vision to Do Better
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Quint Tech was founded in 2021 when two senior engineers, Alex and Sarah, realized that too many
                  software projects were failing not because of technical challenges, but because of poor communication,
                  unrealistic timelines, and a lack of genuine partnership between clients and development teams.
                </p>
                <p>
                  We set out to change that by building a company that puts client success first, maintains transparent
                  communication throughout every project, and delivers solutions that actually solve real business problems
                  rather than just checking technical boxes.
                </p>
                <p>
                  Today, we're proud to be the trusted technology partner for startups and established companies alike,
                  helping them navigate the complex world of modern software development with confidence and clarity.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  View Our Work <FaArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* Story Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 p-8 flex items-center justify-center">
                {/* Animated Elements */}
                <div className="relative w-full h-full">
                  {/* Central Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                    <FaRocket className="w-8 h-8" />
                  </div>

                  {/* Orbiting Icons */}
                  {[
                    { icon: <FaCode className="w-6 h-6" />, color: "from-blue-500 to-cyan-500", delay: 0 },
                    { icon: <FaPaintBrush className="w-6 h-6" />, color: "from-emerald-500 to-teal-500", delay: 1 },
                    { icon: <FaDatabase className="w-6 h-6" />, color: "from-amber-500 to-orange-500", delay: 2 },
                    { icon: <FaCloud className="w-6 h-6" />, color: "from-violet-500 to-purple-500", delay: 3 }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`absolute w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg animate-pulse`}
                      style={{
                        top: `${25 + 25 * Math.sin((index * Math.PI) / 2)}%`,
                        left: `${25 + 25 * Math.cos((index * Math.PI) / 2)}%`,
                        animationDelay: `${item.delay}s`
                      }}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Our Values</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              What Drives Us Every Day
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Our core values aren't just words on a wall—they guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                  activeValue === index ? 'ring-2 ring-indigo-500/50 shadow-lg' : ''
                }`}
                onClick={() => setActiveValue(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 scale-105`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    {value.icon}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-500">
                    {value.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
                    {value.desc}
                  </p>
                </div>

                {/* Pulse Animation for Active Values */}
                <div className={`absolute top-3 right-3 w-2 h-2 bg-gradient-to-r ${value.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  activeValue === index ? 'opacity-100' : ''
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-full animate-ping`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}