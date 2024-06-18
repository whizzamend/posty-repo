import * as Dialog from "@radix-ui/react-dialog";
import { CgClose } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  onChange: (value: boolean) => void;
  title: string;
  desc: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  desc,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange} defaultOpen={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-neutral-800 p-[25px] focus:outline-none rounded-md">
          <p className="text-xl font-bold text-center mb-4">{title}</p>
          <p className="text-sm text-center mb-5 leading-normal">{desc}</p>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="absolute text-neutral-400 hover:text-neutral-100 transition top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none">
              <CgClose size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
