import { NextResponse } from "next/server";
import { getNeonClient } from "@/lib/db";

// Force dynamic rendering to prevent caching
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const sql = getNeonClient();
    const posts = await sql`
      SELECT id, title, content, created_at, updated_at 
      FROM posts 
      ORDER BY created_at DESC
    `;
    
    // Create response with no-cache headers
    const response = NextResponse.json(posts);
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const sql = getNeonClient();
    const result = await sql`
      INSERT INTO posts (title, content)
      VALUES (${title}, ${content})
      RETURNING id, title, content, created_at, updated_at
    `;

    let newPost;
    if (Array.isArray(result) && result.length > 0) {
      newPost = result[0];
    } else {
      newPost = result;
    }

    // Create response with no-cache headers
    const response = NextResponse.json(newPost, { status: 201 });
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}