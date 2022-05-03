import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { postUpdated, selectCount } from '../../redux/posts/postsSlice';

export const EditPostForm = () => {
  const params = useParams();

  const { postId } = params;
  const posts = useSelector(selectCount);

  const post = posts.find((post) => post.id === postId);

  const [name, setTitle] = useState(post?.name || '');
  const [position, setContent] = useState(post?.position || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setTitle(e.target.value);

  const onContentChanged = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (name && position) {
      dispatch(postUpdated({ id: String(postId), name, position }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit User</h2>
      <form>
        <label htmlFor="postTitle">User Name</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={name}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={position}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        保存
      </button>
    </section>
  );
};
