import { createSlice } from "@reduxjs/toolkit";
import { resturantList } from "../constants/constants";

const SORT_OPTIONS = {
  LOW_TO_HIGH: "Low to High",
  HIGH_TO_LOW: "High to Low",
  FASTEST_DELIVERY: "Fastest Delivery",
};

const COST_OPTIONS = {
  RS_300_TO_RS_600: "Rs. 300 - Rs. 600",
  GREATER_THAN_RS_600: "Greater than Rs. 600",
  LESS_THAN_RS_300: "Less than Rs. 300",
};

const RATING_OPTIONS = {
  RATING_4_5_PLUS: 4.5,
  RATING_4_0_PLUS: 4.0,
  RATING_3_5_PLUS: 3.5,
};

// const CUISINE_OPTIONS = {
//   INDIAN: 'indian',
//   ITALIAN: 'italian',
//   CHINESE: 'chinese',
//   // ... other cuisine options
// };

const DELIVERY_OPTIONS = {
  FASTEST_DELIVERY: "Fastest Delivery",
};

const resturants = resturantList;

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    items: resturants,
    sortBy: SORT_OPTIONS.LOW_TO_HIGH,
    costFilter: null,
    ratingFilter: " ",
    cuisineFilters: [],
    deliveryFilter: null,
    filterCount: 0,
    resultCount: 0,
    sortSubcategorySelected: false,
    costSubcategorySelected: false,
    ratingSubcategorySelected: false,
    cusineSubcategorySelected: false,
    deliverySubcategorySelected: false,
    // New state variables to track selected subcategories for each filter
  },
  reducers: {
    setResturants: (state, { payload }) => {
      state.items = payload;
    },

    setSearchedItem: (state, { payload }) => {
      state.items = payload;
    },

    setCusineFiltered: (state, { payload }) => {
      state.items = payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      console.log(state.items);
      console.log(state.costFilter);
      console.log(typeof resturantList);
      console.log(typeof resturants);
      const selectedSortSubcategory = action.payload;

      if (!state.sortSubcategorySelected) {
        state.selectedSortSubcategory = selectedSortSubcategory;
        state.sortSubcategorySelected = true;
        state.filterCount += 1;
      }
    },

    resetFilters: (state, { payload }) => {
      state.items = resturants;
      (state.sortBy = SORT_OPTIONS.LOW_TO_HIGH),
        (state.costFilter = null),
        (state.ratingFilter = " "),
        // state.cuisineFilters= [],
        (state.deliveryFilter = null),
        (state.sortSubcategorySelected = false),
        (state.costSubcategorySelected = false),
        (state.ratingSubcategorySelected = false),
        (state.cusineSubcategorySelected = false),
        (state.deliverySubcategorySelected = false),
        (state.filterCount = 0);
    },
    setCostFilter: (state, action) => {
      state.costFilter = action.payload;
      console.log(state.items);
      const selectedSortSubcategory = action.payload;

      if (!state.costSubcategorySelected) {
        state.selectedSortSubcategory = selectedSortSubcategory;
        state.costSubcategorySelected = true;
        state.filterCount += 1;
      }
    },
    setRatingFilter: (state, action) => {
      state.ratingFilter = action.payload;
      console.log(state.items);
      const selectedSortSubcategory = action.payload;

      if (!state.ratingSubcategorySelected) {
        state.selectedSortSubcategory = selectedSortSubcategory;
        state.ratingSubcategorySelected = true;
        state.filterCount += 1;
      }
    },
    // toggleCuisineFilter: (state, action) => {
    //   const cuisine = action.payload;
    //   const index = state.cuisineFilters.indexOf(cuisine);

    //   if (index === -1) {
    //     state.cuisineFilters.push(cuisine);
    //   } else {
    //     state.cuisineFilters.splice(index, 1);
    //   }

    //   const selectedSortSubcategory = action.payload;

    //   if (!state.cusineSubcategorySelected) {
    //     state.selectedSortSubcategory = selectedSortSubcategory;
    //     state.cusineSubcategorySelected = true;
    //     state.filterCount += 1;
    //   }
    // },
    setDeliveryFilter: (state, action) => {
      state.deliveryFilter = action.payload;
      console.log(state.items);

      const selectedSortSubcategory = action.payload;

      if (!state.deliverySubcategorySelected) {
        state.selectedSortSubcategory = selectedSortSubcategory;
        state.deliverySubcategorySelected = true;
        state.filterCount += 1;
      }
    },

    // New reducers to update the selected subcategories
    setSelectedSortSubcategory: (state, action) => {
      state.selectedSortSubcategory = action.payload;
    },
    setSelectedCostSubcategory: (state, action) => {
      state.selectedCostSubcategory = action.payload;
    },
    setSelectedRatingSubcategory: (state, action) => {
      state.selectedRatingSubcategory = action.payload;
    },
    setSelectedCuisineSubcategory: (state, action) => {
      state.selectedCuisineSubcategory = action.payload;
    },
    setSelectedDeliverySubcategory: (state, action) => {
      state.selectedDeliverySubcategory = action.payload;
    },

    sortAndFilterItems: (state, action) => {
      if ("vibrate" in navigator) {
        // vibration API supported
        navigator.vibrate(50);
      }

      const {
        sortBy,
        costFilter,
        ratingFilter,
        cuisineFilters,
        deliveryFilter,
        items,
      } = state;
      console.log(items);
      let filteredAndSortedItems = [...items];
      console.log(filteredAndSortedItems);
      console.log(typeof filteredAndSortedItems);
      console.log(items);

      // Sorting logic
      // Sorting logic
      switch (sortBy) {
        case SORT_OPTIONS.LOW_TO_HIGH:
          filteredAndSortedItems.sort(
            (a, b) =>
              a.info.feeDetails.fees[0].fee - b.info.feeDetails.fees[0].fee
          );
          console.log("L-H SORT CALLED");

          break;

        case SORT_OPTIONS.HIGH_TO_LOW:
          filteredAndSortedItems.sort(
            (a, b) =>
              b.info.feeDetails.fees[0].fee - a.info.feeDetails.fees[0].fee
          );
          console.log("H-L SORT CALLED");
          break;

        case SORT_OPTIONS.FASTEST_DELIVERY:
          filteredAndSortedItems.sort(
            (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
          );
          console.log("FST SORT CALLED");
          break;

        default:
          break;
      }

      // Filtering logic for cost
      switch (costFilter) {
        case COST_OPTIONS.RS_300_TO_RS_600:
          filteredAndSortedItems = filteredAndSortedItems.filter(
            (item) =>
              item.info.feeDetails.fees[0].fee >= 3000 &&
              item.info.feeDetails.fees[0].fee <= 6000
          );
          console.log("300-600 SORT CALLED");
          break;

        case COST_OPTIONS.GREATER_THAN_RS_600:
          filteredAndSortedItems = filteredAndSortedItems.filter(
            (item) => item.info.feeDetails.fees[0].fee > 6000
          );
          console.log(">600 SORT CALLED");
          break;

        case COST_OPTIONS.LESS_THAN_RS_300:
          filteredAndSortedItems = filteredAndSortedItems.filter(
            (item) => item.info.feeDetails.fees[0].fee < 3000
          );
          console.log("<300 SORT CALLED");
          break;

        default:
          break;
      }

      // Filtering logic for rating
      const numericRatingFilter = parseFloat(ratingFilter.replace("+", ""));
      switch (numericRatingFilter) {
        case RATING_OPTIONS.RATING_4_5_PLUS:
          filteredAndSortedItems = filteredAndSortedItems.filter(
            (item) =>
              parseFloat(item.info.avgRatingString.replace("+", "")) >= 4.5
          );
          console.log("4.5+ SORT CALLED");
          break;

        case RATING_OPTIONS.RATING_4_0_PLUS:
          filteredAndSortedItems = filteredAndSortedItems.filter(
            (item) =>
              parseFloat(item.info.avgRatingString.replace("+", "")) >= 4.0
          );
          console.log("4.0+ SORT CALLED");
          break;

        case RATING_OPTIONS.RATING_3_5_PLUS:
          filteredAndSortedItems = filteredAndSortedItems.filter(
            (item) =>
              parseFloat(item.info.avgRatingString.replace("+", "")) >= 3.5
          );
          console.log("3.5+ SORT CALLED");
          break;

        default:
          break;
      }

      // Filtering logic for cuisine filters
      if (cuisineFilters.length > 0) {
        filteredAndSortedItems = filteredAndSortedItems.filter((item) =>
          cuisineFilters.includes(item.cuisine)
        );
      }

      // Sorting logic for delivery
      if (deliveryFilter === DELIVERY_OPTIONS.FASTEST_DELIVERY) {
        filteredAndSortedItems.sort(
          (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
        );
        console.log("FST SORT CALLED");
      }

      // Update the state with the filtered and sorted items
      state.items = filteredAndSortedItems;
      console.log(typeof filteredAndSortedItems);
      console.log(state.items);
      state.resultCount = state.items.length;
    },
  },
});

export const {
  setResturants,
  setSortBy,
  setCostFilter,
  setRatingFilter,
  toggleCuisineFilter,
  setDeliveryFilter,
  setSearchedItem,
  resetFilters,
  setCusineFiltered,
  setSelectedSortSubcategory,
  setSelectedCostSubcategory,
  setSelectedRatingSubcategory,
  setSelectedCuisineSubcategory,
  setSelectedDeliverySubcategory,
  sortAndFilterItems,
} = filterSlice.actions;

export default filterSlice.reducer;
