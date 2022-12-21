import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

const usersApapter = createEntityAdapter({
  selectId: (user) => user._id,
});

const initialState = usersApapter.getInitialState({
  currentUser: {},
  status: 'idle',
  error: null,
});

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async () => {
    const response = await axios.get('http://localhost:5000/users');
    const users = await response.data;
    return users;
  }
);

export const addNewUser = createAsyncThunk('users/addNewUser', async (newUser) => {
  const response = await axios.post('http://localhost:5000/users', newUser);
  const user = await response.data;
  console.log('new user added to database :>> ', user);
  return user;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    signInUser(state, action) {
      console.log('usersSlice signInUsers action.payload :>> ', action.payload);
      
        state.currentUser = state.entities[action.payload]
    },
    updateCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        usersApapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewUser.pending, (state, action) => {
        state.status = 'adding new user'
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentUser = action.payload;
          usersApapter.addOne(state, action.payload)
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.status = 'failed';
        console.log('addNewUser rejected error :>> ', action.error);
        state.error = action.error.message
      })
  },
});

export default usersSlice.reducer;

export const { signInUser, updateCurrentUser } = usersSlice.actions;

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersApapter.getSelectors((state) => state.users);
