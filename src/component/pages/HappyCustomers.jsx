import Link from 'next/link'
import React from 'react'

const HappyCustomers = () => {
  return (
    <div className='w-full p-4 flex flex-col items-center justify-center gap-6 py-8'>
      <h1 className='text-2xl font-semibold'>Our Happy Customers</h1>
      <div>

      </div>
      <Link href={'/reviews'} className='px-4 p-1 bg-teal-700 text-white rounded-full'>More . . .</Link>
    </div>
  )
}

export default HappyCustomers
