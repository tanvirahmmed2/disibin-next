'use client'
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
  return (
    <div  className='w-full h-180 flex flex-col items-center justify-center gap-4 p-4 relative text-white text-center font-mono'>
      <Image src={'/bg.jpeg'} alt='bg' width={1000} height={1000} className='w-full h-180 absolute -z-10 opacity-65 object-cover blur-[4px]'/>


      <p className='text-2xl font-semibold'>A Leading Software Development Company Worldwide</p>
      <p className='text-5xl sm:text-7xl md:text-9xl font-bold text-sky-300 font-sans'>
        <Typewriter
          words={[
            "Disibin",
            'Design . Build . Inspire',
            'Creative . Responsive . Powerful',
            "Ideas . Code . Impact"
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>
      <p className='text-2xl'>Delivering innovative, scalable, and high-performance digital solutions for businesses across the globe.</p>

    </div>
  )
}

export default Intro
