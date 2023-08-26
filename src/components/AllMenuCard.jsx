import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants/constants";
import { CardSkeleton } from "./CardSkeleton";
import { FETCH_MENU_URL } from "../constants/constants";
import { menuCards } from "../constants/constants";
import SingleMenuCard from "./SingleMenuCard";
import { filterMenu } from "../utils/helper";
import SearchInput from "./Search";
import FilterModal from "./FilterModal";
const RestaurantMenu = () => {
  const [loading, setLoading] = useState(false);
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  const [filteredMenu, setFilteredMenu] = useState(menuCards);
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

  const handleSearch = () => {
    const data = filterMenu(searchText, allMenu);
    setFilteredMenu(data);
  };

  return loading ? (
    <CardSkeleton />
  ) : (
    <>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
     
      <div className='container mx-auto  dark:text-brand-beige md:mx-auto'>
        {filteredMenu.map((item) => (
          <SingleMenuCard
            key={item?.card?.info?.id}
            {...item?.card?.info}
            item={item?.card?.info}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
