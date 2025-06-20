import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="relative bg-tertiary rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="sticky top-2 right-2 self-end z-10 text-white hover:text-gray-400 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 p-6" style={{ maxHeight: '80vh' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 