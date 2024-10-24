import React, { useState } from 'react';
import Post from '../components/Post'; // Import the Post component

const Updates = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'User1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1TI-0S7QtlALpaOm5Kuol9fexTLg4T76AQ&s',
      description: 'This is a description for post 1.',
      likes: 0,
      comments: [],
    },
    // Add more posts as needed
  ]);
  const [comment, setComment] = useState('');

  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleCommentSubmit = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, comments: [...post.comments, comment] } : post
    ));
    setComment('');
  };

  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          handleLike={handleLike} 
          handleCommentSubmit={handleCommentSubmit} 
          comment={comment} 
          setComment={setComment} 
        />
      ))}
    </div>
  );
};

export default Updates;
