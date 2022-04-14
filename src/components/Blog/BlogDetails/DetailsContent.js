import React from "react";
import Link from "next/link";
import { addBasePath } from "next/dist/shared/lib/router/router";

/* import Sidebar from "../Sidebar"; */
import ReactMarkdown from "react-markdown";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";




const DetailsContent  = ({

  
  attributes: {
    detailsText,
    date,
    slug,
    categories: {
      data: {
        attributes: name,
      },
    },
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
  },
}) => {


const ShareUrl =slug

  return (
    
    <div className="blog-details-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
        {/*   <div className="col-xl-4 col-lg-5 col-md-12"> 
            <div className="left-sidebar">
              <Sidebar />
            </div>
          </div> */}

          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="blog-details-desc green-color">
              <div className="post-thumb">
                <img src={imageUrl} alt="blog-details" />
              </div>

              <div className="post-meta mt-40">
                <ul>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    {date}
                  </li>
                  <li>
                    <i className="category"></i>
                    <Link href="/blogs/blog-tag">
                        <a rel="tag">{name}</a>
                      </Link>
                  </li>
                </ul>
              </div>

              <ReactMarkdown>{detailsText}</ReactMarkdown>

              <div className="post-footer">
                <div className="article-share mt-25">
                  <ul className="social">
                    <li>
                      <span>Share:</span>
                    </li>
                    <li>
                    <FacebookShareButton url={ShareUrl}
                      
                    >
                      <FacebookIcon
                        
                      />
                    </FacebookShareButton>

                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="linkedin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
