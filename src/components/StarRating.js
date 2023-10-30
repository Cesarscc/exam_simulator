import React from "react";

function Star({ fillPercentage }) {
  return (
    <div className="relative inline-block">
      {/* Estrella de fondo (no rellena) */}
      <svg width="28" height="28" viewBox="0 0 28 28">
        <path
          d="M12 .587l3.668 10.43h10.924l-8.81 6.473 3.668 10.429-8.45-6.226-8.45 6.226 3.668-10.429-8.81-6.473h10.924z"
          fill="#eee"
        />
      </svg>
      {/* Estrella rellena con un ancho basado en el porcentaje de llenado */}
      <div
        className={`absolute top-0 left-0 overflow-hidden`}
        style={{
          width: `${fillPercentage}%`,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <path
            d="M12 .587l3.668 10.43h10.924l-8.81 6.473 3.668 10.429-8.45-6.226-8.45 6.226 3.668-10.429-8.81-6.473h10.924z"
            fill="#666666"
          />
        </svg>
      </div>
    </div>
  );
}

function StarRating({ value }) {
  const fullStars = Math.floor(value);
  const remainder = value - fullStars;
  const fillPercentage = remainder * 100;

  return (
    <div>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} fillPercentage={100} />;
        }
        if (i === fullStars) {
          return <Star key={i} fillPercentage={fillPercentage} />;
        }
        return <Star key={i} fillPercentage={0} />;
      })}
    </div>
  );
}

export default StarRating;
