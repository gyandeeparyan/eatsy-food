export function filterData(searchText, resturants) {
    const filterData = resturants.filter((resturant) =>
      resturant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }
  

  export function filterMenu(searchText, allMenu) {
    const filterData = allMenu.filter((menu) =>
      menu?.card?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }
  
  export const filterCusine = (category,allResturants) => {
    if (category === 'all') { 
    console.log(category);
    return(allResturants);
    }
    else{
      const newItems = allResturants.filter((item) => item?.info?.cuisines.includes(category))
      console.log(newItems);
      return (newItems);
    }
 
  };



