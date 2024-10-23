import PostsList from "@/components/PostsList";
import posts from "@/data/Posts";

export default function Home() {
  return (
    <>
      <PostsList posts={posts}></PostsList>
    </>
  );
}
