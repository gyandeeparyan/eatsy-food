import React from "react";
import SingleResturantCard from "./SingleResturantCard";
import { Link } from "react-router-dom";
import { filterData, filterCusine } from "../utils/helper";
import { useState, useEffect } from "react";
import { CardSkeleton } from "./CardSkeleton";
import { resturantList } from "../constants/constants";
import SearchInput from "./Search";
import { setSearchedItem ,setCusineFiltered, sortAndFilterItems } from "../utils/filterSlice";
import { filtertext } from "./../constants/constants";
import FilterLabels from "./FilterLabels";
import FilterModal from "./FilterModal";
import { useDispatch, useSelector } from "react-redux";

const AllResturantList = () => {
  const resturant = useSelector((store) => store.filter.items);
  const dispatch =useDispatch()
  const allUniqueCusineList = [
    "all",
    ...new Set(
      resturantList.flatMap((restaurant) => restaurant?.info?.cuisines)
    ),
  ];
  const [filteredCusine, setfilteredCuisine] = useState(allUniqueCusineList);
  const [category, setCategory] = useState();

  const [allResturants, setAllResturants] = useState(
    useSelector((store) => store.filter.items)
  );
  const [filteredResturants, setFilteredResturants] = useState(
    useSelector((store) => store.filter.items)
  );
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const filterLabels = filtertext;

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
  
  const locationUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a722c260famshd1e0217900ba4b5p10d517jsn42b3438f1549',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


const handleLocation= async()=>{
  try {
    
    const response = await fetch(locationUrl, options);
    const result = await response.text();
    console.log(result);
   setLoading(false)
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.error(error);
  }
}

useEffect(()=>{
setLoading(true)
dispatch(sortAndFilterItems())
handleLocation()


},[])




  const openModal = () => {
    setIsModalOpen(true);
    console.log(typeof resturant);
    console.log(typeof filteredResturants);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    const data = filterData(searchText, allResturants);
   dispatch(setSearchedItem(data))
  };

  const handleFilter = (item) => {
   
    const data = filterCusine(item, allResturants);
    dispatch(setCusineFiltered(data))
  };

  return loading ? (
    <CardSkeleton />
  ) : (
    <>
      <SearchInput
        openModal={openModal}
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />

      <div className='mx-2 my-2  whitespace-nowrap overflow-x-auto scrollbar-hide '>
        {filteredCusine.map((item) => {
          return (
            <button
              className='bg-white text-gray-900  rounded-3xl border-2 border-slate-200 px-4 py-2  m-2 active:border-none focus:bg-red-500 focus:border-red-500 focus:text-white focus:font-bold'
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
      <div className='container  mx-[60px] my-6 md:mx-[42px] grid grid-cols-1  dark:bg-brand-coal dark:text-brand-beige md:grid-cols-4'>
        {resturant.map((resturant) => {
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
