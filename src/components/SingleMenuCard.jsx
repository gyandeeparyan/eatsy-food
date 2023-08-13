import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { IMG_CDN_URL, MENU_IMG_CDN_URL } from '../constants/constants'
import { Star } from 'lucide-react'


function SingleMenuCard({name,id,category,description,imageId,price,ratings}) {
  return (
    <div className='container mx-5'>
   
<div className="flex max-w-2xl mt-6 mb-6 flex-row  rounded-lg shadow-md border-2 md:flex-row mx-auto items-center">
      <div className="h-[150px] w-[50%] md:h-[200px] md:w-[50%]">
        <img
          src={IMG_CDN_URL+imageId}
          alt="food"
          className="h-full w-full rounded-lg object-cover mx-2"
        />
      </div>
      <div>
        <div className="p-4 mx-2">
          <h1 className="inline-flex items-center text-lg font-semibold">
           {name}
          </h1>
          <br />
          <h1 className="inline-flex items-center text-lg font-semibold">
          ₹ {price/100}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
           {description}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-red-200 px-3 py-1 text-[10px] font-bold text-gray-900">
              {category}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-bold text-gray-900">
            {ratings?.aggregatedRating?.rating} <span className='text-green-600'>★</span> 
           
         
            </span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            
          <button
      type="button"
      class="mt-4 w-full rounded-lg bg-red-500 px-2 py-1.5 text-sm font-bold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      ADD TO CART
    </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default SingleMenuCard