'use client'
import React from 'react'
import { FaAndroid, FaCode, FaFigma,  FaGamepad,  FaPlane } from 'react-icons/fa';
import { DiIllustrator } from "react-icons/di";
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: "Website Design",
    description:
      "Clean, modern, and user-friendly UI/UX designs focused on usability, branding, and seamless experience across all devices.",
    icon: <FaFigma />,
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "High-performance, scalable websites built with clean code, best practices, and modern technologies for speed and reliability.",
    icon: <FaCode />,
  },
  {
    id: 3,
    title: "Android App Development",
    description:
      "Custom Android applications designed for performance, smooth user experience, and long-term maintainability.",
    icon: <FaAndroid />,
  },
  {
    id: 4,
    title: "Game Development",
    description:
      "Engaging and interactive games developed with optimized performance, creative gameplay, and immersive user experience.",
    icon: <FaGamepad />,
  },
  {
    id: 5,
    title: "Graphics Design",
    description:
      "Eye-catching visual designs including logos, banners, and marketing materials that strengthen your brand identity.",
    icon: <DiIllustrator />,
  },
  {
    id: 6,
    title: "Management",
    description:
      "Complete website management including hosting setup, regular updates, security monitoring, and ongoing technical support.",
    icon: <FaPlane />,
  },
];


const Service = () => {
  return (
   <div className='w-full bg-sky-800 text-white  flex flex-col items-center justify-center gap-6 py-8 p-4'>
    <h1 className='text-2xl font-semibold text-center'>Our Core Services</h1>
     <div className='w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8'>
      {
        servicesData && servicesData.map((service)=>(
          <motion.div initial={{opacity:0, y:0}} whileInView={{opacity:1}}  transition={{duration:1}} key={service.id} className='w-full even:hover:-rotate-2 hover:rotate-2 bg-sky-700  flex flex-col items-center justify-center shadow-sky-200 shadow-sm hover:shadow-xl cursor-pointer transition ease-in-out duration-500 text-center rounded-lg p-5 gap-3'>
            <p className='text-3xl'>{service.icon}</p>
            <h1 className='font-semibold'>{service.title}</h1>
            <p className='opacity-70'>{service.description}</p>
            <span className='w-10 h-0.5 bg-white/40'></span>
          </motion.div>
        ))
      }
    </div>
   </div>
  )
}

export default Service
