"use client";

import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentsList({ comments, postId }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
      <CommentForm postId={postId} />
    </div>
  );
}

export default CommentsList;
