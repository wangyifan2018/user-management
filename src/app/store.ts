import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../redux/posts/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
