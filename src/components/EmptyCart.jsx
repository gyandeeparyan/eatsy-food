import React from "react";
import cooking from '../../public/cooking.svg'
const EmptyCart = () => {
  return (
    <>
      <div className='p-12 mb-20 mt-4'>
        <img
          className='mx-auto rounded-3xl mt-2 mb-4 md:w-[40%]'
          src={cooking} alt=''
        />
        <p className=' text-3xl text-center text-brand-red'>
        जैसा अन्न वैसा मन
        <br />
        as is the food , so is the mind
        </p>
      </div>
    </>
  );
};

export default EmptyCart;
