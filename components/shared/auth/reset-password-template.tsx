import React from "react";

interface Props {
  code: string;
}

export const ResetPasswordTemplate: React.FC<Props> = ({ code }) => {
  return (
    <div>
      <h1>Ви намагаєтися змінити свій пароль на hata:</h1>
      <p>
        <a href={`http://localhost:3000/auth/reset-password?code=${code}`}>
          Скинути пароль
        </a>
      </p>
      <p>Якщо це не ви, ви можете проігнорувати це повідомлення.</p>
    </div>
  );
};
