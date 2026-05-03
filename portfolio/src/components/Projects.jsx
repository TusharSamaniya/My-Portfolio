import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with Spring Boot backend and React frontend. Features include product management, shopping cart, and secure payment integration.',
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'Stripe API'],
      gradient: 'from-indigo-600 to-purple-600',
      liveUrl: '#',
      githubUrl: 'https://github.com/TusharSamaniya',
    },
    {
      title: 'AI Chat Application',
      description: 'A real-time chat application powered by OpenAI API with semantic search capabilities. Built with React, Node.js, and Pinecone for vector storage.',
      tech: ['React', 'Node.js', 'OpenAI API', 'Pinecone', 'Socket.io'],
      gradient: 'from-pink-600 to-purple-600',
      liveUrl: '#',
      githubUrl: 'https://github.com/TusharSamaniya',
    },
    {
      title: 'Cloud Task Management',
      description: 'A task management system deployed on AWS with microservices architecture. Includes user authentication, real-time notifications, and data persistence.',
      tech: ['Spring Boot', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
      gradient: 'from-blue-600 to-cyan-600',
      liveUrl: '#',
      githubUrl: 'https://github.com/TusharSamaniya',
    },
    {
      title: 'Authentication Service',
      description: 'A robust authentication and authorization service using JWT and OAuth 2.0. Implements role-based access control (RBAC) with secure password hashing.',
      tech: ['Spring Security', 'JWT', 'OAuth 2.0', 'MySQL'],
      gradient: 'from-emerald-600 to-teal-600',
      liveUrl: '#',
      githubUrl: 'https://github.com/TusharSamaniya',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'An interactive dashboard for visualizing business metrics. Features real-time data updates, customizable charts, and export functionality.',
      tech: ['React', 'Chart.js', 'Spring Boot', 'PostgreSQL'],
      gradient: 'from-orange-600 to-red-600',
      liveUrl: '#',
      githubUrl: 'https://github.com/TusharSamaniya',
    },
    {
      title: 'Microservices Platform',
      description: 'A scalable microservices architecture with service discovery, API gateway, and inter-service communication. Deployed on AWS with Docker and Kubernetes.',
      tech: ['Spring Cloud', 'Docker', 'Kubernetes', 'AWS'],
      gradient: 'from-violet-600 to-indigo-600',
      liveUrl: '#',
      githubUrl: 'https://github.com/TusharSamaniya',
    },
  ];

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-base overflow-hidden transform transition-all duration-700 hover:shadow-glow-lg hover:-translate-y-1.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Gradient Banner */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}>
                <h3 className="text-2xl font-bold text-white text-center">{project.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-glow"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-[rgba(255,255,255,0.15)] text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.3)]"
                  >
                    <FiGithub size={16} />
                    GitHub
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
