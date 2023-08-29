import React from "react";

const EmptyCart = () => {
  return (
    <>
      <div className='p-12 mb-20 mt-4'>
        <img
          className='mx-auto rounded-3xl mt-2 mb-4 md:w-[40%]'
          src='https://cdn.dribbble.com/users/2243442/screenshots/11362056/media/c9432283d2d6ba1a23f2fcd6169f2983.gif'
          alt=''
        />
        <p className='font-bold text-5xl text-center text-red-400'>
          GOOD FOOD IS ALWAYS
          <br />
          COOKING
        </p>
      </div>
    </>
  );
};

export default EmptyCart;
