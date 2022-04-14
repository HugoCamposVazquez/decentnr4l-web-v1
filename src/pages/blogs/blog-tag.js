import React from "react";
import TagsPost from "../../components/Blog/TagsPost";
import Link from "next/link";

const BlogTags = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Tag: Technology</h1>
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
              <li>Technology</li>
            </ul>
          </div>
        </div>
      </div>
      <TagsPost />
    </>
  );
};

export default BlogTags;
