import React from 'react'

export const metadata={
    title:'Home',
    description:'Home Page'
}

const HomeLayout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default HomeLayout
