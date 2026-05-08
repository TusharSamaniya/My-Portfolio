import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, fadeInVariant } from '../utils/animations';

export default function About() {
  const sectionRef = useRef(null);



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


      </div>
    </section>
  );
}
