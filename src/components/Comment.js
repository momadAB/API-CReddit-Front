import React from "react";

function Comment({ commentData }) {
  const { comment, username, id } = commentData;
  return (
    <div className="bg-cyan-900 m-4">
      <p className="p-1 pl-2">
        {username} {id}
      </p>

      <p className="p-4">{comment}</p>
    </div>
  );
}

export default Comment;
