import React from "react";
import Button from "react-bootstrap/Button";

interface ButtonsExtension {
  variantName: string;
  labelName: string;
}

const ButtonsComponent: React.FC<ButtonsExtension> = ({
  variantName,
  labelName,
}) => {
  return (
    <div className="d-flex">
      <Button
        variant={variantName}
        
        className="mt-3 w-100"
        style={{ maxWidth: "200px" }}
      >
        {labelName}
      </Button>
    </div>
  );
};

export default ButtonsComponent;
