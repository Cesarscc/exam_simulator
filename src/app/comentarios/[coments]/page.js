"use client";
import React, { useEffect, useState } from "react";
import reviews from "@/data/reviews";
import ServerAction from "@/actions/ServerAction";
import StarRating from "@/components/StarRating";
import SelectedRaiting from "@/components/SelectedRaiting";
import ModalAlert from "@/components/ModalAlert";

const Page = () => {
  const [tema, setTema] = useState({});
  useEffect(() => {
    const temaData = localStorage.getItem("memoryTema");
    if (temaData) {
      setTema(JSON.parse(temaData));
    }
  }, []);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [clearRaiting, setClearRaiting] = useState(false);

  const handleSubmit = (e) => {
    if (
      selectedRating != 0 &&
      document.getElementsByName("name")[0].value != "" &&
      document.getElementsByName("comentario")[0].value != ""
    ) {
      setModalMessage("Gracias por dejar tu comentario 🙌🤩🤠");
      setIsModalVisible(true);
    } else {
      setModalMessage("Te falta rellenar algún dato 😓");
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    if (
      selectedRating != 0 &&
      document.getElementsByName("name")[0].value != "" &&
      document.getElementsByName("comentario")[0].value != ""
    ) {
      setSelectedRating(0);
      document.getElementsByName("name")[0].value = "";
      document.getElementsByName("comentario")[0].value = "";
      setClearRaiting(true);
    }
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && (
        <ModalAlert message={modalMessage} onClose={handleCloseModal} />
      )}

      <div className="w-[1050px] h-[950px] border-4 mx-auto my-20">
        <p className="text-center text-white text-[30px] font-mono font-semibold">
          Comentarios sobre {tema.tema}
        </p>
        <div className="flex flex-col w-[700px] mx-auto">
          <form className="flex flex-col space-y-10" action={ServerAction}>
            <input type="text" hidden name="tema" value={tema.tema} />
            <input
              className="rounded-xl pl-5"
              placeholder="Ingresa tu nombre"
              type="text"
              name="name"
              required
            />
            <textarea
              placeholder="Redacta tu comentario"
              className="rounded-xl resize-none pl-5"
              name="comentario"
              id=""
              cols={50}
              rows={8}
              required
            ></textarea>
            <div className="flex flex-col items-center gap-2">
              <input
                type="text"
                hidden
                name="puntaje"
                value={selectedRating.toFixed(1)}
              />

              <SelectedRaiting
                clearRaiting={clearRaiting}
                setClearRaiting={setClearRaiting}
                onRate={(rating) => setSelectedRating(rating)}
              />
              <p className="text-white">
                Examen puntuado: {selectedRating.toFixed(1)}
              </p>
            </div>
            <div className="flex justify-center mb-5">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-[200px] h-[30px] bg-orange-500 rounded-2xl border-4 text-white mb-5 hover:text-black hover:bg-slate-400 hover:animate-pulse-slow hover:delay-100"
              >
                Añadir Comentario
              </button>
            </div>
          </form>
          <section className="flex flex-col items-center py-5 h-[350px] gap-5 overflow-y-scroll dashboard border-2 rounded-xl w-[750px]">
            {reviews.map((item, ix) =>
              item.tema === tema.tema ? (
                <article
                  className="border-4 w-[600px] flex flex-col items-center gap-5"
                  key={ix}
                >
                  <p className="text-center text-white text-[24px] font-semibold">
                    {item.name}
                  </p>
                  <p className="text-white">{item.comentario}</p>
                  <StarRating value={item.puntaje} />
                </article>
              ) : (
                <></>
              )
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
