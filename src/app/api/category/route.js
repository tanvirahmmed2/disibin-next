import { pool } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        const allData = await pool.query('SELECT * FROM categories ORDER BY created_at')
        const data = allData.rows
        if (!data || data.length === 0) {
            return NextResponse.json({
                success: false, message: 'No data found'
            }, { status: 400 })
        }
        return NextResponse.json({
            success: true, message: 'Successfully fetched data', payload: data
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}

export async function POST(req) {
    try {
        const { title } = await req.json()
        if (!title) {
            return NextResponse.json({
                success: false, message: 'Catedory title not added'
            }, { status: 400 })
        }

        const newCat = await pool.query('INSERT INTO categories(title) values($1) RETURNING *', [title])
        if (!newCat) {
            return NextResponse.json({
                success: false, message: 'Failed to add category'
            }, { status: 400 })
        }

        return NextResponse.json({
            success: true, message: 'Successfully added category', payload: newCat
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}


export async function DELETE(req) {
    try {
        const {id}= await req.json()
        if(!id){
            return NextResponse.json({
                success:false, message:'ID not recieved'
            },{status:400})
        }
        const result= await pool.query(`DELETE FROM categories WHERE category_id=$1 RETURNING *`,[id])
        if(result.rowCount===0){
             return NextResponse.json({
                success:false, message:'Failed to delete category'
            },{status:400})
        }
        return NextResponse.json({
            success:true, message:'Successfully deleted category'
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}