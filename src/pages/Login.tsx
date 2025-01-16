import { useLogin } from "../hooks/useLogin";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

export const Login: React.FC = () => {
  const {
    userName,
    setUserName,
    showPassword,
    setShowPassword,
    password,
    setPassword,
    handleSubmit,
  } = useLogin(); // Custom hook de login/logout

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Card className="mt-5">
            <Card.Body>
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="./logo.jpg"
                  className="rounded"
                  height={50}
                  width={50}
                />
              </div>

              <Form className="d-flex flex-column" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Nombre
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      placeholder="nombre"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2" className="pe-0">
                    Contraseña
                  </Form.Label>
                  <Col sm="10" className="d-flex align-items-center">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      variant="outline-primary"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="ms-2"
                    >
                      {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                    </Button>
                  </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
