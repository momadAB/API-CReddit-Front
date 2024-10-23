import {
  addCommentToPost,
  addPost,
  deleteCommentToPost,
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

  await addCommentToPost(post.id, {
    username: post.title,
    comment: "This is a comment",
  });

  await deleteCommentToPost("82b7afd5-76a4-40f3-9828-c4f23367bfa4");

  return (
    <div>
      <PostsList posts={posts}></PostsList>
      {/* <PostsList posts={newPost}></PostsList> */}
    </div>
  );
}
