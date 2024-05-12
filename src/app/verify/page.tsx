'use client'
import React, { useRef, ChangeEvent, KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'

const Verify = () => {
  const router = useRouter();
  const inputRefs = Array.from({ length: 8 }, () => useRef<HTMLInputElement>(null)); // Specify input element type

  const handleInputChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const value = input.value;

    if (value.length >= 1) {
      // Move focus to the next input
      if (index < inputRefs.length - 1 && inputRefs[index + 1]?.current) {
        inputRefs[index + 1]?.current?.focus();
      }
    }
  };

  const handleKeyPress = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    const input = e.target;

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
              className='w-verify-box-width h-12 mr-2 border text-center rounded-md'
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