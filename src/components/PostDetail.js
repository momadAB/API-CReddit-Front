"use client";

import React from "react";
import CommentsList from "./CommentsList";
import replyToPost from "@/helpers/replyToPost";

function PostDetail({ post, postId }) {
  const { title, description, comments, id } = post;
  return (
    <div>
      <div className="bg-[#D5D9F4] m-4 shadow-[0_3px_3px_rgba(0,0,0,0.24)] pb-5">
        {/* Main post */}
        <div className="flex">
          <p className="font-bold text-[#508878] pl-6 pt-3">{title}</p>
          <p
            className="p-1 pr-2 ml-auto cursor-pointer pt-3"
            onClick={() => replyToPost(id)}
          >
            No. {id} (Click to reply)
          </p>
        </div>
        <p className="pl-6">{description}</p>
      </div>
      {/* Comments */}
      <CommentsList comments={comments} postId={postId} />
    </div>
  );
}

export default PostDetail;
