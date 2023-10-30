import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-black p-10 w-[750px] h-[500px] mx-auto my-20 border-8 border-gray-500 rounded-3xl">
      <div className="bg-gray-500 w-1/3 h-10 mb-6 animate-pulse-slow mx-auto"></div>
      <div className="bg-gray-500 w-3/4 h-20 mb-6 animate-pulse-slow mx-auto"></div>
      <div className="bg-gray-500 w-[200px] h-8 my-3 animate-pulse-slow mx-auto border-4 rounded-2xl"></div>
      <div className="bg-gray-500 w-[200px] h-8 my-3 animate-pulse-slow mx-auto border-4 rounded-2xl"></div>
      <div className="bg-gray-500 w-[200px] h-8 my-3 animate-pulse-slow mx-auto border-4 rounded-2xl"></div>
      <div className="bg-gray-500 w-[200px] h-8 my-3 animate-pulse-slow mx-auto border-4 rounded-2xl"></div>
      <div className="bg-gray-400 mt-6 w-[350px] h-[50px] animate-pulse-slow mx-auto rounded-2xl border-4"></div>
    </div>
  );
};

export default Skeleton;
