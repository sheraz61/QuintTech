// Improved Stats Section with animations and enhanced styling
import React, { useState, useEffect, useRef } from 'react';

const StatsSection = ({ mounted }) => {
  const [animatedStats, setAnimatedStats] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Counter animation function
  const animateNumber = (target, key) => {
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setAnimatedStats(prev => ({
        ...prev,
        [key]: Math.floor(current)
      }));
    }, 16);
  };

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start counter animations
          stats.forEach((stat, index) => {
            setTimeout(() => {
              if (stat.animated) {
                animateNumber(stat.number, index);
              }
            }, index * 200); // Stagger animations
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const stats = [
    {
      number: 50,
      suffix: "+",
      label: "Projects Delivered",
      icon: "🚀",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      animated: true,
      description: "Successfully completed"
    },
    {
      number: 2,
      suffix: "hrs",
      label: "Average Response",
      icon: "⚡",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      animated: true,
      description: "Lightning fast replies"
    },
    {
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      icon: "⭐",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
      animated: true,
      description: "Happy clients rate"
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support Available",
      icon: "🛡️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      animated: true,
      description: "Round-the-clock help"
    }
  ];

  return (
    <div
      ref={statsRef}
      className={`mt-12 transition-all duration-1000 delay-200 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
              isVisible ? 'animate-fade-in-up' : ''
            }`}
            style={{
              animationDelay: `${index * 150}ms`,
              transitionDelay: `${index * 100}ms`
            }}
          >
            {/* Gradient Background Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Animated Border Glow */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 scale-105`} />

            {/* Content */}
            <div className="relative z-10 text-center p-6 md:p-8">
              {/* Icon */}
              <div className="mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white text-xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {stat.icon}
                </div>
              </div>

              {/* Animated Number */}
              <div className="mb-2">
                <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110 inline-block`}>
                  {animatedStats[index] !== undefined ? animatedStats[index] : (isVisible ? stat.number : 0)}
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h4 className="font-semibold text-slate-900 group-hover:text-slate-800 transition-colors duration-500 mb-1">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-500">
                {stat.description}
              </p>

              {/* Pulse Animation for Active Stats */}
              <div className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full animate-ping`} />
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
          </div>
        ))}
      </div>

      {/* Optional: Add a subtle connecting line between stats on desktop */}
      <div className="hidden md:block relative -mt-4">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-30" />
      </div>
    </div>
  );
};

// CSS for custom animations (add to your global CSS or styled-components)
const customStyles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }

  /* Hover effect for the entire stats container */
  .stats-container:hover .stat-card:not(:hover) {
    opacity: 0.7;
    transform: scale(0.98);
  }
`;

// Usage in your component:
// <StatsSection mounted={mounted} />

export default StatsSection;