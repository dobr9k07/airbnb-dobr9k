import * as React from "react";

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => {
  return (
    <div>
      <h1>Дякуємо за реєстрацію!</h1>
      <p>Ваш код підтвердження:</p>
      <h2>{code}</h2>
    </div>
  );
};
