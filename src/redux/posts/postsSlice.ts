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
  { id: '2', name: 'Bill', information: 'More text' },
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
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export const selectCount = (state: { posts: postsType[] }) => state.posts;

export default postsSlice.reducer;
