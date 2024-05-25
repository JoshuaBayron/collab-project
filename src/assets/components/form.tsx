import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

interface FormNames {
  labelName: string;
  typeName: string;
}

const FormComponent: React.FC<FormNames> = ({ labelName, typeName }) => {
  return (
    <Form.Group className="mb-3"  style={{ maxWidth: '300px' }}>
      <FloatingLabel
        controlId="floatingInput"
        label={labelName}
        className="mb-3"
      >
        <Form.Control type={typeName} placeholder={labelName} />
      </FloatingLabel>
    </Form.Group>
  );
};

export default FormComponent;
