import DarkTheme from "../layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import { getPosts } from "../../lib/posts";
import Link from "next/link";

export const getStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
  };
};



const BlogDark = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <DarkTheme>
      <NavbarFullMenu theme={DarkTheme} lr={undefined}/>
       <section className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-9">
                <div className="cont">
                  <div>
                   <h1>My Blog</h1>
                   <ul>
                    {posts.map((post) => {
                      return (
                        <li key={post.slug}>
                          <Link href='/posts/[slug]' as={`/posts/${post.slug}`}>
                            <a>{post.title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                
                  </div>
                </div>  
              </div>    
            </div>      
          </div>
        </section>    
      </DarkTheme>  
    </>
  );
};

export default BlogDark;