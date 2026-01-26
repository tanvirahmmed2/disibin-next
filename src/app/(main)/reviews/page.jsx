'use client'
import React, { useState } from 'react'

const ReviewsPage = () => {
  const [reviews, setReviews]=useState([])
  return (
      <div className='w-full flex flex-col items-center gap-4 p-4'>
        {
          reviews.length===0? <div>
            <p>Review data not found</p>
          </div>:<div>
  
            <h1></h1>
          </div>
      }
      </div>
    )
}

export default ReviewsPage
