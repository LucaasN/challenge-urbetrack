import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { CardImage } from "../components";
import { useFavorites } from "../hooks/useFavorites";
import { useGetImage } from "../hooks/useImages";

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>(); //Obtengo el id de la imagen por URL
  const { data: image, error, isLoading } = useGetImage(id || "");
  const { isFavorite } = useFavorites();

  if (error) {
    return (
      <Alert variant="danger" className="text-center">
        {error.message}
      </Alert>
    );
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center mb-4">Detalle de imagen</h1>
        </Col>
        {isLoading && (
          <Col xs={12} className="text-center mt-5">
            <Spinner animation="border" variant="primary" />
          </Col>
        )}
        {!isLoading && image && (
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <CardImage {...image} isFavorite={isFavorite(image.id)} />
          </Col>
        )}
      </Row>
    </Container>
  );
};
