'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Main = () => {
  const router = useRouter();
  return (
    <div className='flex'><div className="border h-home-height rounded-xl p-8 w-signup-width mx-auto mt-8">
    <h1 className='text-heading font-semibold text-center mb-4'>Please mark your interests!</h1>
    <p className=' text-center mb-4'>We will keep you notified.</p>
    <h2 className='text-heading2 font-medium my-4'>My saved interests!</h2>
    <div className=''>
        <div className='p-4 font-medium'><input type="checkbox" className='mr-2 w-6 h-6' /> Shoes</div>
        <div className='p-4 font-medium'><input type="checkbox" className='mr-2 w-6 h-6' /> Men T-shirts</div>
        <div className='p-4 font-medium'><input type="checkbox" className='mr-2 w-6 h-6' /> Makeup</div>
        <div className='p-4 font-medium'><input type="checkbox" className='mr-2 w-6 h-6' /> Jewellery</div>
        <div className='p-4 font-medium'><input type="checkbox" className='mr-2 w-6 h-6' /> Women T-shirts</div>
        <div className='p-4 font-medium'><input type="checkbox" className='mr-2 w-6 h-6' /> Furniture</div>
    </div>

    </div>
    <div>   <button
    type="submit"
    className="bg-blue-600 text-white text-center rounded-md text-tab font-medium my-4 w-24 mx-4 h-14"
    onClick={()=>router.push('/login')}
  >
    Logout
  </button></div></div>
  )
}

export default Main