import { useSelector } from 'react-redux';
import { selectCount } from './postsSlice';

export const PostsList = () => {
  const posts = useSelector(selectCount);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.name}</h3>
      <p className="post-content">{post.position}</p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
