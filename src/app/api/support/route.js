import { pool } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const allData= await pool.query('SELECT * FROM supports ORDER BY created_at')
        const data= allData.rows
        if(!data || data.length ===0){
            return NextResponse.json({
                success:false, message:'No data found'
            },{status:400})
        }
         return NextResponse.json({
            success:true, message:'Successfully fetched data',payload:data
         },{status:200})
    } catch (error) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}