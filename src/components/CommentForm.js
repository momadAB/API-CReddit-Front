import submitComment from "@/helpers/submitComment";
import submitPost from "@/helpers/submitPost";

function CommentForm({ postId }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitComment(postId, {
          username: e.target.username.value,
          comment: e.target.comment.value,
        });
      }}
      id="comment-form-id"
      className="flex flex-col gap-2 font-black mt-10"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        defaultValue="Anonymous"
        className="m-52 mt-0 mb-0 p-3"
      />
      <input
        type="text"
        name="comment"
        id="comment-form-text-id"
        placeholder="Comment text"
        className="m-52 mb-0 mt-0 h-32 p-3"
      />
      <button
        type="submit"
        className="bg-[#D5D9F4] m-4 shadow-[0_3px_3px_rgba(0,0,0,0.24)] p-2 m-auto hover:shadow-[]"
      >
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
