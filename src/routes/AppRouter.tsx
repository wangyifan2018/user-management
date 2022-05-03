import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelpPage } from '../components/HelpPage';
import { SinglePostPage } from '../redux/posts/SinglePostPage';
import { PostsList } from '../components//PostsList';
import { AddPostForm } from '../components/AddPostForm';
import '../index.css';
import { EditPostForm } from '../components/EditPostForm/';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="create" element={<AddPostForm />} />

      <Route path="help" element={<HelpPage />} />
      <Route path="posts/:postId" element={<SinglePostPage />} />
      <Route path="editPost/:postId" element={<EditPostForm />} />
    </Routes>
  );
};
