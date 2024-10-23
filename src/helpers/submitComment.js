"use server";

import { addCommentToPost } from "@/actions/actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function submitComment(id, commentData) {
  console.log(id, commentData);
  const newComment = await addCommentToPost(id, commentData);
  console.log(newComment);
  revalidatePath(`/${id}`);
  redirect(`/${id}`);
}

export default submitComment;
