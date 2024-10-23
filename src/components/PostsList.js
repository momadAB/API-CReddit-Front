import React from "react";
import PostCard from "./PostCard";

function PostsList({ posts }) {
  return (
    <div className="grid grid-cols-4 gap-32 p-8">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}

export default PostsList;
