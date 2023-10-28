import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { AiTwotoneHeart } from "react-icons/ai"
import { HiThumbUp } from "react-icons/hi"
import { AiOutlineLike } from "react-icons/ai"
import { LuMessageCircle } from "react-icons/lu"
import { PiShareFatBold } from "react-icons/pi"

const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/facebook/facebook")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div className="posts-container">
        <div>
          {posts.map((post) => (
            <div key={post._id} className="individual-post">
               <div className="user-and-photo">
                 <div className="user-photo">Z</div>
                 <div className="user-name">Zulqarnain Chohan</div>
               </div>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-para">{post.postData}</p>
               <div className="post-img">{post.image}</div>
               <img src={post.image} alt="" />
               <hr />
               <div className="reacts-and-share">
                  <div className="reacts-side">
                    
                     <div className="single-react heart">
                             <AiTwotoneHeart className="react "/>                         
                     </div>
                     <div className="single-react thumb">
                             <HiThumbUp className="react "/>                         
                     </div>
                   
                     <div className="single-react care">
                                                    
                             <img src="/assets/carefinal.png" alt="" className="care-img"/>
                     </div>
                  </div>
                  <div className="share">
                    2 commnets - 45 shares
                  </div>
               </div>
               <div className="like-comment-share">
                  <div>
                    <AiOutlineLike className="like-btn"/> 
                    Like
                  </div>
                  <div>
                    <LuMessageCircle className="comment-btn"/> 
                    comment
                  </div>
                  <div>
                    <PiShareFatBold className="share-btn"/> 
                    share
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
