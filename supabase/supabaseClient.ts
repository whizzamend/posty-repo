import { Post } from "@/types";
import { createClient } from "@supabase/supabase-js";
import React from "react";
import toast from "react-hot-toast";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseApiKey);

export async function fetchPosts(): Promise<Post[]> {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) {
    toast.error(error.message);
  }
  return data as Post[];
}

export const insertPost = async (body: string, username?: string) => {
  const { error } = await supabase
    .from("posts")
    .insert({ body, posted_by: username || "Guest" });
  if (error) {
    toast.error(error.message);
  }
  toast.success("Posted");
};

export const deletePost = async (postId: string) => {
  const { error } = await supabase.from("posts").delete().eq("id", postId);

  if (error)
    return toast.error("Could not delete post with id: " + postId + "!");

  return toast.success("Post deleted successfully");
};
