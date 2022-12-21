import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

const postsAdapter = createEntityAdapter({
  selectId: (post) => post._id,
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchAllPosts = createAsyncThunk(
  'users/fetchAllPosts',
  async () => {
    const response = await axios.get('http://localhost:5000/posts');
    const posts = await response.data;
    return posts;
  }
);

export const addNewPost = createAsyncThunk('posts/addNewPost', async (post) => {
  const response = await axios.post('http://localhost:5000/posts', post);
  const newPost = await response.data;
  console.log('newPost added to database :>> ', newPost);
  return newPost;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.pending, (state, action) => {
        state.status = 'adding new post'
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.status = 'failed';
        console.log('addNewpost rejected error :>> ', action.error);
        state.error = action.error.messsage
      });
  },
});

export default postsSlice.reducer;

export const { selectAll: selectAllPosts } = postsAdapter.getSelectors(
  (state) => state.posts
);

export const selectPostsByCategory = createSelector(
  [selectAllPosts, (state, category) => category],
  (posts, category) =>
    posts.filter((post) => post.category.toLowerCase() === category)
);
export const selectPostsByUserId = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.user === userId
);
