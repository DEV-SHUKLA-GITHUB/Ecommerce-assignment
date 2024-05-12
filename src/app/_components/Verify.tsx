import React from 'react'

const Verify = () => {
  return (
    <div className="border h-verify-height rounded-xl flex flex-col items-center w-signup-width mx-auto mt-8">
         <h1 className='text-heading font-semibold text-center mt-8 mb-4'>Verify your email</h1>
         <div className='text-center my-4'>Enter the 8 digit code you have received on<br/> swa***@gmail.com</div>
         <div className='my-4'><div>Code</div>
         <div className='flex '>
         <div className='w-verify-box-width h-12 mr-2 border rounded-md'></div>    
         <div className='w-verify-box-width h-12 mr-2 border rounded-md'></div>    
         <div className='w-verify-box-width h-12 mr-2 border rounded-md'></div>    
         <div className='w-verify-box-width h-12 mr-2 border rounded-md'></div>    
         <div className='w-verify-box-width h-12 mr-2 border rounded-md'></div>    
         <div className='w-verify-box-width h-12 mr-2 border rounded-md'></div>    
         <div className='w-verify-box-width h-12 mr-2 border rounded-md'></div>    
         <div className='w-verify-box-width h-12 border rounded-md'></div>    
        </div></div>
        <button
            type="submit"
            className="bg-black text-white text-center rounded-md text-tab font-medium  my-10 w-sub-signup-width h-14"
          >
            Verify
          </button>
    </div>
  )
}

export default Verify