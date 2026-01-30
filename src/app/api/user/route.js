import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export async function GET() {
    try {
        const allData= await pool.query('SELECT * FROM users ORDER BY created_at')
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
        const {name, email, password, phone}= await req.json()
        if(!name || !email || !password || !phone){
            return NextResponse.json({
                success:false, message:'Please provide all data'
            },{status:400})
        }

        const user= await pool.query(`SELECT * FROM users WHERE email= $1 OR phone=$2`,[email, phone]) 
        if(user.rows.length > 0){
            return NextResponse.json({
                success:false, message:'User already exists'
            },{status:400})
        }

        const hashedPass= await bcrypt.hash(password, 10)
        const newUser= await pool.query('INSERT INTO users(user_name, email, password,phone) VALUES($1, $2,$3, $4) RETURNING *',[name,email,hashedPass, phone])

        if(newUser.rowCount===0){
            return NextResponse.json({
                success:false, message:'Failed to register'
            },{status:400})
        }

        return NextResponse.json({
            success:true, message:'Successfully registered'
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
        const result= await pool.query(`DELETE FROM users WHERE user_id= $1 RETURNING *`,[id])
        if(result.rowCount===0){
            return NextResponse.json({
                success:false, message:'Failed to delete user'
            },{status:400})
        }
         return NextResponse.json({
            success:true, message:'Successfully registered'
         },{status:200})
    } catch (error) {
        return NextResponse.json({
            success:false,message:error.message
        },{status:500})
    }
    
}