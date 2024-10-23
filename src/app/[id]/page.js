// "use client";

import { fetchPostById } from "@/actions/actions";
import PostDetail from "@/components/PostDetail";
import { redirect } from "next/navigation";

import React from "react";

async function page(props) {
  const params = await props.params;
  const post = await fetchPostById(params.id);

  if (post.message.includes("not found")) redirect("/");

  return <PostDetail params={params} post={post} postId={params.id} />;
}

export default page;
