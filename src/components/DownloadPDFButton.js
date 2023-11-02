"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const DownloadPDFButton = ({ urlDoc, name }) => {
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = async (event) => {
    event.preventDefault();

    setLoading(true);
    // Simular un retardo para la animación (por ejemplo, 2 segundos)
    await new Promise((res) => setTimeout(res, 2000));

    // Después del retardo, forzar el clic en el enlace para iniciar la descarga
    event.target.click();
    setLoading(false);
  };

  return (
    <div className="flex justify-center pt-5">
      <Link
        href={urlDoc}
        download
        ref={(link) => link && loading && link.click()}
        target="_blank"
      />
      <div onClick={handleDownloadClick}>
        {loading ? (
          <div className="loader_pdf" /> // Puedes usar tu propia animación aquí
        ) : (
          <button className="bg-[#f0f0f0] font-mono font-semibold text-[16px] border-4 rounded-3xl w-[150px] h-14 shadow-2xl hover:bg-black hover:text-white hover:animate-pulse-slow hover:transition-all hover:delay-150">
            Descargar PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default DownloadPDFButton;
