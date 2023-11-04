"use client";
import Link from "next/link";
import React from "react";

const CardComent = ({ tema }) => {
  const handleClick = () => {
    const memoryTema = { tema };
    localStorage.setItem("memoryTema", JSON.stringify(memoryTema));
  };

  return (
    <div className="bg-[#aaaaaa] w-[550px] h-[70px] pt-5 rounded-2xl border-2  text-white hover:text-black hover:bg-white hover:transition-all hover:delay-75 hover:animate-pulse-slow">
      <Link
        href={"/comentarios/" + tema}
        onClick={handleClick}
        className="flex justify-center font-serif font-semibold text-[25px]"
      >
        {tema}
      </Link>
    </div>
  );
};

export default CardComent;
