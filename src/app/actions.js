const baseUrl = "http://localhost:5000";

export async function fetchUserData() {
    
  // Fetch user information from JSONPlaceholder API
  const response = await fetch(baseUrl + "/posts");

  // Convert response to JSON
  const data = await response.json();

  // Log the user data
  return data;
}
