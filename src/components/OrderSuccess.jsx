import React from "react";
import { CheckCircle2 } from 'lucide-react';
import Delivery from '../../public/delivery.svg'
const OrderSuccess = () => {
  return (
    <div className='mt-[150px]  mb-[150px]'>
        
      <img
        className='rounded-2xl mx-auto  w-[70%] md:w-[30%] '
        src={Delivery}
        alt='Delivery Image'
      />
      <div className="flex justify-center">
      <p className='dark:text-brand-beige mt-5 text-3xl text-center'>order placed </p>  
    
      </div>
      
      <p className='dark:text-brand-red text-3xl  text-center mt-2'>tell me what you eat, and i will tell you who you are.</p> 
    </div>
  );
};

export default OrderSuccess;
