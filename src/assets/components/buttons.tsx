import React from "react";
import Button from "react-bootstrap/Button";

interface ButtonsExtension {
  variantName: string;
  TypeName: any;
  labelName: string;
}

const ButtonsComponent: React.FC<ButtonsExtension> = ({
  variantName,
  TypeName,
  labelName,
}) => {
  return (
    <div className="d-flex">
      <Button
        variant={variantName}
        type={TypeName}
        className="mt-3 w-100"
        style={{ maxWidth: "200px" }}
      >
        {labelName}
      </Button>
    </div>
  );
};

export default ButtonsComponent;
