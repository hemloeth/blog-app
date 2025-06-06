import { type NextRequest, NextResponse } from "next/server"
import { getNeonClient } from "@/lib/db"

export async function GET() {
  try {
    const sql = getNeonClient()
    const posts = await sql`
      SELECT id, title, content, created_at, updated_at 
      FROM posts 
      ORDER BY created_at DESC
    `
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, content } = await request.json()

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 })
    }

    const sql = getNeonClient()
    const result = await sql`
      INSERT INTO posts (title, content)
      VALUES (${title}, ${content})
      RETURNING id, title, content, created_at, updated_at
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Database error:", error)
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}
