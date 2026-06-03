import { useEffect, useRef, useState } from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUpVariant, slideInLeft } from '../utils/animations';

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tusharsamaniya.me@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'tusharsamaniya.me@gmail.com', link: 'mailto:tusharsamaniya.me@gmail.com', isEmail: true },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'tushar-samaniya-4b69b1290', link: 'https://www.linkedin.com/in/tushar-samaniya-4b69b1290/' },
    { icon: FiGithub, label: 'GitHub', value: 'TusharSamaniya', link: 'https://github.com/TusharSamaniya' },
  ];

  return (
    <section id="contact" className="section" ref={sectionRef}>
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
          <span className="section-label">CONTACT</span>
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
          Get In Touch
        </motion.h2>

        {/* Contact Info Grid - Centered */}
        <motion.div
          className="max-w-2xl mx-auto space-y-6 will-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            
            // Special handling for email with copy button
            if (info.isEmail) {
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-6 rounded-xl card-base will-transform group"
                  variants={slideInLeft}
                  whileHover={{
                    borderColor: 'rgba(99,102,241,0.3)',
                    boxShadow: '0 0 30px rgba(99,102,241,0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                  <motion.button
                    onClick={handleCopyEmail}
                    className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                      copied
                        ? 'bg-green-600 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </motion.button>
                </motion.div>
              );
            }
            
            // Regular links for LinkedIn and GitHub
            return (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl card-base will-transform cursor-pointer group"
                variants={slideInLeft}
                whileHover={{
                  x: 6,
                  borderColor: 'rgba(99,102,241,0.3)',
                  boxShadow: '0 0 30px rgba(99,102,241,0.1)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-300">
                  <IconComponent size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">{info.label}</p>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
