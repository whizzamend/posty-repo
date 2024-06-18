"use client";

import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { FaArrowLeft, FaCaretLeft, FaPlus, FaRepeat } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation"; // Import useNavigation for client-side routing
import toast from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  classNames?: string;
}

const Main: React.FC<HeaderProps> = ({ children, classNames }) => {
  const navigation = usePathname();

  const router = useRouter();
  const currentPath = navigation;

  return (
    <div className={twMerge("w-full h-full", classNames)}>
      <div className="w-full min-h-[80px] bg-neutral-900 flex items-center justify-between px-[10px] md:px-[54px]">
        <div>
          <h1 className="text-2xl cursor-pointer font-bold">Posts</h1>
        </div>
        <div className="flex gap-x-2 items-center justify-center">
          {window.innerWidth < 768 ? (
            <Button
              onPress={() => {
                router.push("/");
              }}
              className="w-[40px] h-[40px] p-1"
            >
              <FaRepeat />
            </Button>
          ) : (
            <Button
              onPress={() => {
                router.push("/");
              }}
              className="font-semibold flex gap-x-1 items-center justify-center"
            >
              <FaRepeat /> Refresh
            </Button>
          )}

          {currentPath !== "/posts/new" ? (
            <Button
              href="/posts/new"
              className="font-semibold flex gap-x-1 items-center justify-center"
            >
              <FaPlus /> New Post
            </Button>
          ) : (
            <Button
              onPress={async () => {
                try {
                  await toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 1000)), // Simulate 1 second delay

                    {
                      loading: "Redirecting...", // Message shown while promise is pending
                      success: "Redirected successfully", // Message shown when promise resolves successfully
                      error: "Failed to redirect", // Message shown when promise rejects (optional)
                    }
                  );
                  router.push("/posts");
                } catch (error) {
                  console.error("Error redirecting:", error);
                  toast.error("Failed to redirect");
                }
              }}
              className="font-semibold flex gap-x-1 items-center justify-center"
            >
              <FaArrowLeft /> Back
            </Button>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Main;
