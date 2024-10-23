"use client";

import React from "react";
import CommentsList from "./CommentsList";
import replyToPost from "@/helpers/replyToPost";

function PostDetail({ post }) {
  const { title, description, comments, id } = post;
  return (
    <div>
      {/* Main post */}
      <div className="flex">
        <p className="font-bold text-green-200 pl-6 pt-7">{title}</p>
        <p
          className="p-1 pr-2 ml-auto cursor-pointer "
          onClick={() => replyToPost(id)}
        >
          No. {id} (Click to reply)
        </p>
      </div>
      <p className="pl-6">{description}</p>
      {/* Comments */}
      <CommentsList comments={comments} postId={id} />
    </div>
  );
}

export default PostDetail;
