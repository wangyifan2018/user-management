import { useSelector } from 'react-redux';
import { selectCount } from '../../redux/posts/postsSlice';
import { Link } from 'react-router-dom';
import '../../index.css';

export const PostsList = () => {
  const posts = useSelector(selectCount);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>User Name : {post.name}</h3>
      <p className="post-content">User Information : {post.position}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Information
      </Link>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>User List</h2>
      {renderedPosts}
    </section>
  );
};
