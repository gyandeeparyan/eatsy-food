import { Heart, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart ,decrease,removeItem ,increase} from '../utils/cartSlice';
import { IMG_CDN_URL } from '../constants/constants';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';
function Cart() {

const cartItems=useSelector((store)=>store.cart)
const dispatch=useDispatch()
const [empty,setEmpty]=useState(cartItems.isEmpty);
const handleClear=()=>{
dispatch(clearCart())
setEmpty(true)
}


const handleOrderNow=()=>{
  handleClear()

}

const handleRemove=(item)=>{
if(cartItems.items.length === 1){
  
  setEmpty(true)
}  
dispatch(removeItem(item))
if ("vibrate" in navigator) {
  // vibration API supported
  navigator.vibrate(50);
}
}


useEffect(()=>{
if(cartItems.items.length ===0){
  setEmpty(true)
}
},[cartItems.items])

  return (
 
    empty? <EmptyCart/>:( <div className="mx-auto max-w-7xl px-2 lg:px-0">
    <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
     
    
      <div className="flex flex-col md:flex-row justify-center ">
      
        <section aria-labelledby="cart-heading" className="rounded-lg ml-12 lg:col-span-6">
        <button 
        onClick={handleClear}
        className='bg-red-500 text-white hover:bg-red-400 px-3 py-1 font-bold rounded-lg mt-5'>
          CLEAR CART
      </button>
          <ul role="list" className="">
        
            {cartItems.items.map((product, productIdx) => (
              <div key={product?.id} className="">
                <li className="flex  py-6 sm:py-6 ">
                  <div className="flex-shrink-0">
                    <img
                      src={IMG_CDN_URL+product?.imageId}
                      alt={product?.name}
                      className="sm:h-38 sm:w-38 h-24 w-24 rounded-xl object-contain object-center"
                    />
                  </div>

                  <div className="ml-4 flex  flex-1 flex-row justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <p className="font-semibold  dark:bg-brand-coal dark:text-brand-beige text-black">
                              {product?.name}
                            </p>
                          </h3>
                        </div>
                        
                        
                         
                          <p className="text-sm font-medium  dark:bg-brand-coal dark:text-brand-beige text-gray-900">
                            ₹{product?.price/100}
                          </p>
                          <button 
                    onClick={()=>handleRemove(product)}
                    type="button" className="flex border-2 mt-2 border-red-500 items-center rounded-lg  text-red-500 hover:bg-red-500  hover:text-white px-2 py-1">
                     
                      <span className="text-sm font-bold ">Remove</span>
                    </button>
                        
                      </div>
                    </div>
                  </div>
                </li>
                
                  
                    {/* <button
                      onClick={()=>{
                        dispatch(decrease(product))
                      }}
                     type="button" className="h-7 w-7">
                      -
                    </button>
                    <input
                      type="text"
                      className="mx-1 h-7 w-9 rounded-md border text-center"
                      defaultValue={cartItems?.amount}
                    />
                    <button 
                    onClick={()=>{
                      dispatch(increase(product))
                    }}
                    type="button" className="flex h-7 w-7 items-center justify-center">
                      +
                    </button> */}
                  
                  <div className="ml-4 flex text-sm">
                   
                  </div>
                
              </div>
            ))}
          </ul>
        </section>
        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="mt-16 rounded-md  dark:bg-brand-coal dark:text-brand-beige bg-white lg:col-span-4 lg:mt-0 lg:p-0"
        >
          <h2
            id="summary-heading"
            className=" border-b  dark:text-brand-beige border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
          >
            Price Details
          </h2>
          <div>
            <dl className=" space-y-1 px-2 py-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm  dark:text-brand-beige text-gray-800">Price ({cartItems?.items?.length} item)</dt>
                <dd className="text-sm font-medium  dark:text-brand-beige text-gray-900">₹{(cartItems?.total)/100}</dd>
              </div>
             
              <div className="flex items-center justify-between py-4">
                <dt className="flex text-sm  dark:text-brand-beige text-gray-800">
                  <span>Delivery Charges</span>
                </dt>
                <dd className="text-sm font-bold ml-2  dark:text-brand-green text-green-700">Free</dd>
              </div>
              <div className="flex items-center justify-between border-y border-dashed py-4 ">
                <dt className="text-base font-medium  dark:text-brand-beige text-gray-900">Total Amount</dt>
                <dd className="text-base font-medium  dark:text-brand-beige ml-2 text-gray-900">₹{(cartItems?.total)/100}</dd>
                
              </div>
            </dl>
           <Link to='/orderPlaced'>
           <button 
        onClick={handleOrderNow}
        className='bg-green-500 dark:bg-brand-green text-white  hover:bg-green-400 px-3 py-1 font-bold rounded-lg mt-5'>
          ORDER NOW
      </button>
           </Link> 
          </div>
        </section>
      </div>
    </div>
  </div>)
   

   
  )
}

export default Cart;