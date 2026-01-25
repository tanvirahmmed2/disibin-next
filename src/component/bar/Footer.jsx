import Link from 'next/link'
import React from 'react'

import { FaFacebook, FaInstagram, FaPhone, FaTelegram, FaYoutube } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'


const Footer = () => {
  return (
    <footer className='w-full bg-gray-600 text-white px-4 py-8 flex flex-col items-center justify-center gap-4'>


      <div className='w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4'>
        <div className='w-auto min-w-50 flex flex-col gap-1'>
          <p className='font-semibold'>Links</p>
          <div className='flex flex-col text-sm w-auto'>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/blogs'}>Blogs</Link>
            <Link href={'/packages'}>Packages</Link>
            <Link href={'/login'}>Login</Link>
          </div>
        </div>
        <div className='w-auto min-w-50 flex flex-col gap-1'>
          <p className='font-semibold'>Policy</p>
          <div className='flex flex-col text-sm w-auto'>
            <Link href={'/'}>Privacy & Policy</Link>
            <Link href={'/'}>Payments</Link>
            <Link href={'/'}>Refund Policy</Link>
          </div>
        </div>
        <div className='w-auto min-w-50 flex flex-col gap-1'>
          <p className='font-semibold'>User Manual</p>
          <div className='flex flex-col text-sm w-auto'>
            <Link href={'/'}>Access</Link>
            <Link href={'/'}>Data</Link>
            <Link href={'/'}>Account</Link>
          </div>
        </div>
      </div>

      <div className='w-full flex items-center justify-center flex-row gap-4'>
        <Link className='text-2xl' href="https://www.facebook.com/disibin"><FaFacebook /></Link>
        <Link className='text-2xl' href="https://www.instagram.com/user.disibin/"><FaInstagram /></Link>
        <Link className='text-2xl' href="https://www.youtube.com/@Disibin"><FaYoutube /></Link>
        <Link className='text-2xl' href="mailto:disibin@gmail.com"><CiMail /></Link>
        <Link className='text-2xl' href="tel:+8801987131369"><FaPhone /></Link>
        <Link className='text-2xl' href="https://t.me/disibin"><FaTelegram /></Link>

      </div>
      <p className='w-full text-center italic border-t pt-4'>Copyright reserved by <Link className='font-semibold not-italic ' href={'https://disibin.com'}>Disibin | 2023</Link></p>
    </footer>
  )
}

export default Footer
