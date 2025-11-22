
'use client';

import * as motion from 'motion/react-client';
import { Mail, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.a
              href="mailto:abdulrahman.nasserx@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4 group-hover:bg-gray-800 transition-colors">
                  <Mail size={28} className="text-sky-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-sm text-gray-400 break-all">abdulrahman.nasserx@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/abdulrahman-nasser0"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4 group-hover:bg-gray-800 transition-colors">
                  <Linkedin size={28} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-400">abdulrahman-nasser0</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/Abdulrahman-Nasser0"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4 group-hover:bg-gray-800 transition-colors">
                  <Github size={28} className="text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                <p className="text-sm text-gray-400">Abdulrahman-Nasser0</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl p-6 border border-gray-800/50 h-full flex flex-col items-center text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4">
                  <MapPin size={28} className="text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-sm text-gray-400">Assiut, Egypt</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
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
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-linear-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl p-8 border border-gray-800/50">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response Time</h3>
                <p className="text-gray-300 leading-relaxed">
                  I typically respond to all inquiries within <span className="font-semibold text-white">24-48 hours</span>. 
                  For urgent matters, feel free to reach out directly via{' '}
                  <a 
                    href="mailto:abdulrahman.nasserx@gmail.com" 
                    className="text-sky-400 hover:text-sky-300 transition-colors underline"
                  >
                    email
                  </a>
                  {' '}or{' '}
                  <a 
                    href="https://www.linkedin.com/in/abdulrahman-nasser0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    LinkedIn
                  </a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
