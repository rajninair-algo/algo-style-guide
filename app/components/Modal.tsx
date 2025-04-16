import { ReactNode } from "react";
import { Button } from "./buttons/Buttons";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: () => void;
  title?: string;
  btnText?: string;
  children: ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  handleSubmit,
  title,
  btnText,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md relative animate-modal-fade overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
          {title && (
            <h2 className="text-lg font-semibold text-white">{title}</h2>
          )}
          <button
            title="Close"
            onClick={onClose}
            className="text-white hover:text-gray-200 text-xl font-bold hover:scale-105 duration-75"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="">
          <div className="px-6 py-4">{children}</div>

          <hr />
          {/* Footer */}
          <div className="flex justify-between p-4 ">
            <Button size="md" outline variant={"default"} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              {btnText ? btnText : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
