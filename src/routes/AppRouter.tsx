import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../components/NotFoundPage/NotFoundPage';
import { SinglePostPage } from '../redux/posts/SinglePostPage';
import { PostsList } from '../redux/posts/PostsList';
import { AddPostForm } from '../components/AddPostForm';
import '../index.css';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/create" element={<AddPostForm />} />

      <Route path="*" element={<NotFoundPage />} />
      <Route path="/posts/:postId" element={<SinglePostPage />} />
    </Routes>
  );
};
