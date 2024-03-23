import React from "react";

function Post({title, summary, cover, content, createdAt}) {
  return (
    <div className="post">
      <div className="image">
        <img src="https://source.unsplash.com/random/?blog/" alt="" />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p className="info">
          <a href="" className="author">
            Harsh Nargide
          </a>
          <time>{createdAt}</time>
        </p>
        <p className="summary">
          {summary}
        </p>
      </div>
    </div>
  );
}

export default Post;
