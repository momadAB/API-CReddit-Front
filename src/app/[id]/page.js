import PostDetail from "@/components/PostDetail";
import React from "react";

async function page(props) {
  const params = await props.params;

  return <PostDetail params={params} />;
}

export default page;
