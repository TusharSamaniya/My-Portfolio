import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, fadeInVariant, scaleUpVariant } from '../utils/animations';

const Counter = ({ target, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration]);

  return count;
};

export default function About() {
  const sectionRef = useRef(null);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
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

  const stats = [
    { number: 5, label: 'Projects Built' },
    { number: 3, label: 'Technologies Mastered' },
    { number: 1, label: 'Years Learning' },
  ];

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Label */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6 will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <motion.div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent-primary"></motion.div>
          <span className="section-label">ABOUT ME</span>
          <motion.div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent-primary"></motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="section-heading text-center will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          Who I Am
        </motion.h2>

        {/* Bio */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16 will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.p
            className="text-slate-400 text-lg leading-relaxed mb-6"
            variants={fadeUpVariant}
          >
            I am a Software Engineer dedicated to architecting high-performance, scalable systems. My primary expertise lies in the Spring Boot ecosystem, where I specialize in implementing secure Identity Management (OAuth2/JWT), efficient data persistence with Spring Data JPA, and cloud-native solutions.
          </motion.p>
          <motion.p
            className="text-slate-400 text-lg leading-relaxed"
            variants={fadeUpVariant}
          >
            Beyond Java, I leverage Python to build and integrate AI-driven logic—such as RAG (Retrieval-Augmented Generation) and semantic search—into modern applications. I am deeply committed to the Microservices philosophy, focusing on distributed system reliability, AWS infrastructure optimization, and clean, maintainable code.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card-base p-8 text-center will-transform hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] cursor-default"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleUpVariant}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.35 } }}
            >
              <p className="gradient-text text-4xl sm:text-5xl font-black mb-2">
                {countersVisible ? <Counter target={stat.number} /> : 0}+
              </p>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Download Resume Button */}
        <motion.div
          className="text-center will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            className="btn-primary inline-block"
            whileHover={{
              y: -2,
              boxShadow: '0 8px 30px rgba(99,102,241,0.5)',
            }}
            transition={{ duration: 0.3 }}
          >
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
