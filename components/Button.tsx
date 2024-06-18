"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  href,
  onPress,
}) => {
  const router = useRouter();

  const onClick = () => {
    if (href) {
      return router.push(href);
    }

    if (onPress) {
      return onPress();
    }

    return null;
  };
  return (
    <button
      className={twMerge(
        "bg-white text-neutral-900 py-2 px-5 rounded-full flex items-center justify-center hover:bg-neutral-300 transition border-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
