import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { fadeUpVariant } from '../utils/animations';

export default function Skills() {
  const sectionRef = useRef(null);
  const [cardHovered, setCardHovered] = useState(null);

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

  const badgeContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
  };

  const badgeVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Label */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6 will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-indigo-500"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Technical Skills</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-indigo-500"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          Expertise Areas
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                className="p-7 rounded-3xl border border-[rgba(255,255,255,0.07)] bg-[#0f0f1a] transition-all duration-400 will-transform cursor-default"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 0 30px rgba(99,102,241,0.15)',
                  borderColor: 'rgba(99,102,241,0.3)',
                }}
                onHoverStart={() => setCardHovered(index)}
                onHoverEnd={() => setCardHovered(null)}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`${category.iconBg} w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0`}
                    animate={
                      cardHovered === index
                        ? { rotate: 10, scale: 1.1 }
                        : { rotate: 0, scale: 1 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent size={18} className="text-white" />
                  </motion.div>
                  <h3 className="text-white font-semibold text-base">{category.title}</h3>
                </div>

                {/* Skills Badges */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={badgeContainerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="inline-flex items-center px-3.5 py-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full text-slate-400 text-xs font-medium transition-all duration-300 cursor-default will-transform"
                      variants={badgeVariant}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(99,102,241,0.15)',
                        borderColor: 'rgba(99,102,241,0.4)',
                        color: '#a5b4fc',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
