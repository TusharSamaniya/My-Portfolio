import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
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
    <section id="projects" className="section" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent-primary"></div>
          <span className="section-label">PORTFOLIO</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent-primary"></div>
        </div>

        {/* Heading */}
        <h2 className="section-heading text-center">My Work</h2>

        {/* Projects Container - One Per Row */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Video/Image Container */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-2xl h-64 md:h-72 lg:h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group hover:shadow-glow-lg transition-all duration-300">
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <div className="text-center p-6">
                      <div className="text-5xl mb-4">🎥</div>
                      <p className="text-slate-300 font-semibold">Screen Recording</p>
                      <p className="text-xs text-slate-500 mt-2">Coming soon</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                {/* Project Name */}
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-widest">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-slate-300 text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <FiGithub size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
