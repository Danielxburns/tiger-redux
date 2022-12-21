import React from 'react';
import { useSelector } from 'react-redux';
import Feed from './feed';
import Categories from '../categories/categories';
import '../../App.css';

const PrevPosts = () => {
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <div className="prev-posts-container comp">
      <p>User's previous posts</p>
      <div className="posts-container">
        <Categories />
        <Feed user={currentUser} />
      </div>
    </div>
  );
};

export default PrevPosts;
