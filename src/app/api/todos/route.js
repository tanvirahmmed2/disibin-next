
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


export async function POST(req) {
  try {
    // 1. Correct way to parse JSON in Next.js
    const { description } = await req.json();

    if (!description) {
      return NextResponse.json(
        { success: false, message: "Description is required" },
        { status: 400 }
      );
    }
    const result = await pool.query("INSERT INTO todos(description) VALUES($1) RETURNING *", [description]);

    // 3. Check if a row was actually affected
    if (result.rowCount === 0) {
      return NextResponse.json(
        { success: false, message: "Failed to add todo" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Successfully added new todo",
        data: result.rows[0] // Useful to return the ID of the new todo
      },
      { status: 201 } // 201 is the standard for 'Created'
    );

  } catch (error) {
    console.error("Database Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        detail: error.message,
      },
      { status: 500 }
    );
  }
}