import React from "react";
import { Title } from "./title";
import { FormCheckbox } from "./form";

interface Props {
  title: string;
  descriptionHeader?: string;
  descriptionFooter: string;
  fields: {
    name: string;
    label: string;
  }[];
}

export const NotificationSection: React.FC<Props> = ({
  title,
  descriptionHeader,
  descriptionFooter,
  fields,
}) => {
  return (
    <>
      <Title text={title} size="md" className="font-normal" />
      <p className="text-2xl font-light">
        {descriptionHeader && (
          <>
            <span>{descriptionHeader}</span>
            <br />
          </>
        )}
        <span>{descriptionFooter}</span>
      </p>
      {fields.map((field) => (
        <FormCheckbox key={field.name} name={field.name} label={field.label} />
      ))}
    </>
  );
};
