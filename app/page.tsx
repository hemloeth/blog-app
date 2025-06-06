// page.js - Main Homepage Component
import { getNeonClient } from "@/lib/db"
import Navbar from "../components/ui/navbar"
import HeroSection from "../components/ui/herosection"
import AboutSection from "../app/about/page"
import BlogListPage from "./blogs/page"
import ContactSection from "../app/contact/page"
import Footer from "../components/ui/footer"

async function getPosts() {
  try {
    const sql = getNeonClient()
    const posts = await sql`
      SELECT id, title, content, created_at, updated_at 
      FROM posts 
      ORDER BY created_at DESC
      LIMIT 10
    `
    return posts
  } catch (error) {
    console.error("Failed to fetch posts:", error)
    return []
  }
}

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BlogListPage posts={posts} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

// Optional: Add metadata for SEO
export const metadata = {
  title: "My Blog - Sharing Ideas & Insights",
  description: "A place where I document my journey, share knowledge, and connect with fellow developers and thinkers.",
  keywords: ["blog", "development", "programming", "web development", "react", "nextjs"],
}