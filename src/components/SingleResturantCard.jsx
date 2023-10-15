import React from "react";
import { Star } from "lucide-react";
import { IMG_CDN_URL, IMG_CDN_URL_SM } from "../constants/constants";

const SingleResturantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  areaName,
  sla,
}) => {
  return (
    <div key={id} className='w-[300px] rounded-xl mb-8 '>
      <picture>
        <source
          className='h-[200px] w-full rounded-lg object-cover'
          media='(max-width: 450px)'
          srcSet={IMG_CDN_URL_SM + cloudinaryImageId}
        />
        <source
          className='h-[200px] w-full rounded-lg object-cover'
          media='(min-width: 900px)'
          srcSet={IMG_CDN_URL + cloudinaryImageId}
        />
        <img
          src={IMG_CDN_URL_SM + cloudinaryImageId}
          alt='resturant-image'
          className='h-[200px] w-full rounded-lg object-cover'
        />
      </picture>
      <div className='p-4'>
        <p className='inline-flex items-center text-lg line-clamp-2 font-bold'>
          {name} &nbsp;{" "}
          <Star color='green' fill='green' className='h-4 w-4 ml-12' />
          <span className='mx-1'>{avgRating}</span>
        </p>

        <div key={id} className='mt-4'>
          {cuisines.slice(0, 3).map((cusine) => {
            return (
              <span className='mb-2 mr-2 inline-block rounded-full  bg-gray-300 px-3 py-1 text-[10px] font-bold text-gray-900'>
                {cusine}
              </span>
            );
          })}
          <br />
          <span className='mb-2 mr-2 inline-block rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white'>
            {areaName}
          </span>
          <span className='mb-2 mr-2 inline-block rounded-full bg-brand-purple px-3 py-1 text-[10px] font-bold text-white'>
            {sla.deliveryTime} minutes
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleResturantCard;
