function replyToPost(postId) {
  const commentText = document.getElementById("comment-form-text-id");
  commentText.value = commentText.value + `>>${postId} : `;
}

export default replyToPost;
