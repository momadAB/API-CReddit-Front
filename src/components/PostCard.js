import Link from "next/link";
import React from "react";

function PostCard({ post }) {
  const { title, description, id } = post;
  const comments = [];
  return (
    <Link
      className="h-56 text-center bg-[#D5D9F4] m-4 shadow-[0_3px_3px_rgba(0,0,0,0.24)]"
      href={`/${id}`}
      // onClick={}
    >
      <p className="text-sm">R: {comments.length}</p>
      <div className="flex justify-center">
        <p className="font-bold">{title}</p>
        <p>:</p>
      </div>
      <p>{description}</p>
    </Link>
  );
}

export default PostCard;
