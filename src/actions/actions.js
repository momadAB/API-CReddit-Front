const baseUrl = "http://localhost:5000";

//add post function
//

export async function fetchUserData() {
  // Fetch user information from JSONPlaceholder API
  const response = await fetch(baseUrl + "/posts");

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
