'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
  return (
    <div className='w-full min-h-150 flex flex-col md:flex-row items-center justify-center gap-4 p-4'>


      <div className='w-full flex flex-col gap-3'>
        <p className='text-2xl font-semibold'>A Leading Software Development Company Worldwide</p>
        <p className='text-8xl font-semibold text-sky-600'>
          <Typewriter
            words={[
              "Disibin",
              'Ultimate Solution',
              "100X Business Growth"
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



      <div className='w-full flex flex-col gap-3'>

      </div>

    </div>
  )
}

export default Intro
