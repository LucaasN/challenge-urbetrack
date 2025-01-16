import { useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { CardImage } from "../components";
import { useInView } from "react-intersection-observer";
import { useGetImages } from "../hooks/useImages";
import { useStore } from "../store"; 

export const Images: React.FC = () => {
  const { ref, inView } = useInView();
  const { data: images = [], status, error, fetchNextPage } = useGetImages();
  const favoritedIds = useStore((state) => state.favoritedIds); // Obtengo los IDs favoritos

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (status === "error" && error) {
    return (
      <Alert variant="danger" className="text-center">
        {error.message}
      </Alert>
    );
  }

  return (
    <Container>
      <Row>
        <h1 className="text-center mb-4">Imágenes</h1>
        {images.map( image => (
          <Col xs={12} md={4} key={image.id} className="card-pointer">
            <CardImage {...image} isFavorite={favoritedIds.includes(image.id)}/>
          </Col>
        ))}
        <div className="text-center" ref={ref}>
          <Spinner animation="border" variant="primary" />
        </div>
      </Row>
    </Container>
  );
};
