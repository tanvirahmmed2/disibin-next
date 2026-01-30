import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export async function GET() {
    try {
        const allData= await pool.query('SELECT * FROM reviews ORDER BY created_at')
        const data= allData.rows
        if(!data ||data.length===0){
            return NextResponse.json({
                success:false, message:'No data found'
            },{status:400})
        }
         return NextResponse.json({success:true, message:'Successfully fetched data', payload:data},{status:200})

    } catch (error) {
        return NextResponse.json({
            success:false, message:error.message
        },{status:500})
        
    }
    
}

export async function POST(req) {
    try {
        const {name, email, comment}= await req.json()
        if(!name || !email || !comment){
            return NextResponse.json({
                success:false, message:'Please provide all data'
            },{status:400})
        }

        const newReview= await pool.query('INSERT INTO reviews(name, email, comment) VALUES($1, $2,$3) RETURNING *',[name,email,comment])

        if(newUser.rowCount===0){
            return NextResponse.json({
                success:false, message:'Failed to add review'
            },{status:400})
        }

        return NextResponse.json({
            success:true, message:'Successfully submitted review'
        },{status:200})

    } catch (error) {
        return NextResponse.json({
            success:false,message:error.message
        },{status:500})
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
        const result= await pool.query(`DELETE FROM reviews WHERE user_id= $1 RETURNING *`,[id])
        if(result.rowCount===0){
            return NextResponse.json({
                success:false, message:'Failed to delete review'
            },{status:400})
        }
         return NextResponse.json({
            success:true, message:'Successfully deleted review'
         },{status:200})
    } catch (error) {
        return NextResponse.json({
            success:false,message:error.message
        },{status:500})
    }
    
}