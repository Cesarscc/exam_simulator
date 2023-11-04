import Close from "@/assets/Close";
import React from "react";

const ModalAlert = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn animate__faster z-40">
      <div className="bg-white w-[300px] h-[150px] p-4 rounded-xl">
        <p className="text-center font-mono font-semibold text-xl">{message}</p>
        <div className="flex justify-center">
          <p
            className="mt-5 cursor-pointer w-[52px] flex justify-center"
            onClick={onClose}
          >
            <Close />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
