import React from "react";
import cards from "@/data/cards";
import Card from "@/components/Card";
const Page = () => {
  const array_cards = cards.map((value, ix) => {
    return (
      <Card
        area={value.area}
        tema={value.tema}
        title={value.title}
        description={value.description}
        puntaje={value.puntaje}
        url={value.url}
      />
    );
  });

  return (
    <>
      <div className="bg-[#6d6d6d] rounded-2xl flex justify-center w-[1400px] mx-auto h-[720px] mt-5 mb-14">
        <div className="grid grid-cols-3 gap-5 w-[1370px] h-[700px] justify-items-center mt-2 overflow-y-scroll dashboard">
          {array_cards.map((item, index) => (
            <div
              className="w-[400px] h-[450px] rounded-2xl border-4 flex flex-col items-center justify-evenly bg-[#aaaaaa]"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
