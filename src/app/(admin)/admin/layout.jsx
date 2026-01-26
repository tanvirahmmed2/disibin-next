import AdminSideBar from '@/component/bar/AdminSideBar'
import React from 'react'

export const metadata={
    title:'Admin',
    description:'Admin page'
}

const AdminLayout = ({children}) => {
  return (
    <div className='w-full pl-16 relative'>
      <AdminSideBar/>
      {children}
    </div>
  )
}

export default AdminLayout
