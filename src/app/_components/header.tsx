import React from 'react';

const Header = () => {
  return (
    <header className="">
        <div className="flex px-4 py-2 pr-20 space-x-4 justify-end">
          <span>Help</span>
          <span>Orders & Returns</span>
        </div>
        <div className="flex px-4 py-2 justify-between items-center">
        <div className="flex items-center">
        <h2 className="text-xl md:text-heading  font-bold font-inter text-left">
            ECOMMERCE
          </h2>
        </div>
        <div className="flex justify-center flex-grow">
          <span className="mr-10 text-tab font-bold">Categories</span>
          <span className="mr-10 text-tab font-bold">Sale</span>
          <span className="mr-10 text-tab font-bold">Clearance</span>
          <span className="mr-10 text-tab font-bold">New Stock</span>
          <span className='text-tab font-bold'>Trending</span>
        </div>
        <div className="flex space-x-4">
          <span>Search</span>
          <span>Cart</span>
        </div>
      </div>
      <div className='bg-header-bg h-9'>
      <div className="flex items-center justify-center ml-20 bg-header-bg pt-1 rounded-md">
      <span className="text-xl mr-2">&lt;</span>
      <span className="mr-2">Get 10% off on business sign up</span>
      <span className="text-xl ml-2">&gt;</span>
    </div>
      </div>
    </header>
  );
};

export default Header;
