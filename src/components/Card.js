"use client";
import React from "react";
import StarRating from "./StarRating";
import Link from "next/link";

const Card = ({ area, tema, title, description, puntaje, url }) => {
  const handleClick = () => {
    const cardData = { area, tema, title, description, puntaje, url };
    localStorage.setItem("cardData", JSON.stringify(cardData));
  };

  return (
    <>
      <span className="text-white text-2xl text-center font-serif">
        {title}
      </span>
      <span className="text-white text-lg font-mono">{area}</span>
      <span className="text-white text-lg font-bold">{tema}</span>
      <span className="text-white text-base font-sans ">{description}</span>
      <Link
        href={"/examen/" + url}
        onClick={handleClick}
        className="bg-black text-white rounded-full w-[150px] text-center cursor-pointer hover:text-black hover:bg-white hover:transition-all hover:delay-75 hover:animate-pulse font-medium font-mono select-none"
      >
        Ir al Examen
      </Link>
      <StarRating value={puntaje} />
    </>
  );
};

export default Card;
