// You will add code in this file
//Added useState here
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";



import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
 let [likes, setLikes] = useState(0);

 //console.log("likes", likes);
 const incrementLikes = () => {
  setLikes(likes+1);
 };
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection incrementLikes={incrementLikes} likes={likes}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
