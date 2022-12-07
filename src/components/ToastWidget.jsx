import React from "react";

const ToastWidget = ({ text = "toast message" }) => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center z-100">
      <span className="mt-[1rem] text-center text-green-500 border-2 border-green-200 self-start bg-black/50  rounded-sm max-w-[80vw] w-[50vw] ">
        {text}
      </span>
    </div>
  );
};

export default ToastWidget;
