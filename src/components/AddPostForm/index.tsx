import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from '../../redux/posts/postsSlice';

export const AddPostForm = () => {
  const [name, setName] = useState('');
  const [information, setPosition] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setName(e.target.value);
  const onContentChanged = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setPosition(e.target.value);

  const onSavePostClicked = () => {
    if (name && information) {
      dispatch(
        postAdded({
          id: nanoid(),
          name,
          information,
        })
      );

      setName('');
      setPosition('');
    }
  };

  const canSave = Boolean(name) && Boolean(information);

  return (
    <section>
      <h2>Add New User</h2>
      <form>
        <label htmlFor="postTitle">Name:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={name}
          placeholder="必填"
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Information:</label>
        <input
          id="postContent"
          name="postContent"
          value={information}
          placeholder="必填"
          onChange={onContentChanged}
        />
        <button
          className="button"
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          保存信息
        </button>
      </form>
    </section>
  );
};
