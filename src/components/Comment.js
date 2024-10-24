"use client";
import replyToPost from "@/helpers/replyToPost";
import React from "react";

function Comment({ commentData }) {
  const { comment, username, id } = commentData;
  return (
    <div className="bg-[#D5D9F4] m-4 shadow-[0_3px_3px_rgba(0,0,0,0.24)] pb-5">
      <div className="flex">
        <p className="font-bold text-[#508878] pl-6 pt-3">{username}</p>
        <p
          className="p-1 pr-2 ml-auto cursor-pointer pt-3"
          onClick={() => replyToPost(id)}
        >
          No. {id} (Click to reply)
        </p>
        <p
          className="font-bold text-[#508878] pl-6 pt-3 pr-4 cursor-pointer"
          // onClick={}
        >
          Delete Comment
        </p>
      </div>

      <p className="p-4 pl-6">{comment}</p>
    </div>
  );
}

export default Comment;
