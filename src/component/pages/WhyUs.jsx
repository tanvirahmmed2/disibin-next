'use client'
import { motion } from 'framer-motion'
import React from 'react'

const datas = [
  {
    id: 1,
    title: 'Creative Design',
    description: 'We craft visually stunning designs that grab attention and reflect your brand identity.',
  },
  {
    id: 2,
    title: 'User-Responsive',
    description: 'Every layout is optimized for all devices to ensure smooth user experience everywhere.',
  },
  {
    id: 3,
    title: 'Modern Technology',
    description: 'We use the latest web technologies to build fast, scalable, and secure applications.',
  },
  {
    id: 4,
    title: 'Community Driven',
    description: 'DisiBin is a collaborative community where designers and developers grow together.',
  },
  {
    id: 5,
    title: 'Performance Focused',
    description: 'We prioritize speed, SEO, and performance to deliver high-quality web experiences.',
  },
  {
    id: 6,
    title: 'Client Satisfaction',
    description: 'Your ideas matter to us. We listen, improve, and deliver exactly what you need.',
  },
]



const WhyUs = () => {
  return (
  <div className='w-full p-4 flex flex-col items-center justify-center bg-teal-800 text-white gap-6 py-8'>
      <h1 className='text-2xl font-semibold'>Why us!</h1>
      <div className='w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8'>
      {
        datas && datas.map((data)=>(
          <motion.div initial={{opacity:0, y:0}} whileInView={{opacity:1}}  transition={{duration:1}} key={data.id} className='w-full h-60 not-even:hover:-rotate-2 hover:rotate-2   flex flex-col items-center justify-center shadow-teal-200 shadow-sm hover:shadow-xl cursor-pointer transition ease-in-out duration-500 text-center rounded-full p-5 gap-3'>
            <p className='text-3xl'>{data.icon}</p>
            <h1 className='font-semibold'>{data.title}</h1>
            <p className='opacity-70'>{data.description}</p>
            <span className='w-10 h-0.5 bg-white/40'></span>
          </motion.div>
        ))
      }
    </div>
    </div>
  )
}

export default WhyUs
