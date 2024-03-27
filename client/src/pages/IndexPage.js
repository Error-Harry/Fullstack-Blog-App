import React, { useEffect, useState } from "react";
import Post from "../Post";

function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredPosts = searchQuery
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts;

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {currentPosts.length > 0 &&
        currentPosts.map((post) => <Post key={post.id} {...post} />)}
      {filteredPosts.length > postsPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }).map(
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
