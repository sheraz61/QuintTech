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
    budget: "",
    timeline: "",
    message: "",
    projectType: "new"
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
        budget: "",
        timeline: "",
        message: "",
        projectType: "new"
      });
    }, 2000);
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

  const budgetRanges = [
    { value: "5k-15k", label: "$5K - $15K" },
    { value: "15k-30k", label: "$15K - $30K" },
    { value: "30k-50k", label: "$30K - $50K" },
    { value: "50k+", label: "$50K+" },
    { value: "discuss", label: "Let's discuss" }
  ];

  const timelines = [
    { value: "urgent", label: "ASAP (Rush project)" },
    { value: "1-2months", label: "1-2 months" },
    { value: "3-4months", label: "3-4 months" },
    { value: "6months+", label: "6+ months" },
    { value: "flexible", label: "Flexible timeline" }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email Us",
      detail: "hello@quinttech.com",
      subDetail: "We reply within 2 hours",
      href: "mailto:hello@quinttech.com",
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

  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">Get In Touch</h3>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Tell Us About Your Project</h2>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you with a detailed proposal.</p>
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Type Toggle */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Project Type</label>
                    <div className="flex gap-4">
                      {[
                        { value: "new", label: "New Project" },
                        { value: "existing", label: "Existing Project" },
                        { value: "consultation", label: "Consultation" }
                      ].map((type) => (
                        <label key={type.value} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="projectType"
                            value={type.value}
                            checked={formData.projectType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`px-4 py-2 rounded-lg border-2 transition-all ${
                            formData.projectType === type.value
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                              : 'border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}>
                            {type.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

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

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      >
                        <option value="">Select budget range...</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      >
                        <option value="">Select timeline...</option>
                        {timelines.map((timeline) => (
                          <option key={timeline.value} value={timeline.value}>
                            {timeline.label}
                          </option>
                        ))}
                      </select>
                    </div>
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
                      placeholder="Please describe your project requirements, goals, and any specific features you need..."
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
                      className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors duration-300">
                            {contact.title}
                          </h4>
                          <p className="text-slate-700 mt-1">{contact.detail}</p>
                          <p className="text-xs text-slate-500 mt-1">{contact.subDetail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h4 className="font-semibold text-slate-900 mb-4 text-center">Follow Us</h4>
                  <div className="flex gap-3 items-center justify-center">
                    {[
                      { icon: <FaLinkedin className="w-5 h-5" />, href: "#", color: "hover:bg-blue-600" },
                      { icon: <FaTwitter className="w-5 h-5" />, href: "#", color: "hover:bg-sky-500" },
                      { icon: <FaGithub className="w-5 h-5" />, href: "#", color: "hover:bg-slate-800" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-600 transition-all duration-300 hover:scale-110 hover:text-white ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-indigo-50/30">
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
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-sm text-indigo-600 font-semibold tracking-wider uppercase">FAQ</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 bg-gradient-to-r from-indigo-900 to-slate-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to complete a project?",
                answer: "Project timelines vary depending on complexity. Simple websites take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes! We offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans start at $500/month."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, AWS, and mobile development with React Native. We choose technologies based on your specific project requirements."
              },
              {
                question: "Can you work with our existing development team?",
                answer: "Absolutely! We often collaborate with in-house teams, providing specialized expertise, code reviews, mentoring, or handling specific components of larger projects."
              },
              {
                question: "What's included in your project estimates?",
                answer: "Our estimates include project planning, design, development, testing, deployment, documentation, and post-launch support. We provide detailed breakdowns so you know exactly what you're paying for."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <FaChevronUp className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <FaChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-indigo-50 to-violet-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Still Have Questions?</h3>
          <p className="mt-3 text-slate-600">
            Schedule a free 30-minute consultation to discuss your project requirements and get expert advice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="#"
              className="inline-block px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="inline-block px-8 py-4 rounded-lg border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}