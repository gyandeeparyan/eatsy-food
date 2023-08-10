import React from "react";
import { Star } from "lucide-react";
import { IMG_CDN_URL } from "../constants/constants";

const SingleResturantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  areaName,
}) => {
  return (
    <div key={id} className='w-[300px] rounded-2xl border mb-8'>
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt='resturant image'
        className='h-[200px] w-full rounded-2xl object-cover'
      />
      <div className='p-4'>
        <h1 className='inline-flex items-center text-lg font-bold'>
          {name} &nbsp; <Star className='h-4 w-4 ml-12' />
          <span className='mx-1'>{avgRating}</span>
        </h1>

        <div className='mt-4'>
       { cuisines.map((cusine)=>{
return(
 <span className='mb-2 mr-2 inline-block rounded-full  bg-gray-300 px-3 py-1 text-[10px] font-bold text-gray-900'>
            {cusine}
          </span>
)})}
          <br />
          <span className='mb-2 mr-2 inline-block rounded-full bg-orange-400 px-3 py-1 text-[10px] font-bold text-gray-900'>
            {areaName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleResturantCard;