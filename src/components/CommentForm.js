import React from "react";

function CommentForm({ postId }) {
  return (
    <form
      action=""
      id="comment-form-id"
      className="flex flex-col gap-2 font-black mt-10"
    >
      <input
        type="text"
        placeholder="Username"
        value="Anonymous"
        className="m-52 mt-0 mb-0"
      />
      <input
        type="text"
        id="comment-form-text-id"
        placeholder="Comment text"
        className="m-52 mb-0 mt-0 h-32"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
