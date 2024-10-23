import PostDetail from "@/components/PostDetail";
import React from "react";
import posts from "@/data/Posts";

async function page(props) {
  const params = await props.params;
  const post = posts.find((post) => post.id === Number(params.id));

  return <PostDetail params={params} post={post} />;
}

export default page;
