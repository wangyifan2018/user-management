import { createSlice } from '@reduxjs/toolkit';

export interface postsType {
  id: string;
  name: string;
  position: string;
}

interface postAddAction {
  type: string;
  payload: postsType;
}

const initialState: postsType[] = [
  { id: '1', name: 'First Post!', position: 'Hello!' },
  { id: '2', name: 'Second Post', position: 'More text' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action: postAddAction) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postsSlice.actions;

export const selectCount = (state: { posts: postsType[] }) => state.posts;

export default postsSlice.reducer;
