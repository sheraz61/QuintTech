import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { FaRocket, FaMobileAlt, FaCloud, FaDatabase } from "react-icons/fa";

// Service data
 const services = [
    {
      id: 1,
      title: "Web Applications",
      desc: "MERN & Next.js apps — fast, accessible and SEO-friendly.",
      icon: <FaRocket className="w-5 h-5" />,
      from: "#6366f1", // indigo-500
      to: "#8b5cf6",   // violet-500
    },
    {
      id: 2,
      title: "Mobile Apps",
      desc: "Cross-platform apps with native feel and performance.",
      icon: <FaMobileAlt className="w-5 h-5" />,
      from: "#f59e0b", // amber-500
      to: "#fb923c",   // orange-400
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      desc: "CI/CD, IaC, monitoring and scalable cloud architecture.",
      icon: <FaCloud className="w-5 h-5" />,
      from: "#06b6d4", // cyan-500
      to: "#0ea5e9",   // sky-500
    },
    {
      id: 4,
      title: "Data & ML",
      desc: "Analytics, pipelines and ML prototypes for quick wins.",
      icon: <FaDatabase className="w-5 h-5" />,
      from: "#d946ef", // fuchsia-500
      to: "#fb7185",   // rose-400
    },
  ];

// Main Services Section with continuous scrolling
export default function ServicesSection() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const positionRef = useRef(0);
  const animationIdRef = useRef(null);
  
  // Duplicate services for seamless looping
  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= 0.5;
        
        // Reset position when scrolled halfway through duplicated content
        if (positionRef.current < -container.scrollWidth / 2) {
          positionRef.current = 0;
        }
        
        container.style.transform = `translateX(${positionRef.current}px)`;
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isPaused]);

  // Function to get the current visible card index
  const getCurrentCardIndex = () => {
    if (!containerRef.current) return 0;
    
    const cardWidth = 320; // Approximate card width with margin
    const scrollPosition = Math.abs(positionRef.current);
    const currentIndex = Math.floor(scrollPosition / cardWidth) % services.length;
    
    return currentIndex;
  };

  // When user hovers, pause and remember position
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // When user leaves, resume from the same position
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section 
      className="py-12 md:py-16 bg-slate-50 overflow-hidden"
     
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm text-indigo-600 font-semibold">What we do</h3>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              Our Services
            </h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Engineering, design and data solutions to help businesses grow.
            </p>
          </div>

          <div className="ml-auto">
            <Link
              to="/service"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:bg-slate-100 transition"
            >
              See all services <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scrolling container */}
        <div className="relative overflow-hidden py-4" 
         onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={containerRef}
            className="flex w-max"
            style={{ willChange: 'transform' }}
          >
            {duplicatedServices.map((s, i) => (
              <div key={`${s.id}-${i}`} className="w-80 mx-3">
                <ServiceCard
                  id={s.id}
                  title={s.title}
                  desc={s.desc}
                  icon={s.icon}
                  from={s.from}
                  to={s.to}
                  delay={i * 60}
                  isPaused={isPaused}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicator to show which card is in focus (optional) */}
        <div className="mt-6 flex justify-center space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === getCurrentCardIndex() ? 'bg-indigo-600 scale-125' : 'bg-slate-300'
              }`}
              aria-label={`Service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}