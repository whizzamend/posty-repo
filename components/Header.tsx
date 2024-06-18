import { twMerge } from "tailwind-merge";

interface HeaderProps {
  children: React.ReactNode;
  classNames?: string;
}

const Header: React.FC<HeaderProps> = ({ children, classNames }) => {
  return (
    <div className={twMerge("w-full h-full bg-neutral-700", classNames)}>
      {children}
    </div>
  );
};

export default Header;
