"use server";
import reviews from "@/data/reviews";
import fs from "fs";

export default async function ServerAction(formData) {
  const name = formData.get("name");
  const tema = formData.get("tema");
  const comentario = formData.get("comentario");
  const puntaje = parseFloat(formData.get("puntaje"));
  const reviewsList = [
    {
      name,
      tema,
      comentario,
      puntaje,
    },
    ...reviews,
  ];
  const reviewsStr = JSON.stringify(reviewsList);
  if (puntaje > 0) {
    fs.writeFile(
      "src/data/reviews.js",
      `export default ${reviewsStr}`,
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Data insertada Correctamente");
      }
    );
  }
}
