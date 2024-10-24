import React from 'react';
import './Post.css'
const Post = ({ post, handleLike, handleCommentSubmit, comment, setComment }) => {
  return (
    <div className="post">
      <div className="post-header">
        <span className="username">{post.user}</span>
      </div>
      <img src={post.image} alt={post.description} className="post-image" />
      <div className="post-description">{post.description}</div>
      <div className="post-actions">
        <button className="like-button" onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
        <button className="comment-button">Comment</button>
        <button className="share-button">Share</button>
      </div>
      <input 
        type="text" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Add a comment" 
      />
      <button onClick={() => handleCommentSubmit(post.id)}>Post</button>
      <div>
        {post.comments.map((c, index) => (
          <div key={index}>{c}</div>
        ))}
      </div>
    </div>
  );
};

export default Post;
