import React from "react";

import AuthorPost from "../../components/Blog/AuthorPost";

import Link from "next/link";

const BlogAuthor = () => {
  return (
    <>
 
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Author: Anna Smith</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs/blog-grid">
                  <a>Blog</a>
                </Link>
              </li>
              <li>Author</li>
            </ul>
          </div>
        </div>
      </div>
      <AuthorPost />
    </>
  );
};

export default BlogAuthor;
