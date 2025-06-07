"use client"

import { useEffect, useState } from "react"
import { PenTool } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

async function getPosts() {
  // Dummy fetch example
  return [
    { id: 1, title: "First post" },
    { id: 2, title: "Second post" }
  ]
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
      <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
      </nav>

      {/* Render posts */}
      <div className="container mx-auto p-4">
        {posts.length === 0 && <p>No posts found.</p>}
        {posts.length > 0 && (
          <ul>
            {posts.map(post => (
              <li key={post.id} className="border-b py-2">
                {post.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}