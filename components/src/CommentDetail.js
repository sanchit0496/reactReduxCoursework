import React from 'react';

const CommentDetail = props => {
  return (
    <div className="comment">
      <div className="content">
        <a href="/" className="author">
            {props.name}
        </a>
        <div className="metadata">
          <span className="date">
              {props.date}
          </span>
        </div>
        <div className="text">
            {props.text}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;