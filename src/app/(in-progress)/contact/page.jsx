
'use client';

import * as motion from 'motion/react-client';
import { Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'abdulrahman.nasserx@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen text-white bg-(--color-text)">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6 justify-center"
            >
              <div className="h-px w-12 bg-linear-to-r from-sky-500 to-blue-500"></div>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Contact</span>
              <div className="h-px w-12 bg-linear-to-r from-blue-500 to-sky-500"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-sky-400 via-blue-400 to-white bg-clip-text text-transparent mb-6"
            >
              Let's Connect
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdulrahman-nasser0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-20"></div>
                <div className="relative rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-gray-800/50 group-hover:bg-gray-800 rounded-xl transition-colors">
                    <Linkedin size={32} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Connect on LinkedIn</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Let's connect professionally
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Abdulrahman-Nasser0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-20"></div>
                <div className="relative rounded-2xl p-8 border border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-gray-800/50 group-hover:bg-gray-800 rounded-xl transition-colors">
                    <Github size={32} className="text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Check My Work</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    View my projects & code
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl p-8 md:p-12 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="text-sky-400" size={28} />
                  <h2 className="text-3xl font-bold text-white">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 text-white placeholder-gray-500 transition-all duration-300"
                        placeholder="Ahmed"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 text-white placeholder-gray-500 transition-all duration-300"
                        placeholder="ahmed@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 text-white placeholder-gray-500 transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full bg-linear-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
