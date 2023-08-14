import { Heart, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart ,removeItem } from '../utils/cartSlice';
import { IMG_CDN_URL } from '../constants/constants';

function Cart() {

const cartItems=useSelector((store)=>store.cart.items)
const dispatch=useDispatch()

const handleClear=()=>{
dispatch(clearCart())
}


const handleRemove=(item)=>{
dispatch(removeItem(item))
}

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
       
      
        <div className="flex flex-col md:flex-row justify-center ">
        
          <section aria-labelledby="cart-heading" className="rounded-lg ml-12 lg:col-span-6">
          <button 
          onClick={handleClear}
          className='bg-red-300 px-3 py-1 font-bold rounded-lg mt-5'>
            CLEAR CART
        </button>
            <ul role="list" className="">
          
              {cartItems.map((product, productIdx) => (
                <div key={product.id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={IMG_CDN_URL+product.imageId}
                        alt={product.name}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-xl object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <p className="font-semibold text-black">
                                {product.name}
                              </p>
                            </h3>
                          </div>
                          
                          
                           
                            <p className="text-sm font-medium text-gray-900">
                              ₹{product.price/100}
                            </p>
                           
                          
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex">
                    <div className="min-w-24 flex">
                      <button type="button" className="h-7 w-7">
                        -
                      </button>
                      <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        defaultValue={1}
                      />
                      <button type="button" className="flex h-7 w-7 items-center justify-center">
                        +
                      </button>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button 
                      onClick={()=>handleRemove(product)}
                      type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price (3 item)</dt>
                  <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
                </div>
               
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
                </div>
              </dl>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Cart;