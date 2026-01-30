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

export async function POST(req) {
    try {
        const {name, email, message,subject}= await req.json()
        if(!email || !name || !message || !subject){
            return NextResponse.json({
                success:false, message:'Please provide all information'
            },{status:400})
        }

        const newSupport= await pool.query('INSERT INTO supports(name, email, subject, message) VALUES($1, $2,$3,$4) RETURNING *',[name, email,subject, message])
        if(!newSupport){
            return NextResponse.json({
                success:false, message:'Failed to send message'
            },{status:400})
        }

        return NextResponse.json({
            success:true, message:'Successfully send message',payload:newSupport
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}

export async function DELETE(req) {
    try {
        const {id}= await req.json()
        if(!id){
            return NextResponse.json({
                success:false, message:"ID not recieved"
            },{status:400})
        }
        const deleteSupport= await pool.query(`DELETE FROM supports WHERE support_id= $1 RETURNING *`, [id])
        if(deleteSupport.rowCount === 0){
            return NextResponse.json({
                success:false, message:'Failed to delete support data'
            },{status:400})
        }

        return NextResponse.json({
            success:true, message:'Successfully deleted data'
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}