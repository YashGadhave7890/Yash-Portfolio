"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiAlertCircle, FiCheck } from 'react-icons/fi';
import SectionWrapper from '../SectionWrapper';
import ResumeDownload from '../ResumeDownload';
import { CONTACT_INFO } from '../../lib/constants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("k2PbhuvD9g94vqxka");
  }, []);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      console.log('Attempting to send email with EmailJS...');
      console.log('Form data:', formData);
      
      // Send email using EmailJS SDK
      const result = await emailjs.send(
        'service_s2h46ni', // Your EmailJS service ID
        'template_eyogsas', // Your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: 'Yash Gadhave',
          to_email: 'yashgadhave248@gmail.com',
        }
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Error sending message:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      // Try alternative approach with alert for testing
      alert(`EmailJS Error: ${error.message || 'Unknown error'}. Please check your EmailJS configuration.`);
      
      setStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Form - Full Width on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-10 border-2 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl">
              {/* Internship Opportunities Heading */}
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  I'm currently open to internship opportunities and collaborations.
                </h3>
              </div>
              
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-semibold mb-3 text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white text-base focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 ${
                      errors.name ? 'border-red-400' : ''
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-2">
                      <FiAlertCircle className="text-lg" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-semibold mb-3 text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white text-base focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 ${
                      errors.email ? 'border-red-400' : ''
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-2">
                      <FiAlertCircle className="text-lg" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-semibold mb-3 text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white text-base focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-400' : ''
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-2">
                      <FiAlertCircle className="text-lg" />
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-700 text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <span className="text-lg flex items-center gap-2">
                    <FiCheck className="text-green-400" />
                    Message Sent!
                  </span>
                ) : (
                  <>
                    <FiSend className="text-xl" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 text-green-400 text-center text-base font-semibold flex items-center justify-center gap-2"
                >
                  <FiCheck className="text-green-400" />
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 text-red-400 text-center text-base font-semibold flex items-center justify-center gap-2"
                >
                  <FiAlertCircle className="text-red-400" />
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
              
              {/* Response Time Note */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  I usually respond within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Contact Info - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">Contact Information</h3>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30 group-hover:scale-110">
                    <FiMail className="text-cyan-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-base mb-2 font-medium">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=yashgadhave248@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors font-semibold text-base md:text-lg"
                    >
                      yashgadhave248@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30 group-hover:scale-110">
                    <FiPhone className="text-cyan-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-base mb-2 font-medium">Phone</p>
                    <a
                      href="tel:+919021819895"
                      className="text-white hover:text-cyan-400 transition-colors font-semibold text-base md:text-lg"
                    >
                      +91 9021819895
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30 group-hover:scale-110">
                    <FiMapPin className="text-cyan-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-base mb-2 font-medium">Location</p>
                    <p className="text-white font-semibold text-base md:text-lg">
                      A/P Ranjangaon Khurda, Rahata, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Resume Download Section - Below Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl border-2 border-gray-700 p-8 md:p-10 backdrop-blur-sm shadow-2xl shadow-cyan-500/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Get My Resume
              </h3>
              <p className="text-gray-400 text-lg">
                Download my resume or get in touch for opportunities
              </p>
            </div>
            <div className="flex justify-center">
              <ResumeDownload />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
