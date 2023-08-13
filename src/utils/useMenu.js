import { useState,useEffect } from "react";

import { FETCH_MENU_URL } from './../constants/constants';

const useMenu=(resId)=>{

    const [restaurant, setRestauraunt] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        try {
          setLoading(true);
          const data = await fetch(
        FETCH_MENU_URL+`${resId}+&submitAction=ENTER`
          );
          const json = await data.json();
          console.log(json.data);
          console.log(menuCards);
          console.log(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
          setAllMenu(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
          setFilteredMenu(menuCards)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          setAllMenu(menuCards)
          setFilteredMenu(menuCards)
          
         
          console.log(error);
          
        }
        
      }
    
  
    return restaurant;


}
export default useRestaurant;