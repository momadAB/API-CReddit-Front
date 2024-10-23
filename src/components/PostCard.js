import React from "react";

function PostCard({ post }) {
  const { title, description } = post;
  const comments = [];
  return (
    <div
      className="h-56 text-center"
      // onClick={}
    >
      <p className="text-sm">R: {comments.length}</p>
      <div className="flex justify-center">
        <p className="font-bold">{title}</p>
        <p>:</p>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default PostCard;
