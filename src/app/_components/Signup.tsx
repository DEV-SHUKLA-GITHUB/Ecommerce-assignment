'use client'
import React from 'react';

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };
  return (
    <div className="border h-signup-height flex justify-center rounded-xl w-signup-width mx-auto mt-8">
      <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
          >
            Create Account
          </button>
          <div className="mb-4 w-sub-signup-width text-center my-8">
          Have an account ? <span className='font-medium'>Login</span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
