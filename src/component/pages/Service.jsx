'use client'
import React from 'react'
import { FaCode, FaFigma, FaPhotoVideo, FaPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: "Website Design",
    description:
      "Modern, responsive designs that look great on phones and desktops.",
    icon: <FaFigma />,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Fast, reliable builds with best practices and clean structure.",
    icon: <FaCode />,
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Branding, social graphics, and marketing visuals that tell your story.",
    icon: <FaPhotoVideo />,
  },
  {
    id: 4,
    title: "Care Plans",
    description:
      "Hosting, updates, and support so your site stays fast and secure.",
    icon: <FaPlane />,
  },
];


const Service = () => {
  return (
   <div className='w-full bg-sky-900 text-white flex flex-col items-center justify-center gap-6 py-8 p-4'>
    <h1 className='text-2xl font-semibold text-center'>Our Core Services</h1>
     <div className='w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-2'>
      {
        servicesData && servicesData.map((service)=>(
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.7}} key={service.id} className='w-full flex flex-col items-center justify-center shadow-sm shadow-white/10 text-center rounded-lg p-2 gap-3'>
            <p className='text-3xl'>{service.icon}</p>
            <h1 className='font-semibold'>{service.title}</h1>
            <p className='opacity-70'>{service.description}</p>
          </motion.div>
        ))
      }
    </div>
   </div>
  )
}

export default Service
