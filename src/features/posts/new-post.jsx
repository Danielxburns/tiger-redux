import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from './postsSlice';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../../App.css';

const defaultNewPostFields = {
  title: '',
  category: '',
  body: '',
};

const NewPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.users.currentUser);

  const [newPost, setNewPost] = useState(defaultNewPostFields);
  const { title, category, body } = newPost;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const submitNewPost = (title, username, category, body, userId) => {
    console.log(
      'Inside submitNewPost - title, category, body, user :>> ',
      title,
      username,
      category,
      body,
      userId
    );
    dispatch(addNewPost({title, username, category, body, userId}));
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      submitNewPost(title, currentUser.username, category, body, currentUser._id);
    } catch (error) {
      console.log('error encountered during new post submission', error);
    }
  };

  return (
    <div className="new-post-container comp">
      <p>Create a new post</p>
      <form onSubmit={handleSubmit}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
          <Form.Control
            aria-label="Title"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="title"
            value={title}
            onChange={handleChange}
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Category</InputGroup.Text>
          <Form.Control
            aria-label="Category"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="category"
            value={category}
            onChange={handleChange}
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="New post"
            aria-label="New post"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="body"
            value={body}
            onChange={handleChange}
          ></Form.Control>
        </InputGroup>
        <Button type="submit" onSubmit={handleSubmit}>
          Publish
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
