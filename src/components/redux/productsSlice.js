import { createSlice } from '@reduxjs/toolkit';
import { productsData } from 'data/productsData';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    selectedCategory: 'ALL',
    productsData,
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setProducts: (state, action) => {
      state.productsData = action.payload;
    },
  },
});

export const getSelectedCategory = state => state.products.selectedCategory;
export const getProducts = state => state.products.productsData;
export const { filterCategory, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
