import { createSlice } from '@reduxjs/toolkit';
import { resturantList } from '../constants/constants';

const SORT_OPTIONS = {
  LOW_TO_HIGH: 'Low to High',
  HIGH_TO_LOW: 'High to Low',
  FASTEST_DELIVERY: 'Fastest Delivery',
};

const COST_OPTIONS = {
  RS_300_TO_RS_600: 'Rs. 300 - Rs. 600',
  GREATER_THAN_RS_600: 'Greater than Rs. 600',
  LESS_THAN_RS_300: 'Less than Rs. 300',
};

const RATING_OPTIONS = {
  RATING_4_5_PLUS: 4.5,
  RATING_4_0_PLUS: 4.0,
  RATING_3_5_PLUS: 3.5,
};

const CUISINE_OPTIONS = {
  INDIAN: 'indian',
  ITALIAN: 'italian',
  CHINESE: 'chinese',
  // ... other cuisine options
};

const DELIVERY_OPTIONS = {
  FASTEST_DELIVERY: 'Fastest Delivery',
};

const foodItemsSlice = createSlice({
  name: 'filter',
  initialState: {
    items: resturantList,
    sortBy: SORT_OPTIONS.LOW_TO_HIGH,
    costFilter: null,
    ratingFilter: null,
    cuisineFilters: [],
    deliveryFilter: null,
  },
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCostFilter: (state, action) => {
      state.costFilter = action.payload;
    },
    setRatingFilter: (state, action) => {
      state.ratingFilter = action.payload;
    },
    toggleCuisineFilter: (state, action) => {
      const cuisine = action.payload;
      const index = state.cuisineFilters.indexOf(cuisine);

      if (index === -1) {
        state.cuisineFilters.push(cuisine);
      } else {
        state.cuisineFilters.splice(index, 1);
      }
    },
    setDeliveryFilter: (state, action) => {
      state.deliveryFilter = action.payload;
    },
    sortAndFilterItems: (state) => {
      const { sortBy, costFilter, ratingFilter, cuisineFilters, deliveryFilter,items } = state;

      let filteredAndSortedItems = [...items];

      // Sorting logic
      if (sortBy === SORT_OPTIONS.LOW_TO_HIGH) {
        filteredAndSortedItems.sort((a, b) => a.info.feeDetails.fees.totalFee - b.info.feeDetails.fees.totalFee);
      } else if (sortBy === SORT_OPTIONS.HIGH_TO_LOW) {
        filteredAndSortedItems.sort((a, b) => b.info.feeDetails.fees.totalFee - a.info.feeDetails.fees.totalFee);
      } else if (sortBy === SORT_OPTIONS.FASTEST_DELIVERY) {
        filteredAndSortedItems.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
      }

      // Filtering logic for cost
      if (costFilter === COST_OPTIONS.RS_300_TO_RS_600) {
        filteredAndSortedItems = filteredAndSortedItems.filter(item => item.info.feeDetails.fees.totalFee >= 300 && item.info.feeDetails.fees.totalFee <= 600);
      } else if (costFilter === COST_OPTIONS.GREATER_THAN_RS_600) {
        filteredAndSortedItems = filteredAndSortedItems.filter(item => item.info.feeDetails.fees.totalFee > 600);
      } else if (costFilter === COST_OPTIONS.LESS_THAN_RS_300) {
        filteredAndSortedItems = filteredAndSortedItems.filter(item => item.info.feeDetails.fees.totalFee < 300);
      }

      // Filtering logic for rating
      if ((ratingFilter.replace('+', '')) === RATING_OPTIONS.RATING_4_5_PLUS) {
        filteredAndSortedItems = filteredAndSortedItems.filter(item => parseFloat(item.info.avgRatingString) >= 4.5);
      } else if ((ratingFilter.replace('+', '')) === RATING_OPTIONS.RATING_4_0_PLUS) {
        filteredAndSortedItems = filteredAndSortedItems.filter(item => parseFloat(item.info.avgRatingString) >= 4.0);
      } else if ((ratingFilter.replace('+', '')) === RATING_OPTIONS.RATING_3_5_PLUS) {
        filteredAndSortedItems = filteredAndSortedItems.filter(item => parseFloat(item.info.avgRatingString) >= 3.5);
      }

      // Filtering logic for cuisine filters
      if (cuisineFilters.length > 0) {
        filteredAndSortedItems = filteredAndSortedItems.filter(item => cuisineFilters.includes(item.cuisine));
      }

      // Sorting logic for delivery
      if (deliveryFilter === DELIVERY_OPTIONS.FASTEST_DELIVERY) {
        filteredAndSortedItems.sort((a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime);
      }

      // Update the state with the filtered and sorted items
      items = filteredAndSortedItems;
    },
  },
});

export const {
  setSortBy,
  setCostFilter,
  setRatingFilter,
  toggleCuisineFilter,
  setDeliveryFilter,
  sortAndFilterItems
} = foodItemsSlice.actions;

export default foodItemsSlice.reducer;
