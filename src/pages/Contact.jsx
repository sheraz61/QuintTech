// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import StatsSection from "../components/StatsSection";

import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaRocket,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaDesktop,
  FaPaintBrush,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaChevronUp,
  FaChevronDown
} from "react-icons/fa";
export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      const offset = 100; // Offset to account for fixed header
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    { value: "web-app", label: "Web Applications", icon: <FaRocket className="w-4 h-4" /> },
    { value: "mobile-app", label: "Mobile Applications", icon: <FaMobileAlt className="w-4 h-4" /> },
    { value: "cloud-devops", label: "Cloud & DevOps", icon: <FaCloud className="w-4 h-4" /> },
    { value: "data-ml", label: "Data & Machine Learning", icon: <FaDatabase className="w-4 h-4" /> },
    { value: "ui-ux", label: "UI/UX Design", icon: <FaPaintBrush className="w-4 h-4" /> },
    { value: "ecommerce", label: "E-commerce Platform", icon: <FaDesktop className="w-4 h-4" /> },
    { value: "consultation", label: "Technical Consultation", icon: <FaLightbulb className="w-4 h-4" /> },
    { value: "other", label: "Other", icon: <FaHandshake className="w-4 h-4" /> }
  ];
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email Us",
      detail: "quinttechco@gmail.com",
      subDetail: "We reply within 2 hours",
      href: "mailto:quinttechco@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Call Us",
      detail: "+92 21 0000 0000",
      subDetail: "Mon-Fri 9AM-6PM PKT",
      href: "tel:+922100000000",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Visit Us",
      detail: "Karachi, Pakistan",
      subDetail: "Remote-first company",
      href: "#",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <FaCalendarAlt className="w-5 h-5" />,
      title: "Book a Call",
      detail: "Schedule Meeting",
      subDetail: "30-min strategy session",
      href: "#",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      text: "Quint Tech delivered our MVP ahead of schedule. Their communication was excellent throughout.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      text: "Professional team with deep technical expertise. Highly recommend for complex projects.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Green Energy Co",
      text: "They transformed our outdated system into a modern, scalable platform. Great ROI.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const faqData = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity. Simple websites take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
      icon: "⏱️"
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans start at $500/month.",
      icon: "🛠️"
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, AWS, and mobile development with React Native. We choose technologies based on your specific project requirements.",
      icon: "💻"
    },
    {
      question: "What's included in your project estimates?",
      answer: "Our estimates include project planning, design, development, testing, deployment, documentation, and post-launch support. We provide detailed breakdowns so you know exactly what you're paying for.",
      icon: "💰"
    }
  ];

  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase pt-12">Get In Touch</h3>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Ready to transform your idea into reality? Get a free consultation and detailed project estimate.
              We respond to all inquiries within 2 hours.
            </p>
          </div>

          {/* Quick Stats */}
           <StatsSection mounted={mounted} />
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* CONTACT FORM */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
                  <p className="text-slate-600">We'd love to hear from you. Tell us about your project.</p>
                </div>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <FaCheckCircle className="w-5 h-5" />
                      <span className="font-medium">Message sent successfully!</span>
                    </div>
                    <p className="text-emerald-700 text-sm mt-1">We'll get back to you within 2 hours.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">

                  {/* Personal Info Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-y"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-indigo-700 hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <FaArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* CONTACT INFO SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                      {/* Gradient Background Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${contact.color.replace('from-', 'from-').replace(' to-', '-50 to-').replace('-500', '-50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Animated Border Glow */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 scale-105`} />

                      {/* Content */}
                      <div className="relative z-10 p-6">
                        <div className="flex items-start gap-4">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                            {contact.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-500">
                              {contact.title}
                            </h4>
                            <p className="text-slate-700 group-hover:text-slate-600 transition-colors duration-500 mt-1">{contact.detail}</p>
                            <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-500 mt-1">{contact.subDetail}</p>
                          </div>
                        </div>

                        {/* Pulse Animation for Active Cards */}
                        <div className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-r ${contact.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                          <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-full animate-ping`} />
                        </div>

                        {/* Bottom Accent Line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${contact.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="group relative overflow-hidden bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 p-6">
                  {/* Gradient Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 scale-105" />

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-500 mb-4 text-center">Follow Us</h4>
                    <div className="flex gap-3 items-center justify-center">
                      {[
                        { icon: <FaLinkedin className="w-5 h-5" />, href: "#", color: "from-blue-500 to-blue-600", bgColor: "from-blue-50 to-blue-100" },
                        { icon: <FaTwitter className="w-5 h-5" />, href: "#", color: "from-sky-400 to-sky-500", bgColor: "from-sky-50 to-sky-100" },
                        { icon: <FaGithub className="w-5 h-5" />, href: "#", color: "from-slate-600 to-slate-800", bgColor: "from-slate-50 to-slate-100" }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/social relative overflow-hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 transition-all duration-500 hover:scale-110 hover:text-white ${social.color.replace('from-', 'hover:from-').replace(' to-', ' hover:to-')}`}
                        >
                          {/* Social Icon Background */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`} />
                          <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`} />
                          {/* Icon */}
                          <div className="relative z-10 group-hover/social:text-white transition-colors duration-300">
                            {social.icon}
                          </div>

                          {/* Pulse Animation */}
                          <div className={`absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-r ${social.color} rounded-full opacity-0 group-hover/social:opacity-100 transition-opacity duration-500`}>
                            <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full animate-ping`} />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      {/* <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Client Testimonials</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <FaQuoteLeft className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 text-sm leading-relaxed">{testimonial.text}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">FAQ</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                  openFaq === index ? 'ring-2 ring-indigo-500/20' : ''
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Gradient Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 scale-105" />

                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="relative z-10 w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-indigo-50/80 hover:to-violet-50/80 transition-all duration-500"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="md:text-lg text-md font-bold text-slate-900 group-hover:text-indigo-700 transition-colors duration-500">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openFaq === index 
                        ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg transform rotate-180' 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-violet-500 group-hover:text-white group-hover:scale-110'
                    }`}>
                      {openFaq === index ? (
                        <FaChevronUp className="w-5 h-5" />
                      ) : (
                        <FaChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Animated Answer Section */}
                <div className={`relative z-10 overflow-hidden transition-all duration-700 ease-in-out ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8">
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-slate-600 leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>

                {/* Pulse Animation for Active FAQ */}
                <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  openFaq === index ? 'opacity-100' : ''
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full animate-ping`} />
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-violet-500 transform transition-all duration-700 ${
                  openFaq === index ? 'scale-x-100' : 'scale-x-0'
                } origin-left`} />
              </div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <div className="mt-12 text-center  ">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8  mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                <FaLightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-slate-600 mb-6">
                Can't find what you're looking for? Our team is here to help with any questions about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}