import Footer from '@/component/bar/Footer'
import Navbar from '@/component/bar/Navbar'
import React from 'react'

export const metadata={
    title:'Home',
    description:'Home Page'
}

const HomeLayout = ({children}) => {
  return (
    <div className='w-full  pt-16 flex flex-col min-h-screen items-center justify-between'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default HomeLayout
