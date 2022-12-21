import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../features/users/usersSlice';
import { fetchAllPosts } from '../features/posts/postsSlice';

import Feed from '../features/posts/feed';
import Categories from '../features/categories/categories';
import homeImage from '../common/assets/images/Tiger_with_laptop.png';

import '../App.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const usersStatus = useSelector((state) => state.users.status);
  const postStatus = useSelector((state) => state.posts.status);
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchAllPosts());
    }
  }, [postStatus, dispatch]);

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchAllUsers());
    }
  }, [dispatch, usersStatus]);

  const greet = currentUser.firstName
    ? `, ${currentUser.firstName}`
    : ' to Tiger Blogs';

  return (
    <div className="home-page page">
      <header className="App-header">
        <div>
          <h1>Welcome{greet}</h1>{' '}
          <img src={homeImage} alt="tiger with laptop" />
          <p>
            Find the most updated content on your favorite topic and explore.
            Learn more from the different blog posts and network with people who
            share your interests.
          </p>
          <p>Snuggle up with the Tiger!</p>{' '}
        </div>
      </header>
      <div className="posts-container">
        <Categories />
        <Feed />
      </div>
    </div>
  );
};

export default HomePage;
