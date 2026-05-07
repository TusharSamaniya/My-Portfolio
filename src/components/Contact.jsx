import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  
  const email = 'tusharsamaniya.me@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/tushar-samaniya-4b69b1290/';
  const github = 'https://github.com/TusharSamaniya';

  // Handle email copy
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // Handle email redirect
  const handleEmailRedirect = () => {
    window.location.href = `mailto:${email}`;
  };

  // Handle LinkedIn redirect
  const handleLinkedInRedirect = () => {
    window.open(linkedin, '_blank');
  };

  // Handle GitHub redirect
  const handleGitHubRedirect = () => {
    window.open(github, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300">
            Feel free to reach out to me through any of these channels
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email Card */}
          <div className="bg-slate-700 hover:bg-slate-600 transition-colors duration-300 rounded-lg p-8 text-center shadow-lg">
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
            <p className="text-slate-300 mb-4 break-all">{email}</p>
            <div className="flex gap-3">
              <button
                onClick={handleCopyEmail}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {copied ? '✓ Copied!' : 'Copy Email'}
              </button>
              <button
                onClick={handleEmailRedirect}
                className="flex-1 px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors duration-300"
              >
                Send Email
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-slate-700 hover:bg-slate-600 transition-colors duration-300 rounded-lg p-8 text-center shadow-lg">
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">LinkedIn</h3>
            <p className="text-slate-300 mb-4">Connect with me professionally</p>
            <button
              onClick={handleLinkedInRedirect}
              className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Visit LinkedIn
            </button>
          </div>

          {/* GitHub Card */}
          <div className="bg-slate-700 hover:bg-slate-600 transition-colors duration-300 rounded-lg p-8 text-center shadow-lg">
            <div className="mb-4">
              <svg
                className="w-12 h-12 mx-auto text-slate-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">GitHub</h3>
            <p className="text-slate-300 mb-4">Check out my projects and code</p>
            <button
              onClick={handleGitHubRedirect}
              className="w-full px-4 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Visit GitHub
            </button>
          </div>
        </div>

        {/* Alternative Contact Method */}
        <div className="bg-slate-700 rounded-lg p-8 text-center">
          <p className="text-slate-300 mb-4">
            Or drop me a message directly below:
          </p>
          <form className="max-w-2xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
