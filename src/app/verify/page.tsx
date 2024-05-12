'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'

const Verify = () => {
  const router = useRouter();
  const inputRefs = Array.from({ length: 8 }, () => useRef(null)); // Array of refs for 8 inputs

  const handleInputChange = (index, e) => {
    const input = e.target;
    const maxLength = parseInt(input.getAttribute('maxlength'), 10);
    const value = input.value;

    if (value.length >= maxLength) {
      // Move focus to the next input
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyPress = (index, e) => {
    const input = e.target;
    const maxLength = parseInt(input.getAttribute('maxlength'), 10);
    const keyCode = e.keyCode || e.which;

    // Prevent typing more than one character per input
    if (input.value.length >= maxLength && keyCode !== 8) {
      e.preventDefault(); // Prevent further input
    }
  };

  return (
    <div className="border h-verify-height rounded-xl flex flex-col items-center w-signup-width mx-auto mt-8">
      <h1 className='text-heading font-semibold text-center mt-8 mb-4'>Verify your email</h1>
      <div className='text-center my-4'>Enter the 8-digit code you have received on<br/> jho***@gmail.com</div>
      <div className='my-4'>
        <div>Code</div>
        <div className='flex '>
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              className='w-verify-box-width h-12 mr-2 text-center border rounded-md'
              type="text"
              maxLength={1} // Limit input to one character
              onChange={(e) => handleInputChange(index, e)}
              onKeyPress={(e) => handleKeyPress(index, e)}
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="bg-black text-white text-center rounded-md text-tab font-medium my-10 w-sub-signup-width h-14"
        onClick={() => router.push('/home')}
      >
        Verify
      </button>
    </div>
  );
}

export default Verify;
