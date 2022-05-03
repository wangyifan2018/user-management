import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../components/HomePage';
import { SinglePostPage } from '../redux/posts/SinglePostPage';
import { PostsList } from '../components//PostsList';
import { AddPostForm } from '../components/AddPostForm';
import '../index.css';
import { EditPostForm } from '../components/EditPostForm/';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="user" element={<PostsList />} />
      <Route path="create" element={<AddPostForm />} />
      <Route path="posts/:postId" element={<SinglePostPage />} />
      <Route path="editPost/:postId" element={<EditPostForm />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
