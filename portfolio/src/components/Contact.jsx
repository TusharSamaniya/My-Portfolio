import { useEffect, useRef, useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
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
          setIsVisible(true);
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
    
    console.log('📨 Sending email with data:', formData);
    
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        console.error('Email send failed:', data.error);
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      console.error('❌ Error sending email:', error);
      console.error('   This usually means the backend server is not running.');
      console.error('   Make sure you ran: npm run dev (from root folder)');
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
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent-primary"></div>
          <span className="section-label">CONTACT</span>
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent-primary"></div>
        </div>

        {/* Heading */}
        <h2 className="section-heading text-center">Get In Touch</h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Have a question or want to work together? I'd love to hear from you.
              Drop me a message and I'll get back to you as soon as possible.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                
                // Special handling for email with copy button
                if (info.label === 'Email') {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 card-base group transition-all duration-300"
                    >
                      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-500 text-sm">{info.label}</p>
                        <p className="gradient-text font-semibold">{info.value}</p>
                      </div>
                      <button
                        onClick={handleCopyEmail}
                        className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                          copied
                            ? 'bg-green-600 text-white'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        }`}
                      >
                        {copied ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                  );
                }
                
                // Regular links for LinkedIn and GitHub
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 card-base group transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-lg group-hover:shadow-glow transition-all duration-300">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{info.label}</p>
                      <p className="gradient-text font-semibold">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-primary focus:shadow-glow focus:ring-0 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-primary focus:shadow-glow focus:ring-0 transition-all duration-300"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-primary focus:shadow-glow focus:ring-0 transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent-primary focus:shadow-glow focus:ring-0 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <FiSend size={18} />
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-center text-green-400 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-400 text-sm">
                  ✗ Failed to send message. Please try again or contact me directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
