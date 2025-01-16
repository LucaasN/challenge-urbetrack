import { Container, Row, Col, Alert } from "react-bootstrap";
import { CardImage } from "../components";
import { useFavorites } from "../hooks/useFavorites";

export const MyImages: React.FC = () => {
  
  const { favoriteImages = [] } = useFavorites();

  return (
    <Container>
      <Row>
        <h1 className="text-center mb-4">Mis Imágenes Favoritas</h1>

        {favoriteImages.length === 0 ? (
          <Alert variant="info" className="text-center">
            No tienes imágenes guardadas en favoritos.
          </Alert>
        ) : (
          favoriteImages.map( image => (
            <Col xs={12} md={4} key={image.id} className="card-pointer">
              <CardImage {...image} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
