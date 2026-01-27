'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaRegStar } from 'react-icons/fa'

const Bio = () => {
    return (
        <div className='w-full  flex  items-center justify-center p-4 bg-linear-to-br from-teal-900 to-teal-700 text-white'>
            <div className='w-full  flex flex-col md:flex-row items-center justify-center gap-6'>
                <div className='w-full flex flex-col gap-2 items-start justify-center'>
                    <h1 className='font-semibold text-3xl'>A small studio with big care</h1>
                    <p>We’re a tight-knit team focused on clarity, speed, and friendly collaboration. No fluff—just websites that work hard for your business.</p>

                </div>

                <div className='w-full text-center p-2 shadow  flex flex-row items-center justify-center gap-2 border border-teal-500 rounded-xl border-opacity-20'>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className='w-full flex flex-col items-center justify-center h-37.5 bg-white/5 rounded-lg text-xl font-semibold'>
                        <p>20+</p>
                        <p>Projects shipped</p>
                    </motion.div>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className='w-full flex flex-col items-center justify-center h-37.5 bg-white/5 rounded-lg text-xl font-semibold'>
                        <p className='flex items-center gap-1 text-teal-500'>5 <FaRegStar /></p>
                        <p>Customers rated</p>
                    </motion.div>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className='w-full flex flex-col items-center justify-center h-37.5 bg-white/5 rounded-lg text-xl font-semibold'>
                        <p>100%</p>
                        <p>Remote friendly</p>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Bio
