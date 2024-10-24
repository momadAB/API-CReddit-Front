import {
  addCommentToPost,
  addPost,
  delPost,
  fetchPostById,
  fetchUserData,
} from "../actions/actions";

import PostsList from "@/components/PostsList";

export default async function Home() {
  const posts = await fetchUserData();
  const post = await fetchPostById(posts[0].id);
  const postObject = {
    title: "This is an example",
    description: "This is an example.",
  };

  // await addPost(postObject);

  // await delPost(posts[0].id);

  await addCommentToPost("63edbc1c-b8af-45e0-890f-3607d3799a73", {
    username: post.title,
    comment: "This is a comment",
  });

  return (
    <div>
      <PostsList posts={posts}></PostsList>
      {/* <PostsList posts={newPost}></PostsList> */}
    </div>
  );
}
