import React from "react";
import CommentsList from "./CommentsList";

function PostDetail({ post }) {
  const { title, description, comments, id } = post;
  return (
    <div>
      {/* Main post */}
      <p className="font-bold text-green-200 pl-6 pt-7">{title}</p>
      <p className="pl-6">{description}</p>
      {/* Comments */}
      <CommentsList comments={comments} postId={id} />
    </div>
  );
}

export default PostDetail;
