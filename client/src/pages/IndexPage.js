import React, { useEffect, useState } from "react";
import Post from "../Post";

function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {currentPosts.length > 0 &&
        currentPosts.map((post) => <Post key={post.id} {...post} />)
      }
      {posts.length > postsPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </>
  );
}

export default IndexPage;
