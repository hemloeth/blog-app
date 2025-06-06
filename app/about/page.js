'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, ArrowRight, Mail, MapPin, BookOpen, DraftingCompass } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  const skills = [
    "Mechanical Design", "CAD Modeling", "Thermodynamics", "3D Printing", 
    "Industrial History", "Technical Writing"
  ]
     
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: BookOpen, label: "Blog", href: "#" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <DraftingCompass className="h-4 w-4" /> About The Engineer
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Hi, I'm <span className="text-blue-600">Alex</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A mechanical engineer who bridges the gap between ancient innovations and modern technology.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 h-full border border-blue-100/50">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <DraftingCompass className="h-8 w-8 text-white" />
                </div>
                
                {/* Basic Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Alex Carter</h3>
                  <p className="text-slate-600 mb-4">Mechanical Engineer & History Enthusiast</p>
                  
                  <div className="flex items-center justify-center gap-1 text-sm text-slate-500 mb-6">
                    <MapPin className="h-4 w-4" />
                    <span>Berlin, Germany</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <Button 
                      key={label}
                      variant="outline" 
                      size="sm"
                      className="bg-white/80 hover:bg-white border-blue-200/50 text-slate-700 hover:text-blue-600 transition-all duration-200"
                      asChild
                    >
                      <a href={href} className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              variants={itemVariants}
            >
              {/* About Text */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    As a mechanical engineer with a deep fascination for historical technologies, 
                    I specialize in analyzing how ancient engineering solutions can inspire modern 
                    mechanical design. My work focuses on the intersection of past and present 
                    innovations.
                  </p>
                  <p>
                    Through my research and writing, I explore remarkable engineering feats from 
                    antiquity to the Industrial Revolution, examining how these breakthroughs 
                    shaped our world. I'm particularly interested in pre-industrial manufacturing 
                    techniques and their modern equivalents.
                  </p>
                  <p>
                    When I'm not designing mechanical systems, you'll find me studying historical 
                    blueprints, visiting industrial heritage sites, or recreating ancient machines 
                    with modern CAD tools.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/50">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-200 px-4 py-2 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100/50 text-center">
                <blockquote className="text-xl md:text-2xl font-medium text-slate-800 italic mb-4">
                  "The machines of yesterday hold the secrets to solving tomorrow's engineering challenges."
                </blockquote>
                <p className="text-slate-500 font-medium">— My Engineering Philosophy</p>
              </div>

              {/* CTA */}
              <div className="bg-slate-900 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Explore With Me</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I'm always interested in discussing historical engineering marvels, 
                  collaborating on technical projects, or exchanging ideas about mechanical 
                  innovations through the ages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 group"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl font-medium transition-all duration-200"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read My Articles
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}