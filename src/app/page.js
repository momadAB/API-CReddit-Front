import { fetchUserData } from "./actions";
import PostsList from "@/components/PostsList";
import posts from "@/data/Posts";

export default async function Home() {
  const Data = await fetchUserData();

  return (
    <div>
      <pre>{JSON.stringify(Data, null, 2)}</pre>
      <PostsList posts={posts}></PostsList>
    </div>
  );
}
