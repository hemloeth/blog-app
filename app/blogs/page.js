'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, BookOpen, TrendingUp, Layers } from 'lucide-react';
import BlogPostCard from "../../components/ui/blogspost";
import EmptyBlogState from "../../components/ui/emptyBlog";

export default function BlogSection({ posts }) {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  return (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-hidden"
    >
      {/* Technical background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-sky-200/20 to-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          variants={headerVariants}
          className="text-center mb-16"
        >
          {/* Engineering-themed icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <DraftingCompass className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-white">⚙️</span>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <motion.h2 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Technical Chronicles
            </motion.h2>
            
            <motion.p 
              className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Engineering insights and historical perspectives
            </motion.p>
          </div>

          {/* Stats or features */}
          {posts && posts.length > 0 && (
            <motion.div 
              className="flex items-center justify-center gap-8 mt-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">
                  {posts.length} {posts.length === 1 ? 'Analysis' : 'Analyses'}
                </span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm">
                <TrendingUp className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-medium text-slate-700">Technical Depth</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-slate-700">Historical Context</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          variants={gridVariants}
          className="relative"
        >
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="w-full aspect-square"
                >
                  <div className="w-full h-full">
                    <BlogPostCard post={post} index={index} />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-lg">
                <EmptyBlogState />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom decorative element */}
        {posts && posts.length > 0 && (
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-700">
                More technical analyses in progress
              </span>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}