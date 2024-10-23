import { fetchPostById } from "@/actions/actions";
import PostDetail from "@/components/PostDetail";
import React from "react";

async function page(props) {
  const params = await props.params;
  const post = await fetchPostById(params.id);

  return <PostDetail params={params} post={post} />;
}

export default page;
