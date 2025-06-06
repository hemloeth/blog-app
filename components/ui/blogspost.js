'use client'

// components/BlogPostCard.js
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Eye, Heart, X, User, Share2, Bookmark } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useMemo, useCallback } from "react"

export default function BlogPostCard({ post, index = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Memoize expensive calculations
  const formattedDate = useMemo(() => 
    new Date(post.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }), [post.created_at])

  const formattedDateDetailed = useMemo(() =>
    new Date(post.created_at).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }), [post.created_at])

  const readingTime = useMemo(() => {
    const wordsPerMinute = 200
    const words = post.content.split(' ').length
    return Math.ceil(words / wordsPerMinute)
  }, [post.content])

  const truncatedContent = useMemo(() => {
    const maxLength = 120  // Reduced for consistent card size
    return post.content.length > maxLength 
      ? `${post.content.substring(0, maxLength)}...` 
      : post.content
  }, [post.content])

  // Memoize content paragraphs for modal
  const contentParagraphs = useMemo(() => 
    post.content.split('\n').filter(p => p.trim()), [post.content])

  // Optimize event handlers
  const handleCardClick = useCallback(() => {
    setIsExpanded(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const handleCloseModal = useCallback((e) => {
    e?.stopPropagation()
    setIsExpanded(false)
    document.body.style.overflow = 'unset'
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Simplified color themes
  const cardThemes = [
    {
      gradient: "from-violet-500/10 to-pink-500/10",
      border: "border-violet-200",
      accent: "text-violet-600",
      badge: "bg-violet-100 text-violet-700 border-violet-200",
      bg: "bg-violet-500"
    },
    {
      gradient: "from-cyan-500/10 to-indigo-500/10",
      border: "border-cyan-200",
      accent: "text-cyan-600",
      badge: "bg-cyan-100 text-cyan-700 border-cyan-200",
      bg: "bg-cyan-500"
    },
    {
      gradient: "from-emerald-500/10 to-teal-500/10",
      border: "border-emerald-200",
      accent: "text-emerald-600",
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
      bg: "bg-emerald-500"
    },
    {
      gradient: "from-orange-500/10 to-yellow-500/10",
      border: "border-orange-200",
      accent: "text-orange-600",
      badge: "bg-orange-100 text-orange-700 border-orange-200",
      bg: "bg-orange-500"
    },
    {
      gradient: "from-pink-500/10 to-red-500/10",
      border: "border-pink-200",
      accent: "text-pink-600",
      badge: "bg-pink-100 text-pink-700 border-pink-200",
      bg: "bg-pink-500"
    }
  ]

  const theme = cardThemes[index % cardThemes.length]

  // Simplified animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, delay: index * 0.05 }
    }
  }

  return (
    <>
      {/* Blog Card - FIXED SIZE */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="group cursor-pointer w-full h-full"
        onClick={handleCardClick}
      >
        <Card className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} border-0 shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-full flex flex-col`}>
          {/* Simplified border effect */}
          <div className={`absolute inset-[1px] bg-white/95 rounded-lg`} />
          
          {/* Simple corner accent */}
          <div className={`absolute top-0 right-0 w-12 h-12 ${theme.bg} opacity-10 rounded-bl-[24px]`} />
          
          {/* Content - FIXED LAYOUT */}
          <div className="relative z-10 flex flex-col h-full">
            <CardHeader className="pb-3 flex-shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <CardTitle className={`text-base font-bold mb-2 group-hover:${theme.accent} transition-colors duration-200 line-clamp-2 leading-tight min-h-[2.5rem]`}>
                    {post.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 flex-shrink-0" />
                      <span className="truncate">{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 flex-shrink-0" />
                      <span>{readingTime} min</span>
                    </div>
                  </div>
                </div>
                
                <div className={`p-1.5 rounded-full ml-100${theme.gradient} ${theme.border} border flex-shrink-0`}>
                  <ArrowRight className={`h-3 w-3 ${theme.accent}`} />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0 flex-1 flex flex-col justify-between">
              {/* Content - Fixed height area */}
              <div className="flex-1">
                <CardDescription className="text-slate-700 text-sm line-clamp-3 leading-relaxed min-h-[4rem]">
                  {truncatedContent}
                </CardDescription>
              </div>
              
              {/* Footer - Always at bottom */}
              <div className="flex items-center justify-between mt-3 pt-3">
                <div className="flex items-center gap-1 flex-wrap">
                  {post.category && (
                    <Badge variant="outline" className={`${theme.badge} text-xs px-2 py-0.5 truncate max-w-[100px]`}>
                      {post.category}
                    </Badge>
                  )}
                  {post.featured && (
                    <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200 text-xs px-1.5 py-0.5">
                      ⭐
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-xs text-slate-400 flex-shrink-0">
                  {post.views && (
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views > 999 ? `${Math.floor(post.views/1000)}k` : post.views}</span>
                    </div>
                  )}
                  {post.likes && (
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{post.likes > 999 ? `${Math.floor(post.likes/1000)}k` : post.likes}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>

      {/* Optimized Modal */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${theme.gradient} p-4 md:p-6 border-b border-slate-200`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${theme.bg} bg-opacity-20 flex items-center justify-center`}>
                        <User className={`h-5 w-5 ${theme.accent}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-800 truncate">{post.author || 'Anonymous Author'}</p>
                        <p className="text-sm text-slate-600 truncate">{formattedDateDetailed}</p>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                      {post.title}
                    </h1>
                    
                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{readingTime} min read</span>
                      </div>
                      {post.views && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views} views</span>
                        </div>
                      )}
                      {post.likes && (
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes} likes</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex items-center gap-1">
                    <button className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-150">
                      <Share2 className="h-4 w-4 text-slate-600" />
                    </button>
                    <button className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-150">
                      <Bookmark className="h-4 w-4 text-slate-600" />
                    </button>
                    <button 
                      onClick={handleCloseModal}
                      className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-150"
                    >
                      <X className="h-4 w-4 text-slate-600" />
                    </button>
                  </div>
                </div>
                
                {/* Tags */}
                {(post.category || post.featured) && (
                  <div className="flex items-center gap-2 mt-3">
                    {post.category && (
                      <Badge variant="outline" className={`${theme.badge} border-white/20`}>
                        {post.category}
                      </Badge>
                    )}
                    {post.featured && (
                      <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                        ⭐ Featured
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              
              {/* Content - Optimized scrolling */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="max-w-3xl mx-auto">
                    <div className="text-slate-700 leading-relaxed space-y-4">
                      {contentParagraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-base md:text-lg leading-7">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-500">
                          Published {formattedDate}
                        </div>
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 hover:bg-red-100 text-red-600 transition-colors duration-150">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm font-medium">{post.likes || 0}</span>
                          </button>
                          <button className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${theme.badge} transition-colors duration-150`}>
                            <Share2 className="h-4 w-4" />
                            <span className="text-sm font-medium">Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}