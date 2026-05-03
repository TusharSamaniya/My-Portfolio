import { FiExternalLink, FiDownload, FiLinkedin, FiGithub, FiMail, FiTwitter, FiChevronDown } from 'react-icons/fi';

export default function Hero() {
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

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-32 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.4)] rounded-full text-slate-300 text-sm">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            ✦ Available for opportunities
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Tushar Samaniya</span>
        </h1>

        {/* Subtitle */}
        <div className="h-16 mb-8">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300">
            Full Stack Developer & Software Engineer
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Software Engineer with deep expertise in the Spring Boot ecosystem (Security, Data JPA, Cloud) and Python. I specialize in architecting Microservices and deploying AI-driven solutions on AWS to create robust, production-ready backend ecosystems
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={handleViewWork}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>View My Work</span>
            <FiExternalLink size={20} />
          </button>
          <a href="/resume.pdf" download className="px-8 py-3 bg-transparent border border-[rgba(255,255,255,0.15)] text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[rgba(255,255,255,0.05)]">
            <span>Download Resume</span>
            <FiDownload size={20} />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-20">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-[rgba(99,102,241,0.2)] hover:border-[rgba(99,102,241,0.5)] hover:text-indigo-400 hover:-translate-y-0.5"
                title={social.label}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <FiChevronDown size={24} className="text-slate-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
