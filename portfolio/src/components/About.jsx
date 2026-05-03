import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { number: '5+', label: 'Projects Built' },
    { number: '3+', label: 'Technologies Mastered' },
    { number: '1+', label: 'Years Learning' },
  ];

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent-primary"></div>
          <span className="section-label">ABOUT ME</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent-primary"></div>
        </div>

        {/* Heading */}
        <h2 className="section-heading text-center">Who I Am</h2>

        {/* Bio */}
        <div className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I am a Software Engineer dedicated to architecting high-performance, scalable systems. My primary expertise lies in the Spring Boot ecosystem, where I specialize in implementing secure Identity Management (OAuth2/JWT), efficient data persistence with Spring Data JPA, and cloud-native solutions.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Beyond Java, I leverage Python to build and integrate AI-driven logic—such as RAG (Retrieval-Augmented Generation) and semantic search—into modern applications. I am deeply committed to the Microservices philosophy, focusing on distributed system reliability, AWS infrastructure optimization, and clean, maintainable code.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card-base p-8 text-center transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="gradient-text text-4xl sm:text-5xl font-black mb-2">{stat.number}</p>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="/resume.pdf" download className="btn-primary inline-block">
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
