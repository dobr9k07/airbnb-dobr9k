"use client";
import React, { RefObject } from "react";
import { Title } from "../title";
import { useCategoryIntersection } from "@/hooks";
import { POLICY_DATA } from "@/constans/policy";
import { ContactSection, PolicyITem } from "../reservationPolicyBlock";

interface Props {
  title: string;
  categoryId: number;
}

export const ReservationPolicy: React.FC<Props> = ({ title, categoryId }) => {
  const ref = useCategoryIntersection(categoryId);
  return (
    <section>
      <Title
        text="Політика бронювання"
        size="lg"
        className="font-medium mb-5.5"
      />
      <div
        className="w-full flex flex-col gap-9.5"
        id={title}
        ref={ref as RefObject<HTMLDivElement>}
      >
        {POLICY_DATA.map((item) => (
          <PolicyITem key={item.id} item={item} />
        ))}
      </div>

      <ContactSection />
    </section>
  );
};
