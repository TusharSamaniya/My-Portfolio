import { FiLinkedin, FiGithub, FiMail, FiTwitter, FiArrowUp, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeInVariant } from '../utils/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/tushar-samaniya-4b69b1290/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FiGithub, url: 'https://github.com/TusharSamaniya', label: 'GitHub', color: 'hover:text-slate-300' },
    { icon: FiMail, url: 'mailto:tusharsamaniya.me@gmail.com', label: 'Email', color: 'hover:text-pink-400' },
    { icon: FiTwitter, url: 'https://x.com/Tushar_Samaniya', label: 'Twitter', color: 'hover:text-cyan-400' },
  ];

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.footer
      className="relative border-t border-[rgba(255,255,255,0.07)] bg-gradient-to-b from-transparent via-[rgba(99,102,241,0.03)] to-[rgba(168,85,247,0.02)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariant}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container-custom py-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Brand Section */}
            <motion.div variants={itemVariant}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 animate-gradient-shift">
                  Tushar Samaniya
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Currently in my final year of Computer Science, specializing in the Spring Boot ecosystem and Python-driven AI. I am open to new challenges, collaborations, and professional opportunities. Ready to contribute my skills in backend engineering and cloud infrastructure to your next big project.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-accent-primary transition-colors">
                  <FiMapPin size={16} />
                  <span>Sarit vihar, New Delhi, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariant}>
              <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.25 }}
                  >
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-accent-primary transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-accent-primary opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect With Me */}
            <motion.div variants={itemVariant}>
              <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></span>
                Connect with me
              </h4>
              <p className="text-slate-400 text-sm mb-4">Get in touch for opportunities and collaborations.</p>
              <motion.a
                href="mailto:tusharsamaniya.me@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 will-transform"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FiMail size={16} />
                tusharsamaniya.me@gmail.com
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-[rgba(255,255,255,0.07)] py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-slate-500 text-sm">
                © {currentYear} <span className="text-accent-primary font-semibold">Tushar Samaniya</span>. All rights reserved.
              </p>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
              >
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-slate-400 transition-all duration-300 hover:border-[rgba(99,102,241,0.5)] ${social.color}`}
                      whileHover={{
                        y: -4,
                        scale: 1.15,
                        backgroundColor: 'rgba(99,102,241,0.15)',
                      }}
                      transition={{ duration: 0.3 }}
                      title={social.label}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white transition-all duration-300 will-transform"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 8px 20px rgba(99,102,241,0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FiArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
