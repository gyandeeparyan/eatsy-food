import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <section className='mb-[200px] mt-12 mx-5 flex items-center justify-center'>
      <div className='mx-auto max-w-7xl px-2 lg:px-0'>
        <div className='mx-auto  max-w-3xl md:text-center'>
          <h2 className='text-3xl font-bold leading-tight text-black dark:text-brand-beige sm:text-4xl lg:text-5xl lg:leading-tight'>
            YOU ARE , WHAT YOU EAT
          </h2>
          <p className='mx-auto p-4 rounded-lg mt-4 max-w-2xl text-left border-2 border-brand-red text-xl text-red-400'>
            "Welcome to eatsy Indulge your cravings with our cutting-edge food
            ordering app, crafted as an academic endeavor to mirror the best
            features of your favorite platforms. Discover delectable delights
            from local restaurants, just like Zomato and Swiggy. While we're not
            for real-world use, we're your one-stop destination to explore the
            digital flavors of food tech innovation!"
          </p>
        </div>

        <div className='mt-8 md:ml-[150px] grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12'></div>
        <div className='mt-8 text-center md:mt-16'>
          <a href='https://gyandeeparyan-dev.netlify.app/#projects' target="_blank">
            <button
              type='button'
              className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
            >
              MORE PROJECTS
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
