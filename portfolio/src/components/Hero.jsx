import { FiExternalLink, FiDownload, FiLinkedin, FiGithub, FiMail, FiTwitter, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [particlePositions, setParticlePositions] = useState([]);

  // Cycling job titles animation
  const jobTitles = ['software engineer', 'Full Stack Developer', 'Java Developer'];
  const [cyclingText, setCyclingText] = useState('');
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  // Cycling job titles effect
  useEffect(() => {
    const currentJobTitle = jobTitles[jobTitleIndex];
    const fullCyclingText = `I am ${currentJobTitle}`;
    
    const typeSpeed = 50;
    const deleteSpeed = 30;
    const pauseTime = 2000;
    
    let timeout;
    
    if (!isDeleting) {
      // Typing phase
      if (cyclingText.length < fullCyclingText.length) {
        timeout = setTimeout(() => {
          setCyclingText(fullCyclingText.slice(0, cyclingText.length + 1));
        }, typeSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting phase - delete until "I am "
      const baseText = 'I am ';
      if (cyclingText.length > baseText.length) {
        timeout = setTimeout(() => {
          setCyclingText(cyclingText.slice(0, cyclingText.length - 1));
        }, deleteSpeed);
      } else {
        // Move to next job title
        setIsDeleting(false);
        setJobTitleIndex((prev) => (prev + 1) % jobTitles.length);
        setCyclingText('I am ');
      }
    }
    
    return () => clearTimeout(timeout);
  }, [cyclingText, isDeleting, jobTitleIndex, jobTitles]);

  useEffect(() => {
    // Generate random particle positions
    const particles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 4,
      size: 4 + Math.random() * 4,
    }));
    setParticlePositions(particles);
  }, []);

  const socialLinks = [
    { icon: FiLinkedin, url: 'https://linkedin.com/in/tushar', label: 'LinkedIn' },
    { icon: FiGithub, url: 'https://github.com/TusharSamaniya', label: 'GitHub' },
    { icon: FiMail, url: 'mailto:your.email@example.com', label: 'Email' },
    { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' },
  ];

  const handleViewWork = () => {
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = async () => {
    try {
      console.log('📥 Initiating resume download...');
      
      // Use relative URL for API calls - works on both local and Vercel
      const apiUrl = import.meta.env.VITE_API_URL || window.location.origin;
      const response = await fetch(`${apiUrl}/api/download-resume`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the blob from the response
      const blob = await response.blob();
      
      if (blob.size === 0) {
        throw new Error('Empty file received');
      }
      
      console.log(`📦 Received blob of size: ${blob.size} bytes`);
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create an anchor element and trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Tushar Samaniya Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      
      // Clean up after a short delay to ensure download starts
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
      
      console.log('✅ Resume downloaded successfully');
    } catch (error) {
      console.error('❌ Error downloading resume:', error);
      alert(`Failed to download resume: ${error.message}`);
    }
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
  };

  const nameVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] } },
  };

  const taglineVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.85 } },
  };

  const buttonsVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.05 } },
  };

  const socialContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.2,
      },
    },
  };

  const socialItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const chevronVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.8 } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-32 bg-[#0a0a0f] overflow-hidden">
      {/* Floating Particles */}
      {particlePositions.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none will-transform"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            background: particle.id % 2 === 0 ? 'rgba(99,102,241,0.3)' : 'rgba(168,85,247,0.2)',
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          className="mb-8"
          variants={badgeVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.4)] rounded-full text-slate-300 text-sm will-transform">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-scale"></div>
            ✦ Available for opportunities
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight will-transform"
          variants={nameVariant}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tushar Samaniya
          </span>
        </motion.h1>

        {/* Cycling Job Titles */}
        <motion.div
          className="h-16 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent will-transform">
            {cyclingText}
            <span className="inline-block w-1 h-10 sm:h-12 lg:h-14 ml-1 bg-indigo-500 animate-blink"></span>
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed will-transform"
          variants={taglineVariant}
          initial="hidden"
          animate="visible"
        >
          Software Engineer with deep expertise in the Spring Boot ecosystem (Security, Data JPA, Cloud) and Python. I specialize in architecting Microservices and deploying AI-driven solutions on AWS to create robust, production-ready backend ecosystems
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 will-transform"
          variants={buttonsVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={handleViewWork}
            className="btn-shimmer px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <span>View My Work</span>
            <FiExternalLink size={20} />
          </motion.button>
          <motion.a
            href="#download-resume"
            onClick={(e) => {
              e.preventDefault();
              handleDownloadResume();
            }}
            className="px-8 py-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[rgba(255,255,255,0.05)]"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <span>Download Resume</span>
            <FiDownload size={20} />
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-4 mb-20 will-transform"
          variants={socialContainerVariant}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-[rgba(99,102,241,0.2)] hover:border-[rgba(99,102,241,0.5)] hover:text-indigo-400"
                variants={socialItemVariant}
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                title={social.label}
              >
                <IconComponent size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 will-transform"
          variants={chevronVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiChevronDown size={24} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
