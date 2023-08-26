

import { IMG_CDN_URL, MENU_IMG_CDN_URL } from '../constants/constants'


import React from 'react'
import { Trash, Heart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'



function SingleMenuCard({name,id,category,description,imageId,price,ratings,item}) {

const dispatch=useDispatch()


const handleFoodItem=(foodItem)=>{
dispatch(addItem(foodItem))
if ("vibrate" in navigator) {
  // vibration API supported
  navigator.vibrate(50);
}


console.log(foodItem);
}


  return (
    <div className="mx-auto flex max-w-3xl flex-col  my-4 p-2 px-2 sm: sm:px-2">
     
      <ul className="flex flex-col divide-y divide-gray-200">
  
          <li key={id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2  sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded-2xl object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={IMG_CDN_URL+imageId}
                alt={name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
                    <p className="text-sm"></p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{price/100}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" 
                  onClick={()=>handleFoodItem(item)}
                  className=" bg-red-500 text-white font-semibold items-center space-x-2 px-2 py-1 rounded-md">
                    
                    ADD TO CART
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        
      </ul>
    
      <div className="flex justify-end space-x-4">
       
      </div>
    </div>
  )
}

export default SingleMenuCard