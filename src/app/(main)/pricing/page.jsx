'use client'
import React, { useState } from 'react'

const PricingPage = () => {
  const [packages, setPakages]= useState([])
  
    return (
      <div className='w-full flex flex-col items-center gap-4 p-4'>
        {
          packages.length===0? <div>
            <p>Package data not found</p>
          </div>:<div>
  
            <h1></h1>
          </div>
      }
      </div>
    )
}

export default PricingPage
