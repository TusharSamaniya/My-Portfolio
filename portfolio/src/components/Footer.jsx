import { FiLinkedin, FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiLinkedin, url: 'https://linkedin.com/in/tushar', label: 'LinkedIn' },
    { icon: FiGithub, url: 'https://github.com/TusharSamaniya', label: 'GitHub' },
    { icon: FiMail, url: 'mailto:your.email@example.com', label: 'Email' },
    { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' },
  ];

  const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)]">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Tushar Samaniya
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer & Software Engineer passionate about building scalable applications and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-accent-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-circle"
                    title={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.07)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Tushar Samaniya. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Built with <span className="text-accent-primary">React</span> & <span className="text-accent-primary">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
