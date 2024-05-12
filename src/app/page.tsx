'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
const SignupForm = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push('/verify');
    
  };
  return (
    <div className="border h-signup-height flex flex-col items-center rounded-xl w-signup-width mx-auto mt-8">
        <h1 className='text-heading font-semibold text-center py-4'>Create your account</h1>
      <div className="mb-4 w-sub-signup-width my-4">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter"
            className="border rounded w-full h-12 px-4"
          />
        </div>
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
      <button
            type="submit"
            className="bg-black text-white text-center rounded-md text-tab font-medium  my-8 w-sub-signup-width h-14"
            onClick={handleSubmit}
          >
            Create Account
          </button>
          <div className="mb-4 w-sub-signup-width text-center my-8">
          Have an account ? <span className='font-medium cursor-pointer' onClick={()=>router.push('/login')}>Login</span>
        </div>
    </div>
  );
};

export default SignupForm;
