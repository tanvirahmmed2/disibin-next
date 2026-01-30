
import { pool } from "@/lib/db";
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const allTodos = await pool.query('SELECT * FROM todos');

    return NextResponse.json({
      success: true,
      message: "Successfully received data",
      payload: allTodos.rows, 
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}
