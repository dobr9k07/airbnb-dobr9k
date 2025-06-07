import React from "react";

interface Props {
  className?: string;
}

const nav = [
  "Огляд",
  "Наявність і тарифи",
  "Зручності",
  "Відгуки",
  "Політика бронювання",
];

export const NavRoom: React.FC<Props> = ({ className }) => {
  return (
    <div className="w-full">
      <ul className="flex items-start gap-8 pt-[27px] pb-[27px]">
        {nav.map((item) => (
          <li key={item} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
