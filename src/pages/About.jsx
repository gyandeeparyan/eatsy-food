import React from 'react'

function About() {
  return (
    <section className='mb-[200px]'>
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto  max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            People who made it successful
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error
            explicabo voluptatum nihil possimus veritatis eos culpa.
          </p>
        </div>

        <div className="mt-8 ml-[150px] grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
        <div class="flex items-center space-x-2">
  <img
    class="inline-block h-12 w-12 rounded-full"
    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
    alt="Dan_Abromov"
  />
  <span class="flex flex-col">
    <span class="text-sm font-medium text-gray-900">Dan Abromov</span>
    <span class="text-sm font-medium text-gray-500">@dan_abromov</span>
  </span>
</div>

<div class="flex items-center space-x-2">
  <img
    class="inline-block h-12 w-12 rounded-full"
    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
    alt="Dan_Abromov"
  />
  <span class="flex flex-col">
    <span class="text-sm font-medium text-gray-900">Dan Abromov</span>
    <span class="text-sm font-medium text-gray-500">@dan_abromov</span>
  </span>
</div>

<div class="flex items-center space-x-2">
  <img
    class="inline-block h-12 w-12 rounded-full"
    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
    alt="Dan_Abromov"
  />
  <span class="flex flex-col">
    <span class="text-sm font-medium text-gray-900">Dan Abromov</span>
    <span class="text-sm font-medium text-gray-500">@dan_abromov</span>
  </span>
</div>

          
        </div>
        <div className="mt-8 text-center md:mt-16">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            MORE PROJECTS
          </button>
        </div>
      </div>
    </section>
  )
}


export default About