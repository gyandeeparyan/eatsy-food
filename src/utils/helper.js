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
  

