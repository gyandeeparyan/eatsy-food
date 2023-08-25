import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { setSortBy, setCostFilter, setRatingFilter, toggleCuisineFilter, setDeliveryFilter, sortAndFilterItems , setSelectedSortSubcategory,
  setSelectedCostSubcategory,
  setSelectedRatingSubcategory,
  setSelectedCuisineSubcategory,
  setSelectedDeliverySubcategory,} from '../utils/filterSlice';
import { X } from "lucide-react";
const filterLabels = {
  sortBy: { id: 'sort', label: 'Sort By' },
  ratings: { id: 'ratings', label: 'Ratings' },
  cuisines: { id: 'cuisines', label: 'Cuisines' },
  costForTwo: { id: 'cost', label: 'Cost for Two' },
  delivery: { id: 'delivery', label: 'Delivery' },
};

const filterSubcategories = {
  sortBy: ['Low to High', 'High to Low', 'Fastest Delivery'],
  ratings: ['4.5+', '4.0+', '3.5+'],
  cuisines: ['Indian', 'Italian', 'Chinese'],
  costForTwo: ['Rs. 300 - Rs. 600', 'Greater than Rs. 600', 'Less than Rs. 300'],
  delivery: ['Fastest Delivery'],
};

const FilterModal = ({ isOpen, onClose }) => {

  const [currentCategory, setCurrentCategory] = useState(null);
  const initialSubcategory = Object.keys(filterSubcategories)[0];
  const [currentSubcategory, setCurrentSubcategory] = useState(initialSubcategory);

  const dispatch = useDispatch();

  const handleSubcategoryClick = (subcategory) => {
    
    if (currentCategory === 'sortBy') {
      dispatch(setSortBy(subcategory)); // Dispatch sort action
      dispatch(sortAndFilterItems()); // Dispatch combined sort and filter action
    } else if (currentCategory === 'ratings') {
      dispatch(setRatingFilter(subcategory)); // Dispatch rating filter action
      dispatch(sortAndFilterItems()); // Dispatch combined sort and filter action
    } else if (currentCategory === 'cuisines') {
      dispatch(toggleCuisineFilter(subcategory)); // Dispatch cuisine filter action
      dispatch(sortAndFilterItems()); // Dispatch combined sort and filter action
    } else if (currentCategory === 'costForTwo') {
      dispatch(setCostFilter(subcategory)); // Dispatch cost filter action
      dispatch(sortAndFilterItems()); // Dispatch combined sort and filter action
    } else if (currentCategory === 'delivery') {
      dispatch(setDeliveryFilter(subcategory)); // Dispatch delivery filter action
      dispatch(sortAndFilterItems()); // Dispatch combined sort and filter action
    }
    if (currentCategory === 'sortBy') {
      dispatch(setSelectedSortSubcategory(subcategory));
    } else if (currentCategory === 'costForTwo') {
      dispatch(setSelectedCostSubcategory(subcategory));
    } else if (currentCategory === 'ratings') {
      dispatch(setSelectedRatingSubcategory(subcategory));
    } else if (currentCategory === 'cuisines') {
      dispatch(setSelectedCuisineSubcategory(subcategory));
    } else if (currentCategory === 'delivery') {
      dispatch(setSelectedDeliverySubcategory(subcategory));
    }
  };
  


  
  return (
    <>
      {isOpen && (
        <div className='fixed md:inset-0 flex w-full h-96 md:h-5/6  md:items-center bottom-0 md:justify-center z-50'>
          <div
            onClick={onClose}
            className='fixed inset-0 bg-black opacity-60'
          ></div>
          <div className='bg-white   w-screen md:p-4 rounded-t-3xl md:rounded-3xl md:w-[35%] z-50'>
            {/* <h2 className="text-lg font-semibold mb-2">Modal Content</h2>
            <p>This is the content of the modal.</p>
             */}

            <div className='flex justify-between'>
              <h2 className="mt-4 m-3 font-bold text-2xl text-slate-700">Filters</h2>
              <button
                onClick={onClose}
                className='mt-4 bg-red-500 hover:bg-red-400 text-white m-3 p-2 rounded-full'
              >
                <X />
              </button>
            </div>
            

            <div className="flex">
            <div className='w-1/2 flex flex-col '>
             
            {Object.keys(filterLabels).map(category => (
    <label
      key={category}
      className={`p-1 m-1 rounded-lg cursor-pointer ${
        currentCategory === category
          ? 'bg-red-500 text-white font-semibold'
          : 'bg-white text-black'
      }`}
    >
      <input
        type="radio"
        name="category"
        value={category}
        checked={currentCategory === category}
        onChange={() => {
          setCurrentCategory(category);
          setCurrentSubcategory(null); // Reset subcategory on category change
        }}
        className="hidden"
      />
      {filterLabels[category].label}
    </label>
  ))}

            </div>

           
              <div className='w-1/2 flex flex-col'>
              {currentCategory &&
    filterSubcategories[currentCategory].map(subcategory => (
      <label
        key={subcategory}
        className={`p-1 m-1 rounded-lg cursor-pointer ${
          currentSubcategory === subcategory
            ? 'bg-red-500 text-white font-semibold'
            : 'bg-white text-black'
        }`}
      >
        <input
          type="radio"
          name="subcategory"
          value={subcategory}
          checked={currentSubcategory === subcategory}
          onChange={() => handleSubcategoryClick(subcategory)}
          className="hidden"
        />
        {subcategory}
      </label>
    ))}
              </div>


            </div>


          </div>
        </div>
      )}
    </>
  );
};

export default FilterModal;
