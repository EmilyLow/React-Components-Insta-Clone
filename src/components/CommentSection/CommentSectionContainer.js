// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
 
  // Add state for the comments
  const [commentsData, setComments] = useState(props.comments);
 //console.log("props", props);
 //Or maybe submit comment?
 let changeComment = (input) => {
   setComments(commentsData.push(input));
 }
  return (
    <div>
      {/* map through the comments data and return the Comment component */
      commentsData.map( commentItem => 
        <Comment comment = {commentItem}/>

      )
  
      }

      <CommentInput />
    </div>
  );
};

export default CommentSection;
