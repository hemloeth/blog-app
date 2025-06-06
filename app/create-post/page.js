"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Save, Edit3, FileText, Sparkles, Send, X, AlertCircle, Zap, Layers } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Modern UI Components
const Button = ({ children, className = '', disabled = false, variant = 'default', onClick, type = 'button', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95'
  const variants = {
    default: 'bg-gradient-to-r from-blue-700 via-blue-800 to-slate-800 text-white hover:from-blue-800 hover:via-slate-800 hover:to-blue-900 hover:shadow-xl hover:-translate-y-1 focus:ring-blue-600/40 shadow-lg',
    outline: 'border-2 border-slate-300 text-slate-800 bg-white/90 backdrop-blur-sm hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 focus:ring-slate-500/30 shadow-md',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600/30 shadow-lg'
  }
  
  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : ''}`}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

const Card = ({ children, className = '' }) => (
  <div className={`bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-100/50 shadow-2xl ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-8 pb-4 ${className}`}>
    {children}
  </div>
)

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent ${className}`}>
    {children}
  </h3>
)

const CardDescription = ({ children, className = '' }) => (
  <p className={`text-slate-600 mt-2 ${className}`}>
    {children}
  </p>
)

const CardContent = ({ children, className = '' }) => (
  <div className={`p-8 pt-4 ${className}`}>
    {children}
  </div>
)

const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-slate-800 placeholder-slate-400 ${className}`}
    {...props}
  />
)

const Textarea = ({ className = '', ...props }) => (
  <textarea
    className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-300 text-slate-800 placeholder-slate-400 resize-none ${className}`}
    {...props}
  />
)

export default function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title.trim(), content: content.trim() }),
      })

      if (response.ok) {
        // Clear the form
        setTitle("")
        setContent("")
        // Redirect to home page
        router.push("/")
        router.refresh()
      } else {
        const errorData = await response.json()
        setError(errorData.error || "Failed to create post. Please try again.")
      }
    } catch (error) {
      console.error("Error creating post:", error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-sky-200/15 to-blue-200/15 rounded-full blur-3xl" />
        
        {/* Floating elements */}
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

      {/* Enhanced Header */}
      <motion.div 
        className="relative border-b border-blue-100/50 bg-white/30 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group flex items-center space-x-3 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300"
            >
              <div className="p-2 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-md">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform">Back to Blog</span>
            </Link>
            
            {/* Status indicator */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-700">Create Mode</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative container mx-auto px-4 py-12"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Header Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
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
                  <Edit3 className="w-10 h-10 text-white" />
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

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                Create New Post
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Share your thoughts and insights with the world
              </p>
            </div>

            {/* Feature badges */}
            <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm">
                <FileText className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Rich Content</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-cyan-100 shadow-sm">
                <Zap className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-medium text-slate-700">Instant Publish</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-100 shadow-sm">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-slate-700">Auto Save</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Form Card */}
          <motion.div variants={itemVariants}>
            <Card className="relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/20 rounded-3xl" />
              
              <div className="relative">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    Write Your Post
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Fill in the details below to create your blog post and share it with your audience
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Enhanced Error Display */}
                  {error && (
                    <motion.div 
                      className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{error}</span>
                      <button 
                        onClick={() => setError(null)}
                        className="ml-auto p-1 hover:bg-red-100 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-3">
                        Post Title
                      </label>
                      <Input
                        id="title"
                        placeholder="Enter an engaging title for your post..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="text-lg py-4"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-3">
                        Content
                      </label>
                      <Textarea
                        id="content"
                        placeholder="Write your post content here... Share your thoughts, insights, and stories."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={12}
                        required
                        className="text-base leading-relaxed"
                      />
                    </motion.div>

                    <motion.div 
                      className="flex gap-4 flex-wrap"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isLoading || !title.trim() || !content.trim()}
                        className="px-8 py-4 text-base group"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                            Publishing...
                          </>
                        ) : (
                          <>
                            <Save className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                            Publish Post
                            <Send className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                      
                      <Button 
                        type="button" 
                        variant="outline"
                        className="px-8 py-4 text-base"
                        onClick={() => router.push('/')}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Writing Tips Section */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">
                Tip: Use clear headings and engaging content to captivate your readers
              </span>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}