import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { slideDownVariant, containerVariant, itemVariant } from '../utils/animations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewResume = () => {
    window.open('https://pdflink.to/10d7ad26/', '_blank');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={slideDownVariant}
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        isScrolled ? 'bg-[rgba(10,10,15,0.9)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]' : 'bg-transparent'
      }`}
      style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tushar Samaniya
          </a>

          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex items-center gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariant}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="nav-link text-slate-400 hover:text-white transition-colors duration-300 font-medium text-sm will-transform"
                variants={itemVariant}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              onClick={handleViewResume}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              View Resume
            </button>
          </motion.div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)] py-4 origin-top"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  handleViewResume();
                  setIsOpen(false);
                }}
                className="mt-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-sm text-center"
              >
                View Resume
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
