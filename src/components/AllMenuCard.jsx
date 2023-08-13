import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants/constants"
import { CardSkeleton } from './CardSkeleton';
import { FETCH_MENU_URL } from "../constants/constants";
import {menuCards} from "../constants/constants";
import SingleMenuCard from "./SingleMenuCard";
import { filterMenu } from "../utils/helper";

const RestaurantMenu = () => {

  const [loading,setLoading]=useState(false)
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const[filteredMenu,setFilteredMenu] =useState(menuCards);
  const [allMenu, setAllMenu] = useState(menuCards);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   try {
  //     setLoading(true);
  //     const data = await fetch(
  //   FETCH_MENU_URL+`${resId}+&submitAction=ENTER`
  //     );
  //     const json = await data.json();
  //     console.log(json.data);
  //     console.log(menuCards);
  //     console.log(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  //     setAllMenu(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  //     setFilteredMenu(menuCards)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //     setAllMenu(menuCards)
  //     setFilteredMenu(menuCards)
      
     
  //     console.log(error);
      
  //   }
    
  // }


  const handleSearch =()=>{
    const data = filterMenu(searchText, allMenu);
    setFilteredMenu(data);
  }

  return loading ? (
    <CardSkeleton />
  ) : (
<>

<div className='flex w-full mt-2 mb-2 items-center space-x-2 md:w-1/3 mx-auto'>
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
          className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          Search
        </button>
      </div>






<div className="container mx-auto md:mx-auto">
       {(filteredMenu).map((item) => (
      <SingleMenuCard key={item?.card?.info?.id} {...item?.card?.info}/>
      ))}
    </div>
</>
   
  
  );
};

export default RestaurantMenu;