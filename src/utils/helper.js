export function filterData(searchText, resturants) {
    const filterData = resturants.filter((resturant) =>
      resturant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }
  