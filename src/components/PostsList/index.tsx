import { useDispatch, useSelector } from 'react-redux';
import {
  deletePost,
  postsType,
  selectCount,
} from '../../redux/posts/postsSlice';
import { Link } from 'react-router-dom';
import '../../index.css';

export const PostsList = () => {
  const posts = useSelector(selectCount);
  const dispatch = useDispatch();

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3> Name : {post.name}</h3>
      <p className="post-content"> Information : {post.information}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Information
      </Link>

      <button
        onClick={() => dispatch(deletePost(post))}
        className="button muted-button"
      >
        Delete User
      </button>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>User List</h2>
      {posts.length ? renderedPosts : <h2>User List are empty</h2>}
    </section>
  );
};
