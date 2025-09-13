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

  const companyStats = [
    { number: "2021", label: "Founded", icon: "🚀" },
    { number: "50+", label: "Projects Completed", icon: "💼" },
    { number: "25+", label: "Happy Clients", icon: "😊" },
    { number: "4.9", label: "Client Rating", icon: "⭐" }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Company Founded",
      desc: "Alex and Sarah joined forces to create Quint Tech with a mission to build better software.",
      milestone: "🚀"
    },
    {
      year: "2022",
      title: "First Major Client",
      desc: "Landed our first enterprise client and delivered a complete e-commerce platform.",
      milestone: "🎯"
    },
    {
      year: "2023",
      title: "Team Expansion",
      desc: "Grew to a team of 8 specialists covering all aspects of modern software development.",
      milestone: "👥"
    },
    {
      year: "2024",
      title: "Industry Recognition",
      desc: "Awarded 'Best Development Agency' by TechReview and featured in major publications.",
      milestone: "🏆"
    }
  ];

  const clientTestimonials = [
    {
      name: "David Wilson",
      company: "ShopEasy Retail",
      role: "CEO",
      text: "Quint Tech transformed our business with their e-commerce platform. Sales increased by 300% in the first quarter.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Lisa Park",
      company: "HealthTech Solutions",
      role: "CTO",
      text: "Their expertise in cloud architecture saved us thousands in infrastructure costs while improving performance.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Robert Kim",
      company: "StartupLab",
      role: "Founder",
      text: "From MVP to scale, Quint Tech has been our trusted technology partner every step of the way.",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ];

  const certifications = [
    "AWS Solutions Architect",
    "Google Cloud Professional",
    "Certified Kubernetes Administrator",
    "Microsoft Azure Expert",
    "Salesforce Certified",
    "MongoDB Professional"
  ];

  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">About Quint Tech</h3>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Building the Future, One Project at a Time
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              We're a passionate team of engineers, designers, and strategists who believe that great technology
              should solve real problems and create meaningful impact for businesses and users alike.
            </p>
          </div>

          {/* Company Stats */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                className={`group relative p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  activeValue === index ? 'ring-2 ring-indigo-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveValue(index)}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    {value.icon}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-500">
                    {value.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
                    {value.desc}
                  </p>
                </div>

                {/* Active Indicator */}
                {activeValue === index && (
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-b-2xl overflow-hidden`} />
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Our Team</h3>
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

      {/* TIMELINE SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Our Journey</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Milestones That Shaped Us
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-violet-500 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className="relative flex items-center gap-6"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xl shadow-lg relative z-10">
                    {event.milestone}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="md:hidden w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white">
                        {event.milestone}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-indigo-600">{event.year}</div>
                        <h4 className="text-lg font-bold text-slate-900">{event.title}</h4>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Client Testimonials</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-4">
                  <FaQuoteLeft className="w-5 h-5 text-indigo-400 mb-2" />
                  <p className="text-slate-700 leading-relaxed">{testimonial.text}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & ACHIEVEMENTS */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Certifications & Achievements</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Recognized Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white">
                  <FaCheckCircle className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-900">{cert}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm">
              Our team holds industry-leading certifications and continues to stay updated with the latest technologies.
            </p>
          </div>
        </div>
      </section>

</main>
);
}