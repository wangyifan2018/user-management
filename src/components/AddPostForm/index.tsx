import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from '../../redux/posts/postsSlice';

export const AddPostForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setName(e.target.value);
  const onContentChanged = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setPosition(e.target.value);

  const onSavePostClicked = () => {
    if (name && position) {
      dispatch(
        postAdded({
          id: nanoid(),
          name,
          position,
        })
      );

      setName('');
      setPosition('');
    }
  };
  return (
    <section>
      <h2>添加新成员</h2>
      <form>
        <label htmlFor="postTitle">姓名:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={name}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">职位：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={position}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          保存信息
        </button>
      </form>
    </section>
  );
};
