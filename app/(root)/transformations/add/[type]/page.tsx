import Header from "@/components/shared/Header";
import React, { FC } from "react";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";

interface IAddTransformationTypePageProps {
  params: {
    type: "restore" | "removeBackground" | "fill" | "remove" | "recolor";
  };
}
const AddTransformationTypePage: FC<IAddTransformationTypePageProps> = ({
  params: { type },
}) => {
  const transformation = transformationTypes[type];
  return (
    <div>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm
        action={"Add"}
        userId={""}
        type={type}
        creditBalance={0}
      />
    </div>
  );
};

export default AddTransformationTypePage;
