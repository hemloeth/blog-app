import { neon } from "@neondatabase/serverless"

// Create a singleton instance of the neon client
let sql: ReturnType<typeof neon>

export function getNeonClient() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined")
  }

  if (!sql) {
    sql = neon(process.env.DATABASE_URL)
  }

  return sql
}
