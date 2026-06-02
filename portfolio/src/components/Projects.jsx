import { useEffect, useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { projects, miniProjects } from '../data/projects';
import { fadeUpVariant, scaleUpVariant } from '../utils/animations';

// Helper function to extract YouTube video ID
const getYouTubeVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};

// Helper function to check if URL is YouTube
const isYouTubeUrl = (url) => {
  return url && (url.includes('youtube.com') || url.includes('youtu.be'));
};

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
        <motion.div
          className="flex items-center justify-center gap-4 mb-6 will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent-primary"></div>
          <span className="section-label">PORTFOLIO</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent-primary"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="section-heading text-center will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          My Work
        </motion.h2>

        {/* Projects Container - One Per Row */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center will-transform`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleUpVariant}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Video/Image Container */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-2xl h-64 md:h-72 lg:h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group will-transform"
                  whileHover={{
                    y: -10,
                    boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.1)',
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                {project.videoUrl ? (
                    isYouTubeUrl(project.videoUrl) ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(project.videoUrl)}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <video
                        src={project.videoUrl}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        muted
                        loop
                      />
                    )
                  ) : (
                    <div className="text-center p-6">
                      <div className="text-5xl mb-4">🎥</div>
                      <p className="text-slate-300 font-semibold">Screen Recording</p>
                      <p className="text-xs text-slate-500 mt-2">Coming soon</p>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                {/* Project Name */}
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-4 text-white will-transform"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.name}
                </motion.h3>

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
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300"
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300"
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FiGithub size={18} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Projects Section */}
        <div className="mt-24">
          <motion.h2
            className="section-heading text-center mb-12 will-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
          >
            Undeployed Mini Projects
          </motion.h2>
          
          {/* Mini Projects Grid - Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 max-w-4xl mx-auto">
            {miniProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card-base overflow-hidden will-transform"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scaleUpVariant}
                transition={{
                  duration: 0.6,
                  delay: (projects.length + index) * 0.12 * 0.01,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 0 40px rgba(99,102,241,0.08)',
                }}
                transition={{ duration: 0.35 }}
              >
                {/* Image/Video Banner */}
                <div className="h-40 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-0 overflow-hidden">
                  {project.videoUrl ? (
                    isYouTubeUrl(project.videoUrl) ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(project.videoUrl)}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <video
                        src={project.videoUrl}
                        className="w-full h-full object-cover"
                        muted
                        autoPlay
                      />
                    )
                  ) : project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <h3 className="text-2xl font-bold text-white text-center">{project.name}</h3>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {(project.imageUrl || project.videoUrl) && (
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      {project.subtitle && (
                        <p className="text-xs text-slate-400 font-medium">{project.subtitle}</p>
                      )}
                    </div>
                  )}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Tech Tags */}
                  {project.skills && project.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((tech, techIndex) => (
                        <span key={techIndex} className="text-slate-300 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-semibold transition-all duration-300"
                      whileHover={{ y: -2, scale: 1.03 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FiGithub size={16} />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
