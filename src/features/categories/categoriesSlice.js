import { createSlice } from '@reduxjs/toolkit';
import { TEST_POSTS } from '../../common/assets/test-posts';

const initialState = {
  category: 'all',
  categories: ['all'].concat([
    ...new Set(TEST_POSTS.map((post) => post.category.toLowerCase())),
  ])
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryAdded(state, action) {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload.toLowerCase());
      }
    },
    updateCategory(state, action) {
      state.category = action.payload;
    }
  },
});

export const { categoryAdded, updateCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const selectAllCategories = (state) => state.categories.categories;
export const selectCategory = (state) => state.categories.category;
