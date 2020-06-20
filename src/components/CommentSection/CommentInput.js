// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        //Need to pass something here for it to work? Or does form do that automatically
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
