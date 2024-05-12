'use client'
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';

const Verify = () => {
  const router = useRouter();
  const [values, setValues] = useState<string[]>(new Array(8).fill(''));

  const handleInputChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length === 1) {
      // Move focus to the next input
      if (index < values.length - 1) {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
        const nextInput = e.target.nextElementSibling as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyPress = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle key press event if needed
  };

  return (
    <div className="border h-verify-height rounded-xl flex flex-col items-center w-signup-width mx-auto mt-8">
      <h1 className='text-heading font-semibold text-center mt-8 mb-4'>Verify your email</h1>
      <div className='text-center my-4'>Enter the 8-digit code you have received on<br/> jho***@gmail.com</div>
      <div className='my-4'>
        <div>Code</div>
        <div className='flex '>
          {values.map((value, index) => (
            <input
              key={index}
              className='w-verify-box-width h-12 mr-2 border text-center rounded-md'
              type="text"
              maxLength={1} // Limit input to one character
              value={value}
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
