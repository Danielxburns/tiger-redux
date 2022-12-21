import React from 'react';
import Post from './post';
import { useSelector, /* useDispatch  */} from 'react-redux';
import { selectAllPosts, /* selectPostsByCategory, */ } from '../posts/postsSlice';
/* import { selectCategory } from '../categories/categoriesSlice'; */
import '../../App.css';

const Feed = ({ user }) => {
  const posts = useSelector(selectAllPosts);

/*   const category = useSelector(selectCategory);
  const categoryPosts = useSelector((state) =>
    selectPostsByCategory(state, category)
  );
  const posts = category === 'all' ? allPosts : categoryPosts */

  return (
    <div className="feed-container comp">
      <p>Feed:</p>
      {posts &&
        posts.map((post) => <Post key={post._id} post={post} />)}
      <p>
        Feel free to leave a comment and drop a like after every post you have
        read.
      </p>
    </div>
  );
};

export default Feed;
