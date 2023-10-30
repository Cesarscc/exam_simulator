"use client";
import React, { useState, useEffect } from "react";
import Form from "@/components/Form";
import preguntas from "@/data/preguntas";

const page = () => {
  const [cardData, setCardData] = useState({});
  //TODO: Encriptar las respuestas correctas
  useEffect(() => {
    const storedData = localStorage.getItem("cardData");
    if (storedData) {
      setCardData(JSON.parse(storedData));
    }
  }, []);

  const keys = Object.keys(preguntas);
  let json_preguntas;
  for (let it = 0; it < keys.length; it++) {
    if (keys[it] == cardData.url) {
      json_preguntas = preguntas[keys[it]];
      break;
    }
  }

  return (
    <div>
      <Form preguntas={json_preguntas} />
    </div>
  );
};

export default page;
