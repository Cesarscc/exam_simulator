import CardComent from "@/components/CardComent";
import reviews from "@/data/reviews";
import React from "react";

const Page = () => {
  const temas = [];
  reviews.map((item, ix) => temas.push(item.tema));
  const temasUniques = [...new Set(temas)];

  return (
    <div className="w-[1200px] h-[600px] border-4 rounded-3xl mx-auto my-20 relative flex justify-center">
      <p className="text-white text-[30px] text-center absolute -top-14 border-4 bg-gray-400 w-[600px] h-[80px] pt-5 rounded-t-xl">
        COMENTARIOS POR CURSO
      </p>
      <div className="flex flex-col justify-center gap-5">
        {temasUniques.map((item, ix) => (
          <CardComent key={ix} tema={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
