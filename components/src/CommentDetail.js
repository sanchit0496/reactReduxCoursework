import React from 'react';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src= "/" />
      </a>
      <div className="content">
        <a href="/" className="author">
            Mohit
        </a>
        <div className="metadata">
          <span className="date">Today</span>
        </div>
        <div className="text">Informative</div>
      </div>
    </div>
  );
};

export default CommentDetail;