import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import postsReducer from "./features/posts/postsSlice"
import categoriesReducer from "./features/categories/categoriesSlice"

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    categories: categoriesReducer
  }
});

