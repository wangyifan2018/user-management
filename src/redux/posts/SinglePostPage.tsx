import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCount } from './postsSlice';
import { Link } from 'react-router-dom';

export const SinglePostPage = () => {
  const params = useParams();
  const { postId } = params;
  const posts = useSelector(selectCount);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.name}</h2>
        <p className="post-content">{post.information}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit User
        </Link>
      </article>
    </section>
  );
};
