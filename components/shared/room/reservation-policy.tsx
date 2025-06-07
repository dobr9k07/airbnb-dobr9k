import React from "react";
import { Title } from "../title";
import Image from "next/image";

export const ReservationPolicy: React.FC = () => {
  return (
    <>
      <Title
        text="Політика бронювання"
        size="lg"
        className="font-medium mb-5.5"
      />
      <div className="w-full flex flex-col gap-9.5 mb-10">
        <div className="flex gap-3.75 items-start">
          <Image
            src={"/svg/IconClok.svg"}
            alt="clock"
            width={30}
            height={30}
            className="object-cover"
          />
          <div className="flex flex-col gap-2.75">
            <p className="text-xl font-light">
              Заселення о 16:00. Виселення об 11.00
            </p>
            <p className="text-base font-light max-w-[540px]">
              Ви можете запросити ранній заїзд та/або пізній виїзд після
              бронювання. Наша команда зробить усе можливе, щоб задовольнити
              будь-які запити залежно від наявності.
            </p>
          </div>
        </div>
        <div className="flex gap-3.75 items-start">
          <Image
            src={"/svg/IconDisablePerson.svg"}
            alt="clock"
            width={30}
            height={30}
            className="object-cover"
          />
          <div className="flex flex-col gap-2.75">
            <p className="text-xl font-light">Доступність</p>
            <ul className="text-base font-light max-w-[540px] list-disc">
              <li>Дозвіл для інвалідних візків недоступний </li>
              <li>Є ліфти</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3.75 items-start">
          <Image
            src={"/svg/IconRoole.svg"}
            alt="clock"
            width={30}
            height={30}
            className="object-cover"
          />
          <div className="flex flex-col gap-2.75">
            <p className="text-xl font-light">Правила дому</p>
            <ul className="text-base font-light max-w-[540px] list-disc">
              <li>Куріння заборонено ( навіть на балконах ) </li>
              <li>Без домашніх тварин ( навіть дуже милих )</li>
              <li>Жодних вечірок ( навіть дуже тихих )</li>
            </ul>
            <p className="text-xs font-thin ml-[-25px]">
              * Будь ласка, поважайте своїх сусідів і зведіть до мінімуму шум з
              22:00 до 8:00.
            </p>
          </div>
        </div>
        <div className="flex gap-3.75 items-start">
          <Image
            src={"/svg/IconAllert.svg"}
            alt="clock"
            width={30}
            height={30}
            className="object-cover"
          />
          <div className="flex flex-col gap-2.75">
            <p className="text-xl font-light">Зверніть увагу</p>
            <ul className="font-light max-w-[540px] list-disc">
              <li>Обслуговування номерів і щоденне прибирання не доступні .</li>
              <li>Це центральне місце , де чутно шум поїздів .</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="font-light mb-5">Що ще ви хотіли б знати?</p>
      <p className="font-light">
        Надішліть електронного листа нашому відділу на hata@gmail.com.
      </p>
    </>
  );
};
