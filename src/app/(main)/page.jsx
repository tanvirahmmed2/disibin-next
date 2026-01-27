import HappyCustomers from '@/component/pages/HappyCustomers'
import Intro from '@/component/pages/Intro'
import Service from '@/component/pages/Service'
import Support from '@/component/pages/Support'
import Team from '@/component/pages/Team'
import TechSidebar from '@/component/pages/TechSidebar'
import React from 'react'

const MainPage = () => {
  return (
    <div className='w-full'>
      <Intro/>
      <TechSidebar/>
      <Service/>
      <HappyCustomers/>
      <Team/>
      <Support/>
      
    </div>
  )
}

export default MainPage
