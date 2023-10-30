"use client";
import Layout from "@/components/layout";
import ExamenCard from "@/components/ExamenCard";
import "animate.css";
import cards from "@/data/cards";
import Carousel from "@/components/Carousel";
import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);

  const array_cards = cards.map((value, ix) => {
    return (
      <ExamenCard
        area={value.area}
        tema={value.tema}
        title={value.title}
        description={value.description}
        puntaje={value.puntaje}
        hover={hover}
        url={value.url}
      />
    );
  });

  return (
    <Layout>
      <main>
        <div className="h-[900px] w-full relative flex justify-center">
          <div className="h-32 w-[700px] bg-[#b0b0b0] mt-10 rounded-t-2xl absolute z-20">
            <p className="pt-10 text-[42px] text-[#f6f6f6] font-semibold animate__animated animate__fadeInDown text-center">
              Exámenes Mejores Punteados
            </p>
          </div>
          <div className="h-[750px] w-[1200px] border-r-[#888888] border-4 rounded-2xl absolute mt-28 z-10">
            <Carousel items={[...array_cards]} setHover={setHover} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
