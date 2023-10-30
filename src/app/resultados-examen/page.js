"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [cardData, setCardData] = useState({});
  const [resultadosData, setResultadosData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("cardData");
    const resultsData = localStorage.getItem("resultadosData");
    if (storedData) {
      setCardData(JSON.parse(storedData));
    }
    if (resultsData) {
      setResultadosData(JSON.parse(resultsData));
    }
  }, []);
  function goToMain(e) {
    router.push("/");
  }

  return (
    <div className="w-[800px] h-[600px] border-8 rounded-2xl mx-auto my-10 space-y-12">
      <h1 className="text-white text-[34px] font-serif text-center mt-10">
        Resultados del {cardData.title}
      </h1>
      <p className="text-white font-mono text-center text-[30px]">
        Tema: {cardData.tema}
      </p>
      <p className="text-white text-center text-[30px] font-bold">
        Obtuviste un total de{" "}
        {(resultadosData.puntaje / resultadosData.lengthQuestions) * 100}% de
        aciertos
      </p>
      {(resultadosData.puntaje / resultadosData.lengthQuestions) * 100 > 50 ? (
        <>
          <p className="text-white font-sans text-center">
            Felicidades aprobaste este examen
          </p>
        </>
      ) : (
        <>
          <p className="text-white font-sans text-center text-[30px]">
            No Aprobaste este examen 😓
            <br />
            Mejor suerte en el siguiente intento 😎
          </p>
        </>
      )}
      <div className="flex justify-center">
        <button
          onClick={goToMain}
          className="w-[350px] h-[50px] border-8 rounded-2xl text-[20px] font-semibold text-white font-mono hover:text-black hover:bg-white hover:transition-all hover:delay-100 hover:animate-pulse"
        >
          Menú Principal
        </button>
      </div>
    </div>
  );
};

export default Page;
