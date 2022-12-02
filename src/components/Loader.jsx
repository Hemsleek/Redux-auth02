import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 lef†-0 z-100 w-screen h-screen flex items-center justify-center bg-black/10">
      <span
        className="flex h-[2rem] w-[2rem] rounded-full border-white border-2 animate-spin border-t-red-900
        "
      />
    </div>
  );
};

export default Loader;
