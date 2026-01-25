import HappyCustomers from '@/component/pages/HappyCustomers'
import Intro from '@/component/pages/Intro'
import Service from '@/component/pages/Service'
import Support from '@/component/pages/Support'
import Team from '@/component/pages/Team'
import React from 'react'

const MainPage = () => {
  return (
    <div className='w-full'>
      <Intro/>
      <Service/>
      <HappyCustomers/>
      <Team/>
      fefe
      <Support/>
      
    </div>
  )
}

export default MainPage
