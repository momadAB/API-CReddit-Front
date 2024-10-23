"use client";

import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentsList({ comments, postId }) {
  return (
    <div>
      <div className="flex flex-col-reverse">
        {comments.map((comment) => (
          <Comment key={comment.id} commentData={comment} />
        ))}
      </div>
      <CommentForm postId={postId} />
    </div>
  );
}

export default CommentsList;
