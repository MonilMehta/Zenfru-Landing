"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

// Custom hook for scroll reveal
function useScrollReveal<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);
  return ref;
}

const CoreValueSection = () => {
  const features = [
    {
      title: 'Real-time phone handling',
      description: 'Every call is picked up instantly, with human-like AI that books, reschedules, and provides information.',
      imageSrc: '/Zenfru1.png',
      imageAlt: 'Real-time phone handling illustration',
    },
    {
      title: 'Emergency triage',
      description: 'Escalations and non-urgent cases are identified and routed seamlessly, day or night.',
      imageSrc: '/Zenfru2.png',
      imageAlt: 'Emergency triage illustration',
    },
    {
      title: 'HIPAA-compliant security',
      description: 'Patient info stays private with end-to-end encryption and safe data practices.',
      imageSrc: '/Zenfru3.png',
      imageAlt: 'HIPAA-compliant security illustration',
    },
    {
      title: 'Practice Info On-Demand',
      description: 'Instantly provides clinic details (location, hours, insurance) and automatically sends new patient intake forms via text.',
      imageSrc: '/Zenfru4.png', 
      imageAlt: 'Practice info on-demand illustration',
    }
  ];

  const headingRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ rootMargin: '-40px' });
  const cardRefs = features.map(() => useScrollReveal<HTMLDivElement>({ rootMargin: '-60px' }));
  const stickyTopOffset = '100px';

  return (
    <section id="features" className="py-16 md:py-24 w-full relative ">
      <div className="container mx-auto px-6 md:px-8 relative z-10 justify-center items-center text-center">
        
        <p
          ref={subtitleRef}
          className="fade-in-up-on-scroll text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8"
        >
          "Never miss a patient call again — even when you're closed"
        </p>
        <div className="relative max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={cardRefs[index]}
              className={`fade-in-up-on-scroll flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white p-6 md:p-8 rounded-xl shadow-xl ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} mb-24 md:mb-32`}
              style={{
                position: 'sticky',
                top: stickyTopOffset,
                zIndex: index + 1,
                transitionDelay: `${0.1 + index * 0.13}s`, // staggered reveal
              }}
            >
              {/* Text Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
              {/* Image Content */}
              <div className="md:w-1/2 flex justify-center items-center p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/50 dark:to-indigo-950/50 backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30 rounded-xl shadow-xl hover:shadow-2xl transition-smooth duration-500 aspect-square max-w-md w-full overflow-hidden group">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  width={400}
                  height={400}
                  className="rounded-lg object-contain transform transition-all duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0 group-hover:drop-shadow-lg"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValueSection;