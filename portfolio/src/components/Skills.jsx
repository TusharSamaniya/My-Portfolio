import { useEffect, useRef, useState } from 'react';
import { skillCategories } from '../data/skills';

export default function Skills() {
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

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-indigo-500"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Technical Skills</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-indigo-500"></div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">Expertise Areas</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`p-7 rounded-3xl border border-[rgba(255,255,255,0.07)] bg-[#0f0f1a] transition-all duration-300 hover:border-[rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${category.iconBg} w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={18} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-base">{category.title}</h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3.5 py-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full text-slate-400 text-xs font-medium transition-all duration-300 hover:bg-[rgba(99,102,241,0.15)] hover:border-[rgba(99,102,241,0.4)] hover:text-indigo-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
