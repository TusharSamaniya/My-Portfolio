import { useEffect, useRef, useState } from 'react';
import { FiAward } from 'react-icons/fi';

export default function Education() {
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

  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Technological Institute',
      duration: '2021 - Present',
      cgpa: '8.2/10',
      coursework: ['Data Structures', 'Database Management', 'Operating Systems', 'Computer Networks', 'OOP'],
      certifications: ['AWS Certified Cloud Practitioner', 'Spring Boot Certification'],
    },
    {
      degree: 'Advanced Java Programming',
      institution: 'Online Learning Platform',
      duration: '2023 - 2024',
      cgpa: null,
      coursework: ['Spring Framework', 'Microservices', 'REST APIs', 'Spring Security'],
      certifications: ['Oracle Java Certified Associate'],
    },
    {
      degree: 'Cloud & DevOps',
      institution: 'Cloud Academy',
      duration: '2024',
      cgpa: null,
      coursework: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
      certifications: ['AWS Solutions Architect Associate', 'Docker Certified Associate'],
    },
  ];

  return (
    <section id="education" className="section" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent-primary"></div>
          <span className="section-label">LEARNING</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent-primary"></div>
        </div>

        {/* Heading */}
        <h2 className="section-heading text-center">Education</h2>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:transform md:-translate-x-1/2"></div>

          {/* Education Cards */}
          <div className="space-y-8 md:space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`md:w-1/2 ml-12 md:ml-0 transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 md:left-1/2 top-0 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-[#0a0a0f] md:transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <FiAward size={14} className="text-white" />
                </div>

                {/* Card */}
                <div className="card-base p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="gradient-text font-semibold mb-2">{edu.institution}</p>

                  {/* Duration and CGPA */}
                  <div className="flex gap-4 mb-4 text-sm">
                    <span className="bg-[rgba(99,102,241,0.1)] text-accent-light px-3 py-1 rounded-full">
                      {edu.duration}
                    </span>
                    {edu.cgpa && (
                      <span className="bg-[rgba(99,102,241,0.1)] text-accent-light px-3 py-1 rounded-full">
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                  </div>

                  {/* Coursework */}
                  {edu.coursework.length > 0 && (
                    <div className="mb-4">
                      <p className="text-slate-400 text-sm font-medium mb-2">Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, cIndex) => (
                          <span key={cIndex} className="skill-badge text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Certifications */}
                  {edu.certifications.length > 0 && (
                    <div>
                      <p className="text-slate-400 text-sm font-medium mb-2">Certifications:</p>
                      <div className="space-y-1">
                        {edu.certifications.map((cert, certIndex) => (
                          <p key={certIndex} className="text-accent-light text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent-primary rounded-full"></span>
                            {cert}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
