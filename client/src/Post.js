import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="https://source.unsplash.com/random/?blog/" alt="" />
      </div>
      <div className="text">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
        <p className="info">
          <a href="" className="author">
            Harsh Nargide
          </a>
          <time>2024-03-14 00:27</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
          saepe nisi officia voluptatibus quidem, facere, enim incidunt
          perferendis eaque, laborum non veniam ipsum quis fugiat. Doloremque
          ducimus ex molestias?
        </p>
      </div>
    </div>
  );
}

export default Post;
