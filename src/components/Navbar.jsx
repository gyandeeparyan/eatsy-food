import { useDispatch } from 'react-redux';
"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingBag ,Sun,Moon} from 'lucide-react';
import { toggleTheme } from '../utils/appSlice';



const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  // {
  //   name: "SignIn",
  //   href: "/signin",
  // },
  
];

function Navbar() {
const [isMenuOpen, setIsMenuOpen] = React.useState(false);

const cartItems =useSelector(store=>store.cart.items);
const dark=useSelector(store=>store.app.isDark);
const dispatch = useDispatch();
//function to toggle dark mode

const toggleDarkMode = () => {
  dispatch(toggleTheme())
  
  {dark ? document.querySelector('html').classList.remove("dark") : document.querySelector('html').classList.add("dark")}
}


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

   

    <div className=' w-full sticky top-0 bg-white  dark:bg-brand-coal dark:text-brand-beige z-40 mb-6'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
        <div className='inline-flex items-center space-x-2'>
          <Link to={"/"}><span className='font-extrabold text-5xl text-brand-red '>eatsy</span></Link>
          <Link to={"/cart"}>
          <div className="flex mt-3 lg:hidden">
                <ShoppingBag />
                <span className="bg-red-500 px-2 ml-1  rounded-full  text-white"> {cartItems.length} </span>
                
          </div>
          </Link>
          
          
        
          
        </div>
       
        <div className='hidden lg:block '>
          <ul className='inline-flex space-x-8 '>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className='text-sm font-semibold text-gray-800  dark:text-brand-beige hover:text-gray-900'
                >
                  {item.name}
                </Link>

              </li>
            ))}

            <li>
              <Link to={"/cart" }
               className='text-sm font-semibold  text-gray-800 hover:text-gray-900'
               >
                <div className="flex">
                <ShoppingBag color="grey" />
                <span className="bg-red-500 px-2 ml-1 rounded-full  text-white"> {cartItems.length} </span>
                </div>
                  
              </Link>
            </li>
            <li>
{dark?<Sun onClick={toggleDarkMode} className='h-6 w-6cursor-pointer text-brand-yellow' />:<Moon onClick={toggleDarkMode} className='h-6 w-6  text-gray-800  cursor-pointer' />}
            </li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <a href="https://github.com/gyandeeparyan/eatsy-food">
          <button
            type='button'
            className='rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            Github 
          </button>
          </a>
          
        </div>
        <div className='lg:hidden flex '>
        <div className='mt-3 '>{dark?<Sun onClick={toggleDarkMode} className='h-6 w-6cursor-pointer text-brand-yellow' />:<Moon onClick={toggleDarkMode} className='h-6 w-6  text-gray-800  cursor-pointer' />}</div>
          
          <Menu onClick={toggleMenu} className='h-6 w-6 mt-3 ml-2 cursor-pointer' />
        </div>
       
        {isMenuOpen && (
          <div className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden'>
                
            <div className='divide-y-2 divide-gray-50 rounded-2xl   dark:bg-brand-coal dark:text-brand-beige bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pb-6 pt-5'>
                <div className='flex items-center justify-between'>
                  <div className='inline-flex items-center space-x-2'>
                  <Link to={"/"}><span className='font-extrabold text-5xl text-brand-red  '>eatsy</span></Link>
                  </div>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      onClick={toggleMenu}
                      className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                    >
                      <span className='sr-only'>Close menu</span>
                      <X className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-4'>
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className='-m-3  flex items-center dark:bg-brand-coal dark:text-brand-beige rounded-md p-3 text-sm font-semibold'
                      >
                        <span className='ml-3 text-base  dark:text-brand-beige font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </Link>
                    ))}
                    <Link to={"/cart"}>
          <div className="flex  ml-2">
                <ShoppingBag />
                <span className="bg-red-500 px-2 ml-1  rounded-full  text-white"> {cartItems.length} </span>
          </div>
          </Link>
         
                  </nav>
                </div>
         
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
}

export default Navbar;