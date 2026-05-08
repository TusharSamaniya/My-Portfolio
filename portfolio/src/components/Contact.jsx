import { useEffect, useRef, useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUpVariant, slideInLeft, slideInRight } from '../utils/animations';

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const submitButtonRef = useRef(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      console.error('❌ Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'tusharsamaniya.me@gmail.com', link: 'mailto:tusharsamaniya.me@gmail.com' },
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

        {/* Two Column Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-6 will-transform"
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
              if (info.label === 'Email') {
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

          {/* Right Column - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 will-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInRight}
            transition={{ delay: 0.2 }}
          >
            {/* Name Input */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0f0f1a] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-slate-500 focus:outline-none form-input-focus transition-all duration-300"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0f0f1a] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-slate-500 focus:outline-none form-input-focus transition-all duration-300"
              />
            </motion.div>

            {/* Subject Input */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0f0f1a] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-slate-500 focus:outline-none form-input-focus transition-all duration-300"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-[#0f0f1a] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-slate-500 focus:outline-none form-input-focus transition-all duration-300 resize-none"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              ref={submitButtonRef}
              type="submit"
              className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 will-transform ${
                status === 'success'
                  ? 'bg-green-600 text-white'
                  : status === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
              }`}
              disabled={status === 'sending'}
              whileHover={
                status === ''
                  ? {
                      y: -3,
                      boxShadow: '0 8px 30px rgba(99,102,241,0.5)',
                    }
                  : {}
              }
              whileTap={
                status === ''
                  ? {
                      y: 0,
                      scale: 0.98,
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
            >
              {status === 'sending' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  ✓ Message Sent!
                </>
              ) : status === 'error' ? (
                <>
                  ✗ Error Sending
                </>
              ) : (
                <>
                  <FiSend size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
