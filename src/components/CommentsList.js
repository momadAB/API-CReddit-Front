import React from "react";
import Comment from "./Comment";

function CommentsList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
    </div>
  );
}

export default CommentsList;
