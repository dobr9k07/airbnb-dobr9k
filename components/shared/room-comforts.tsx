import React from "react";

interface Props {
  comfort: string[];
}

export const RoomComforts: React.FC<Props> = ({ comfort }) => {
  return (
    <ul className="list-disc pl-5 text-base columns-2">
      {comfort.map((amenity) => (
        <li key={amenity}>{amenity}</li>
      ))}
    </ul>
  );
};
