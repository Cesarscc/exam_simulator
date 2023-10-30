import React, { useState, useRef, useEffect } from "react";
import RigthArrow from "@/assets/RigthArrow";
import LeftArrow from "@/assets/LeftArrow";

function Carousel3D({ items, setHover }) {
  const carouselRef = useRef(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHoveringFocused, setIsHoveringFocused] = useState(false);
  const itemAngle = 360 / items.length;

  useEffect(() => {
    const rotate = `rotateY(${rotationAngle}deg)`;
    if (carouselRef.current) {
      carouselRef.current.style.transform = rotate;
    }
  }, [rotationAngle]);

  const nextSlide = () => {
    setRotationAngle((prevAngle) => prevAngle - itemAngle);
  };

  const prevSlide = () => {
    setRotationAngle((prevAngle) => prevAngle + itemAngle);
  };

  let currentIndex = Math.round((-rotationAngle / itemAngle) % items.length);
  if (currentIndex < 0) {
    currentIndex += items.length;
  }

  return (
    <div
      className="perspective mx-auto relative w-[420px] h-[400px] mt-48"
      onMouseLeave={() => {
        setIsHoveringFocused(false);
        setHover(false);
      }}
    >
      <div
        ref={carouselRef}
        className="carousel-3d absolute top-0 left-0 w-[420px] h-[400px]"
      >
        {items.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setIsHoveringFocused(currentIndex === index);
              setHover(currentIndex === index);
            }}
            className={`carousel-item absolute w-[420px] h-[400px] flex flex-col items-center justify-evenly bg-[#888888] border-4 rounded-xl ${
              currentIndex === index ? "focused" : "blurred"
            }`}
            style={{
              transform: `rotateY(${index * itemAngle}deg) translateZ(320px)`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      {isHoveringFocused && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 effect_vanish"
        >
          <LeftArrow />
        </button>
      )}
      {isHoveringFocused && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 effect_vanish"
        >
          <RigthArrow />
        </button>
      )}
    </div>
  );
}

export default Carousel3D;
