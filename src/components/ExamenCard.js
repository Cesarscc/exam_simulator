"use client";
import React from "react";
import StarRating from "./StarRating";
import { useRouter } from "next/navigation";

const ExamenCard = ({
  area,
  tema,
  title,
  description,
  puntaje,
  hover,
  url,
}) => {
  const router = useRouter();
  function goExam(e) {
    if (hover) {
      router.push(`/examen/${url}`);
    }
  }

  return (
    <>
      <span className="text-white text-2xl font-semibold font-serif w-60 text-center select-none">
        {title}
      </span>
      <span className="text-white text-xl font-extrabold font-mono select-none">
        {area}
      </span>
      <span className="text-white text-lg font-light font-sans select-none">
        {tema}
      </span>
      <span className="text-white text-base font-mono select-none">
        {description}
      </span>
      <span
        className={`bg-black text-white rounded-full w-[150px] text-center ${
          hover
            ? "cursor-pointer hover:text-black hover:bg-white hover:transition-all hover:delay-75 hover:animate-pulse"
            : ""
        }  font-medium font-mono select-none`}
        onClick={goExam}
      >
        Ir al Examen
      </span>
      <StarRating value={puntaje} />
    </>
  );
};

export default ExamenCard;
