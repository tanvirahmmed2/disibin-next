'use client'
import React, { useState } from 'react'

const BlogsPage = () => {

  const [blogs, setBlogs]= useState([])

  return (
    <div className='w-full flex flex-col items-center gap-4 p-4'>
      {
        blogs.length===0? <div>
          <p>Blog data not found</p>
        </div>:<div>

          <h1></h1>
        </div>
    }
    </div>
  )
}

export default BlogsPage
