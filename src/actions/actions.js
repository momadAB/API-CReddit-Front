import { ClientPageRoot } from "next/dist/client/components/client-page";

const baseUrl = "http://localhost:5000";

//add post function
const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function fetchUserData() {
  // Fetch user information from JSONPlaceholder API
  const response = await fetch(baseUrl + "/posts", { method: "GET" });

  // Convert response to JSON
  const data = await response.json();

  // Log the user data
  return data;
}

export async function fetchPostById(id) {
  // Fetch user information from JSONPlaceholder API
  const response = await fetch(baseUrl + `/posts/${id}`);

  // Convert response to JSON
  const post = await response.json();

  // Log the user data
  return post;
}

export async function addPost(post) {
  const response = await fetch(baseUrl + "/posts/", {
    method: "POST",
    headers,
    body: JSON.stringify(post),
  });
  const newPost = await response.json();
  return newPost;
}

export async function delPost(id) {
  const response = await fetch(baseUrl + "/posts/" + id, {
    method: "DELETE",
    headers,
  });

  // Check if the response is okay
  // if (!response.ok) {
  //   throw new Error(`Failed to delete post: ${response.statusText}`);
  // }

  const newPost = await response.json();
  return newPost;
}

export async function addCommentToPost(id, commentData) {
  const response = await fetch(`${baseUrl}/posts/${id}/comments`, {
    method: "POST",
    headers,
    body: JSON.stringify(commentData),
  });
  const PostWithAddedComment = await response.json();
  return PostWithAddedComment;
}
