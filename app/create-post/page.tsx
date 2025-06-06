"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Create Post Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create New Post</h1>
            <p className="text-muted-foreground">Share your thoughts with the world</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Write Your Post</CardTitle>
              <CardDescription>Fill in the details below to create your blog post</CardDescription>
            </CardHeader>
            <CardContent>
              {error && <div className="bg-destructive/10 text-destructive p-3 rounded-md mb-4">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="text-sm font-medium mb-2 block">
                    Post Title
                  </label>
                  <Input
                    id="title"
                    placeholder="Enter your post title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="content" className="text-sm font-medium mb-2 block">
                    Content
                  </label>
                  <Textarea
                    id="content"
                    placeholder="Write your post content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={12}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={isLoading || !title.trim() || !content.trim()}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "Publishing..." : "Publish Post"}
                  </Button>
                  <Button type="button" variant="outline" asChild>
                    <Link href="/">Cancel</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
