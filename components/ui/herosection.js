'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DraftingCompass, BookOpen, ArrowRight, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Engineering-themed animated background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #f0f9ff, #e0f2fe, #ecfdf5, #f0fdfa)",
            "linear-gradient(135deg, #e0f2fe, #ecfdf5, #f0fdfa, #f0f9ff)",
            "linear-gradient(225deg, #ecfdf5, #f0fdfa, #f0f9ff, #e0f2fe)",
            "linear-gradient(315deg, #f0fdfa, #f0f9ff, #e0f2fe, #ecfdf5)",
            "linear-gradient(45deg, #f0f9ff, #e0f2fe, #ecfdf5, #f0fdfa)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Technical mesh gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 20% 80%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Technical floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15))"
          }}
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(8, 145, 178, 0.15))"
          }}
          animate={{
            x: [300, -50, 300],
            y: [200, -100, 200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute w-64 h-64 rounded-full blur-2xl"
          style={{
            background: "linear-gradient(90deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))"
          }}
          animate={{
            x: [150, -150, 150],
            y: [-100, 150, -100],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge 
              variant="outline" 
              className="mb-6 border-blue-200 bg-white/80 backdrop-blur-2xl hover:bg-white/90 transition-all duration-500 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-medium flex items-center gap-2"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                <DraftingCompass className="h-4 w-4" />
                Engineering Through Time
              </motion.span>
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <motion.span 
              className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent drop-shadow-sm"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Mechanical Marvels Unveiled
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Exploring the engineering wonders of history and their modern counterparts through technical analysis and historical research.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 backdrop-blur-sm border-0 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
                <a href="#articles" className="flex items-center gap-2 relative z-10">
                  <BookOpen className="h-5 w-5" />
                  Explore Articles
                  <motion.span 
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-300 bg-white/70 text-slate-700 hover:bg-white/90 hover:border-blue-400 backdrop-blur-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <a href="#about" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  My Engineering Journey
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Additional technical floating elements */}
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full filter blur-3xl"
        style={{
          background: "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))"
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}