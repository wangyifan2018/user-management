import { createSlice } from '@reduxjs/toolkit';

export interface postsType {
  id: string;
  name: string;
  information: string;
}

interface postAddAction {
  type: string;
  payload: postsType;
}

const initialState: postsType[] = [
  { id: '1', name: 'Jack!', information: 'Hello 996!' },
  { id: '2', name: 'Ma!', information: 'Transport talents?' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action: postAddAction) {
      state.push(action.payload);
    },
    postUpdated(state, action: postAddAction) {
      const { id, name, information } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.name = name;
        existingPost.information = information;
      }
    },
    deletePost(state: postsType[], action: postAddAction) {
      state.splice(
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
    },
  },
});

export const { postAdded, postUpdated, deletePost } = postsSlice.actions;

export const selectCount = (state: { posts: postsType[] }) => state.posts;

export default postsSlice.reducer;
