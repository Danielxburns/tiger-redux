import React from 'react';
import '../../App.css';

const Post = ({ post }) => {
  const { title, category, username, body } = post;
  
  return(
    <div className="post-container comp">
      <div className='post title'>Title: {title}</div>
      <div className='post user'>Author: {username}</div>
      <p className='description'>Post: {body}</p>
      <span className='likes' >Likes: {/* likes ? likes.length : '0' */}</span>{' '}
      <span className='category-name'>Category: {category}</span>
    </div>
  )
}

export default Post;
