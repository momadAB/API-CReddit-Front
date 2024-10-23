import React from "react";

function PostDetail({ post }) {
  const { title, description, comments } = post;
  return (
    <div>
      {/* Main post */}
      <p className="font-bold text-green-200 pl-6 pt-7">{title}</p>
      <p className="pl-6">{description}</p>
    </div>
  );
}

export default PostDetail;
