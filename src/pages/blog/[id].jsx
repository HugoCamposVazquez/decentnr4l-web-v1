/* import React from "react";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import Head from "next/head";


const PostPage = () => {

    return (
    <DarkTheme>
    <NavbarFullMenu />
    <Head>
      <title>Título del artículo</title>
    </Head>
    <main>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h1 className="extra-title mb-10">Our Blog.</h1>
                <p>
                  All the most current news and events of our creative team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </DarkTheme>
  );
};

export default PostPage; */
import axios from 'axios';
import MarkdownIt from 'markdown-it';
function PostPage({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);
  return (
    <article>
      <header>
        <h1>{post.attributes.title}</h1>
      </header>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
    </article>
  );
}

export default PostPage;

export async function getStaticProps({ params }) {
  const postsRes = await axios.get(
    `http://localhost:1377/api/posts/${params.id}`
  );
  let post = postsRes.data;

  return {
    props: {
      post: post.data,
    },
  };
}

/* export async function getStaticPaths() {
  let postsRes = await axios.get(
    'http://localhost:1377/api/posts?populate=thumbnail'
  );
  postsRes = postsRes.data;
  const paths = postsRes.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
} */