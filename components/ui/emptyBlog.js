'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DraftingCompass, Sparkles, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function EmptyBlogState() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <Card className="border-0 shadow-sm rounded-xl bg-white/90 backdrop-blur-sm border border-blue-100">
          <CardContent className="p-8 text-center">
            {/* Icon with subtle animation */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex justify-center"
            >
              <div className="p-4 rounded-full bg-blue-50 text-blue-600 relative">
                <BookOpen className="h-6 w-6" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity 
                  }}
                  className="absolute inset-0 rounded-full border-2 border-blue-200"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-4 mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Your Engineering Journal Awaits
              </h2>
              <p className="text-gray-600">
                Document your technical insights and historical discoveries.
              </p>
            </motion.div>

            {/* Feature highlights */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center gap-4 mb-8"
            >
              {['Technical analysis', 'Historical context', 'Engineering insights'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className="text-xs font-medium px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 border border-blue-100"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link href="/create-post" className="inline-block">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg px-6 py-3 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <DraftingCompass className="h-4 w-4" />
                    Write First Article
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Subtle encouragement */}
            <motion.p 
              variants={itemVariants}
              className="text-xs text-gray-500 mt-6 flex items-center justify-center gap-1"
            >
              <Sparkles className="h-3 w-3 text-blue-400" />
              Join our community of engineer-historians
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}