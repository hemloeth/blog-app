"use client"

import { useEffect, useState } from "react"
import { PenTool } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Replace this with your actual data fetching function
async function getPosts() {
  // example: fetch('/api/posts').then(res => res.json())
  return []
}

export default function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const data = await getPosts()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PenTool className="h-6 w-6" />
              <span className="text-xl font-bold">My Blog</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
              <Link href="/create-post">
                <Button size="sm">Create Post</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* You can render posts here if needed */}
    </div>
  )
}