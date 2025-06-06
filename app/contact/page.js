'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Send, Mail, MessageCircle, Globe, Sparkles, ArrowRight } from 'lucide-react';

// Mock ContactForm component since we don't have the original
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-slate-800 placeholder-slate-400"
            placeholder="Your full name"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-slate-800 placeholder-slate-400"
            placeholder="your.email@example.com"
            required
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-slate-800 placeholder-slate-400"
          placeholder="What's this about?"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-slate-800 placeholder-slate-400 resize-none"
          placeholder="Tell me about your project or question..."
          required
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
            </>
          )}
        </div>
      </motion.button>
    </motion.form>
  );
};

export default function ContactSection() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-sky-200/15 to-blue-200/15 rounded-full blur-3xl" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div 
            variants={headerVariants}
            className="text-center mb-16"
          >
            {/* Icon with enhanced design */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <MessageCircle className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Enhanced heading */}
            <div className="space-y-6">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Let's Connect
              </motion.h2>
              
              <motion.p 
                className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
              </motion.p>
            </div>

            {/* Enhanced feature badges */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-10 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div 
                variants={featureVariants}
                className="group flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-slate-700">Quick Response</span>
              </motion.div>
              
              <motion.div 
                variants={featureVariants}
                className="group flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Globe className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-slate-700">Global Reach</span>
              </motion.div>
              
              <motion.div 
                variants={featureVariants}
                className="group flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Sparkles className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-slate-700">Premium Quality</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-100/50 shadow-2xl p-8 md:p-12">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/20 rounded-3xl" />
              
              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced location info */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-base font-medium text-slate-700">
                Available for remote collaboration worldwide
              </span>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}