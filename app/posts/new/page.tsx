"use client";

import Button from "@/components/Button";
import { insertPost } from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const NewPost = () => {
  const router = useRouter();

  const handleSubmit = () => {
    const body = (document.getElementById("content") as HTMLInputElement).value;
    const user = (document.getElementById("username") as HTMLInputElement)
      .value;

    if (body.trim() == "") {
      return toast.error("Both of the fields are required!");
    }

    insertPost(body, user);
    router.push("/");
  };
  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      <div className="flex flex-col items-center gap-y-2 bg-neutral-900 md:w-[500px] md:rounded-lg md:h-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <input
          className="mt-5 bg-white px-4 py-3 outline-none w-[95%] text-neutral-900 rounded-lg border-2 transition-colors duration-100 border-solid focus:border-neutral-700 border-[#2B3040]"
          placeholder="Enter email or username"
          type="text"
          id="username"
        />
        <textarea
          className="text-left bg-white px-4 py-3 outline-none w-[95%] h-[75%] text-neutral-900 rounded-lg border-2 transition-colors duration-100 border-solid focus:border-neutral-700 border-[#2B3040] resize-none"
          placeholder="Write the article here"
          id="content"
        />
        <Button className="w-[95%] h-[7%]" onPress={handleSubmit}>
          Post
        </Button>
      </div>
    </div>
  );
};

export default NewPost;
