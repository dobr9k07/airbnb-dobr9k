"use client";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Props {
  isFavorite?: boolean;
  className?: string;
}

export const LikeButton: React.FC<Props> = ({
  isFavorite = false,
  className,
}) => {
  const [clickFavorite, setClickFavorite] = useState(false);

  useEffect(() => {
    setClickFavorite(isFavorite);
  }, [isFavorite]);

  const toggleFavorite = () => {
    setClickFavorite((prev) => !prev);
  };
  return (
    <button onClick={toggleFavorite}>
      <Heart
        className={`w-6 h-6 transition-colors duration-200 ${
          clickFavorite ? "text-primary" : "text-black"
        }`}
        fill={clickFavorite ? "currentColor" : "none"}
      />
    </button>
  );
};
