"use client";

import Button from "@/components/Button";
import { deletePost, fetchPosts } from "@/supabase/supabaseClient";
import { Post } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getPosts() {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Error fetching posts");
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-160px)] flex items-center justify-center">
        <div className="honeycomb">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (posts.length == 0) {
    return (
      <div className="flex items-center justify-center md:mt-10 w-full overflow-hidden md:px-4 md:h-[calc(100vh-160px)]">
        <div
          className={twMerge(
            "p-4 w-[100vw] md:max-w-[700px] md:max-h-[760px] overflow-hidden overflow-y-auto bg-neutral-900 md:rounded-lg md:shadow-sm h-[calc(100vh-80px)] gap-y-2 flex flex-col"
          )}
        >
          <p className="text-white text-center">No posts to show</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center md:mt-10 w-full overflow-hidden md:px-4 md:h-[calc(100vh-160px)]">
      <div
        className={twMerge(
          "p-4 w-[100vw] md:max-w-[700px] md:max-h-[760px] overflow-hidden overflow-y-auto bg-neutral-900 md:rounded-lg md:shadow-sm h-[calc(100vh-80px)] gap-y-2 flex flex-col"
        )}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-neutral-700 rounded-lg px-3 py-2 w-full"
          >
            <pre className="text-wrap">"{post.body}"</pre>
            <div className="flex items-center justify-between mt-3">
              <Button
                className="bg-transparent text-white hover:bg-neutral-800 w-[50px] h-[50px] p-1 hover:text-red-600"
                onPress={() => {
                  deletePost(post.id);
                  router.push("/");
                }}
              >
                <FaTrash />
              </Button>
              <p className="text-end">Posted by: {post.posted_by}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
