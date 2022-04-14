import React from "react";

import GridContent from "../../components/Blog/GridContent";


const BlogGrid = () => {
  return (
    <>

      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title">Latest News</span>
            <h1>Our latest articles & resources</h1>
          </div>
        </div>
      </div>
      <GridContent />
  
    </>
  );
};

export default BlogGrid;
