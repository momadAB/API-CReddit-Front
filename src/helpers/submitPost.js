"use server";

import { addPost } from "@/actions/actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function submitPost(formData) {
  const newPost = await addPost(Object.fromEntries(formData));
  revalidatePath("/");
  revalidatePath(`/${newPost.id}`);
  redirect(`/${newPost.id}`);
}

export default submitPost;
