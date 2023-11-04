"use client";
import { useState, useEffect } from "react";

const SelectedRaiting = ({ clearRaiting, setClearRaiting, onRate }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (clearRaiting) {
      console.log(rating);
      setRating(0);
      setClearRaiting(false);
    }
  });

  const handleStarClick = (index, event) => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const decimalRating = Math.ceil((offsetX / rect.width) * 10) / 10;

    const computedRating = index + decimalRating;
    setRating(computedRating);
    onRate(computedRating);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const isFullStar = index + 1 <= rating;
        const isPartialStar = index < rating && index + 1 > rating;
        const fillPercentage = (rating - index) * 100;

        return (
          <div
            key={index}
            onClick={(e) => handleStarClick(index, e)}
            className="w-6 h-6 cursor-pointer relative"
          >
            <svg
              className={`absolute top-0 left-0 w-full h-full ${
                isFullStar ? "text-yellow-400" : "text-gray-400"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {isPartialStar && (
                <defs>
                  <linearGradient
                    id={`grad${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset={`${fillPercentage}%`}
                      style={{ stopColor: "#FFD700", stopOpacity: 1 }}
                    />
                    <stop
                      offset={`${fillPercentage}%`}
                      style={{ stopColor: "#A9A9A9", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
              )}
              <path
                d="M10 15.27L16.18 19l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 19z"
                fill={isPartialStar ? `url(#grad${index})` : undefined}
              ></path>
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedRaiting;
