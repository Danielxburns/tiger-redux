import React from 'react';
import Profile from './profile';
import PrevPosts from '../posts/prev-posts';
import NewPost from '../posts/new-post';

const UserPage = () => {
  return (
    <div className="user-page page">
      <p>User page</p>
      <div className="posts-container">
        <Profile />
        <NewPost />
      </div>
      <PrevPosts />
    </div>
  );
};

export default UserPage;
