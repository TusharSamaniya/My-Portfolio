import { useEffect, useRef, useState } from 'react';
import { FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUpVariant, slideInRight } from '../utils/animations';

export default function Education() {
  const sectionRef = useRef(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
        }
      },
      { threshold: 0.2 }
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
      institution: 'Echelon Institute of Technology',
      duration: '2023-2027',
      semester: '6th Semester',
      coursework: ['Data Structures', 'Database Management', 'Operating Systems', 'Computer Networks', 'OOP'],
      certifications: ['AWS Certified Cloud Practitioner', 'MongoDB', 'Write Research paper on Recommendation system using graph database'],
    },
    {
      degree: 'Java Learning Journey',
      institution: 'Online Learning Platform',
      duration: '2023 - 2024',
      coursework: ['2nd Semester: Core Java', '3rd Semester: Servlet JSP, JDBC', '4th Semester: Spring Framework', '5th Semester: Spring Boot', '6th Semester: Spring Boot Projects'],
      certifications: [],
    },
    {
      degree: 'Cloud & DevOps',
      institution: 'Cloud Academy',
      duration: '2025',
      coursework: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Python', 'AI Implementation'],
      skills: [
        { name: 'Docker', percentage: 80 },
        { name: 'Kubernetes', percentage: 50 },
        { name: 'CI/CD Pipeline', percentage: 90 },
        { name: 'Infrastructure as Code', percentage: 60 },
        { name: 'Python', percentage: 80 },
        { name: 'AI Implementation', percentage: 95 },
      ],
      certifications: [],
    },
  ];

  return (
    <section id="education" className="section" ref={sectionRef}>
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
          <span className="section-label">LEARNING</span>
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
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <motion.div
            className={`timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 md:transform md:-translate-x-1/2 ${
              timelineVisible ? 'visible' : ''
            }`}
          ></motion.div>

          {/* Education Cards */}
          <div className="space-y-8 md:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className={`md:w-1/2 ml-12 md:ml-0 will-transform ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInRight}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-8 md:left-1/2 top-0 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-[#0a0a0f] md:transform md:-translate-x-1/2 z-10 flex items-center justify-center animate-ring-pulse will-transform"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiAward size={14} className="text-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="card-base p-6 will-transform"
                  whileHover={{
                    y: -4,
                    borderColor: 'rgba(99,102,241,0.3)',
                    boxShadow: '0 0 30px rgba(99,102,241,0.1)',
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-white font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="gradient-text font-semibold mb-2">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mb-4">{edu.duration}</p>

                  {edu.semester && (
                    <p className="text-indigo-400 text-xs font-medium mb-3 uppercase tracking-widest">
                      {edu.semester}
                    </p>
                  )}

                  {/* Coursework */}
                  {edu.coursework.length > 0 && (
                    <div className="mb-4">
                      <p className="text-slate-400 text-xs uppercase font-bold mb-2 tracking-widest">Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <motion.span
                            key={idx}
                            className="text-slate-300 text-xs font-medium will-transform"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(99,102,241,0.2)' }}
                            transition={{ duration: 0.2 }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Certifications */}
                  {edu.certifications.length > 0 && (
                    <div className="mb-4">
                      <p className="text-slate-400 text-xs uppercase font-bold mb-2 tracking-widest">Certifications</p>
                      <ul className="space-y-1">
                        {edu.certifications.map((cert, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-indigo-500 mt-1">✓</span>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills Progress (if any) */}
                  {edu.skills && edu.skills.length > 0 && (
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold mb-3 tracking-widest">Skills</p>
                      <div className="space-y-2">
                        {edu.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-slate-300 text-xs w-20">{skill.name}</span>
                            <div className="flex-1 h-1.5 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
