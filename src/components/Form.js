import React, { useState, useEffect } from "react";
import ModalAlert from "./ModalAlert";
import Skeleton from "./Skeleton";
import { useRouter } from "next/navigation";

const Form = ({ preguntas }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState("");
  const [puntaje, setPuntaje] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [respuestasAleatorias, setRespuestasAleatorias] = useState([]);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!respuestaSeleccionada) {
      setModalMessage("No has seleccionado ninguna alternativa 😅");
      setIsModalVisible(true);
      return;
    }

    if (respuestaSeleccionada === preguntas[preguntaActual].respuestaCorrecta) {
      setPuntaje(puntaje + 1);
    }

    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      const lengthQuestions = preguntas.length;
      const resultadosData = {
        puntaje,
        lengthQuestions,
      };

      localStorage.setItem("resultadosData", JSON.stringify(resultadosData));

      router.push(`/resultados-examen`);
    }

    setRespuestaSeleccionada("");
  };

  function disorderArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (preguntas && preguntas[preguntaActual].respuestas.length > 0) {
      setRespuestasAleatorias(
        disorderArray([...preguntas[preguntaActual].respuestas])
      );
    }
  }, [preguntaActual, preguntas]);

  return (
    <>
      {isModalVisible && (
        <ModalAlert message={modalMessage} onClose={handleCloseModal} />
      )}
      {preguntas ? (
        <div className="flex flex-col w-[750px] h-[500px] justify-center mx-auto my-20 items-center border-8 rounded-3xl">
          <div>
            <h1 className="text-2xl text-white font-mono text-center">
              Pregunta N° {preguntaActual + 1}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-5 grid grid-rows-1 justify-items-center gap-5">
              <h2 className="text-xl text-white font-serif font-semibold text-center mx-5">
                {preguntas[preguntaActual].pregunta}
              </h2>
              {respuestasAleatorias.map((opcion, index) => (
                <label
                  key={index}
                  className={`text-white font-semibold w-[200px] h-[30px] border-4 rounded-2xl text-center flex items-center justify-center cursor-pointer ${
                    respuestaSeleccionada === opcion
                      ? "rounded-2xl bg-[#5d5d5d] animate__animated animate__fadeIn animate__faster"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="respuesta"
                    value={opcion}
                    className="hidden"
                    onChange={(e) => {
                      setRespuestaSeleccionada(e.target.value);
                    }}
                    checked={respuestaSeleccionada === opcion}
                  />
                  {opcion}
                </label>
              ))}
              <button
                className="bg-[#dcdcdc] font-semibold text-[25px] rounded-2xl border-4 border-[#7c7c7c] text-black w-[350px] h-[50px] mt-5 hover:bg-white hover:text-black hover:transition-all hover:delay-100"
                type={"submit"}
              >
                Enviar Respuesta
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <Skeleton />
        </>
      )}
    </>
  );
};

export default Form;
