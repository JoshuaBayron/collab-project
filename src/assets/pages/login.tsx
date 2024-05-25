import { Container, Row, Col, Form } from "react-bootstrap";
import logo from "../burntot/FB_IMG_1586272040225.jpg";
import FormComponent from "../components/form";
import ButtonComponent from "../components/buttons";
import ImageComponent from "../components/ImageRounds";

export default function Login() {
  return (
    <Container className="d-flex vh-100">
      <Row className="justify-content-center align-self-center w-100">
        <Col md={4} lg={3} className="d-flex justify-content-center">
          <ImageComponent source={logo} shape={"roundedCircle"} />
        </Col>
        <Col md={8} lg={6}>
          <div className="d-flex align-items-center mb-3">
            <h2>Welcome to Burn's World</h2>
          </div>
          <Form>
            <FormComponent labelName="Email Address" typeName="email" />
            <FormComponent labelName="Password" typeName="password" />
            <ButtonComponent
              variantName="primary"
              TypeName="submit"
              labelName="Submit"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
