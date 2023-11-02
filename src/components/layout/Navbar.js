import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 flex h-12 pt-2 text-2xl text-slate-200">
      <div className="flex pl-20 basis-1/3">
        <Link
          href={"/"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline"
        >
          Exam
        </Link>
      </div>
      <div className="flex justify-around basis-2/3">
        <Link
          href={"/documentos"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline"
        >
          Documentos
        </Link>
        <Link
          href={"#"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline"
        >
          Comentarios
        </Link>
        <Link
          href={"#"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline"
        >
          Temas
        </Link>
        <Link
          href={"/examen"}
          className="hover:text-gray-400 hover:transition-all cursor-pointer grow-underline"
        >
          Exámenes
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
