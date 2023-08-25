import React from "react";
import SingleResturantCard from "./SingleResturantCard";
import { Link } from "react-router-dom";
import { filterData, filterCusine } from "../utils/helper";
import { useState, useEffect } from "react";
import { CardSkeleton } from "./CardSkeleton";
import { resturantList } from "../constants/constants";
import SearchInput from "./Search";

import { filtertext } from './../constants/constants';
import FilterLabels from "./FilterLabels";
import FilterModal from "./FilterModal";
import { useSelector } from "react-redux";

const AllResturantList = () => {

const resturant=useSelector((store)=>store.filter.items)  

const allUniqueCusineList = [
    "all",
    ...new Set(
      resturantList.flatMap((restaurant) => restaurant?.info?.cuisines)
    ),
  ];
  const [filteredCusine, setfilteredCuisine] = useState(allUniqueCusineList);
  const [category, setCategory] = useState();

  const [allResturants, setAllResturants] = useState(resturant);
  const [filteredResturants, setFilteredResturants] = useState(resturant);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const filterLabels= filtertext

  const url = `https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.572646&lng=88.36389500000001&carousel=true&third_party_vendor=1`;
  // useEffect(() => {
  //   getResturants();
  // }, []);

  // const getResturants = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await fetch(url);
  //     const json = await data.json();
  //     setAllResturants(
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setFilteredResturants(
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setLoading(false);
  //     console.log(
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false)
  //     setAllResturants(resturantList);
  //     setFilteredResturants(resturantList);
  //   }
  // };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleSearch = () => {
    const data = filterData(searchText, allResturants);
    setFilteredResturants(data);
  };

  const handleFilter = (item) => {
    console.log(item);
    setCategory(item);
    console.log(item);
    const data = filterCusine(item, allResturants);
    setFilteredResturants(data);
  };

  return loading ? (
    <CardSkeleton />
  ) : (
    <>
    <SearchInput openModal={openModal} searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}  />

      <div className='mx-2 my-2  whitespace-nowrap overflow-x-auto scrollbar-hide '>
        {filteredCusine.map((item) => {
          return (
            <button
              className='bg-white text-black font-semibold rounded-3xl border-2 border-black px-4 py-2  m-2 active:border-none focus:bg-red-500 focus:border-red-500 focus:text-white focus:font-bold'
              onClick={() => handleFilter(item)}
            >
              {item}
            </button>
          );
        })}

{/* <div className="flex overflow-x-auto ">
<button
              className='bg-white text-black  font-semibold rounded-xl border-2 border-gray-300 p-2  m-2 active:border-none  focus:border-red-500 '
              onClick={openModal}
            >
          Filter 
            </button>
        <button
              className='bg-white text-black font-semibold rounded-xl border-2 border-gray-300 p-2  m-2 active:border-none focus:bg-red-500 focus:border-red-500 focus:text-white focus:font-bold'
              onClick={() => handleFilter(item)}
            >
            Sort By
            </button>
       <FilterLabels filterLabels={filterLabels}/>
  </div> */}
         
      </div>
      <FilterModal isOpen={isModalOpen} onClose={closeModal} />
      <div className='container m-10 grid grid-cols-1 md:grid-cols-4'>
        {filteredResturants.map((resturant) => {
          return (
            <Link
              to={"/resturant/" + resturant.info.id}
              key={resturant.info.id}
            >
              <SingleResturantCard {...resturant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AllResturantList;
