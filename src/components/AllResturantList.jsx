import React from "react";
import SingleResturantCard from "./SingleResturantCard";
import { Link } from "react-router-dom";
import { filterData, filterCusine } from "../utils/helper";
import { useState, useEffect } from "react";
import { CardSkeleton } from "./CardSkeleton";
import { resturantList } from "../constants/constants";

const AllResturantList = () => {
  const allUniqueCusineList = [
    "all",
    ...new Set(
      resturantList.flatMap((restaurant) => restaurant?.info?.cuisines)
    ),
  ];
  const [filteredCusine, setfilteredCuisine] = useState(allUniqueCusineList);
  const [category, setCategory] = useState();

  const [allResturants, setAllResturants] = useState(resturantList);
  const [filteredResturants, setFilteredResturants] = useState(resturantList);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

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
      <div className='flex w-full mt-2 mb-9 items-center space-x-2 md:w-1/3 mx-auto'>
        <input
          className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch();
          }}
        ></input>
        <button
          type='button'
          onClick={handleSearch}
          className='rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          Search
        </button>
      </div>

      <div className='mx-2 my-2'>
        {filteredCusine.slice(0, 15).map((item) => {
          return (
            <button
              className='bg-white text-black font-semibold rounded-3xl border-2 border-black px-3 p-2 m-2 active:border-none focus:bg-red-500 focus:border-red-500 focus:text-white focus:font-bold'
              onClick={() => handleFilter(item)}
            >
              {item}
            </button>
          );
        })}
      </div>

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
