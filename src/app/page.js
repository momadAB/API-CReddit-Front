import { fetchPostById, fetchUserData } from "../actions/actions";
import PostsList from "@/components/PostsList";

export default async function Home() {
  const posts = await fetchUserData();
  const post = await fetchPostById(posts[0].id);

  return (
    <div>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <PostsList posts={posts}></PostsList>
    </div>
  );
}
