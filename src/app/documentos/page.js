import documentosData from "@/data/documentos";
import Link from "next/link";
import React from "react";

const Page = () => {
  const keysDocument = Object.keys(documentosData);

  return (
    <div className="w-[1000px] h-[600px] border-4 mx-auto flex flex-col justify-center items-center rounded-2xl my-20 relative">
      <p className="text-white text-center font-mono font-extrabold bg-gray-400 absolute text-[25px] px-5 -top-16 rounded-t-2xl h-[80px] pt-5">
        ELIGE QUE ÁREA DESCARGAR LOS RECURSOS
      </p>
      <div className="w-[900px] h-[550px] rounded-2xl mt-5">
        <div className="grid grid-rows-1 justify-items-center gap-20">
          {keysDocument.map((item, ix) => (
            <Link
              href={`/documentos/${item}`}
              className="text-white font-semibold text-[30px] hover:text-black hover:transition-all hover:delay-100 hover:bg-white hover:animate-pulse w-[450px] h-[100px] text-center pt-6 border-4 rounded-2xl"
              key={ix}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
