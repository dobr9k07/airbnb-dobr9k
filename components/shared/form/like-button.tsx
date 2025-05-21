'use client';
import { Heart } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const LikeButton: React.FC<Props> = ({ className }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <button onClick={toggleFavorite}>
      <Heart
        className={`w-6 h-6 transition-colors duration-200 ${
          isFavorite ? "text-primary" : "text-black"
        }`}
        fill={isFavorite ? "currentColor" : "none"}
      />
    </button>
  );
};
