'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Login = () => {
  const router = useRouter();
  return (
    <div className="border h-login-height rounded-xl flex flex-col items-center w-signup-width mx-auto mt-8">
        <h1 className='text-heading font-semibold text-center mt-8 mb-4'>Login</h1>
        <h2 className='text-heading2 font-medium text-center mb-4'>Welcome back to ECOMMERCE</h2>
        <p>The next gen business marketplace</p>
        <div className="mb-4 w-sub-signup-width my-4">
          <label htmlFor="name" className="">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter"
            className="border rounded w-full h-12 px-4"
          />
        </div>
      <div className="mb-4 w-sub-signup-width my-4">
          <label htmlFor="name" className="">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter"
            className="border rounded w-full h-12 px-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
  <button
    type="submit"
    className="bg-black text-white text-center rounded-md text-tab font-medium my-8 w-sub-signup-width h-14"
    onClick={()=>router.push('/home')}
  >
    Login
  </button>
  <hr className="border-gray-300 w-full mb-8" /> {/* Horizontal line */}
  <div className="mb-4 w-sub-signup-width text-center">
    Don't Have an account? <span className="font-medium cursor-pointer" onClick={()=>router.push('/signup')}>Signup</span>
  </div>
</div>

    </div>
  )
}

export default Login