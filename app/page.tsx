import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, MapPin, Github, Twitter, Linkedin, PenTool } from "lucide-react"
import Link from "next/link"
import { getNeonClient } from "@/lib/db"

interface Post {
  id: number
  title: string
  content: string
  created_at: string
}

async function getPosts(): Promise<Post[]> {
  try {
    const sql = getNeonClient()
    const posts = await sql`
      SELECT id, title, content, created_at, updated_at 
      FROM posts 
      ORDER BY created_at DESC
    `
    return posts as Post[]
  } catch (error) {
    console.error("Failed to fetch posts:", error)
    return []
  }
}

export default async function HomePage() {
  const posts = await getPosts()

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

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Welcome to my blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Sharing Ideas & Insights</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A place where I document my journey, share knowledge, and connect with fellow developers and thinkers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#blog">Read Latest Posts</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">Learn About Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground">Get to know the person behind the blog</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hello, I'm a Developer</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm passionate about creating digital experiences and sharing knowledge with the community. Through
                  this blog, I document my learning journey, share insights about web development, and explore the
                  latest technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm" variant="outline">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <PenTool className="h-16 w-16 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">"Code is poetry written in logic"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Blog Posts</h2>
            <p className="text-lg text-muted-foreground">Latest thoughts and insights</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {posts.length > 0 ? (
              <div className="grid gap-6">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {post.content.length > 200 ? `${post.content.substring(0, 200)}...` : post.content}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <PenTool className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
                  <Link href="/create-post" className="inline-block mt-4">
                    <Button>Create Your First Post</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">Have a question or want to collaborate?</p>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Your message..." rows={5} />
                  </div>
                  <Button className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                Available for remote work worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <PenTool className="h-5 w-5" />
              <span className="font-medium">My Blog</span>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
