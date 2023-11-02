"use client";
import DownloadPDFButton from "@/components/DownloadPDFButton";
import documentos from "@/data/documentos";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const pathname = usePathname();
  let infoDocument = documentos[pathname.split("/")[2]];

  return (
    <div className="w-[900px] h-[600px] bg-[#969696] mx-auto my-20">
      <div className="flex flex-col items-center gap-5 pt-12">
        {infoDocument.map((item, ix) => (
          <div
            key={ix}
            className="w-[650px] h-[150px] bg-[#d1d1d1] rounded-2xl border-4"
          >
            <p className="text-black text-[25px] text-center font-mono font-semibold">
              {item.nombre_doc}
            </p>
            <DownloadPDFButton
              urlDoc={item.link}
              name={item.nombre_doc + ".pdf"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
