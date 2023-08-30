import React from "react";
import { CheckCircle2 } from 'lucide-react';
const OrderSuccess = () => {
  return (
    <div className='mt-[150px] md:mt-1 mb-[150px]'>
        
      <img
        className='rounded-2xl mx-auto  w-[70%] md:w-[30%] '
        src='https://i.ibb.co/bQfCRqq/output-onlinegiftools-2-2.gif'
        alt=''
      />
      <div className="flex justify-center">
      <p className='dark:text-brand-beige mt-1 text-3xl text-center'>order placed </p>  
      <CheckCircle2 className='mx-2 ' size={50} stroke="white" fill="green"/>
      </div>
      
      <p className='dark:text-brand-red text-3xl text-center mt-2'>tell me what you eat, and i will tell you who you are.</p> 
    </div>
  );
};

export default OrderSuccess;
