import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-gray-600 text-white px-4 py-8'>
      <p className='w-full text-center italic'>Copyright reserved by <Link className='font-semibold not-italic' href={'https://disibin.com'}>Disibin | 2023</Link></p>
    </footer>
  )
}

export default Footer
