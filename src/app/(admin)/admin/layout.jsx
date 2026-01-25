import React from 'react'

export const metadata={
    title:'Admin',
    description:'Admin page'
}

const AdminLayout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AdminLayout
