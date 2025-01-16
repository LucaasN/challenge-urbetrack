import { useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Image } from "../types";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { IoMdCloudDownload } from "react-icons/io";
import { useFavorites } from "../hooks/useFavorites";
import { showToast } from "../utils/toast";

export const CardImage: React.FC<Image> = (image) => {
  const { id, author, download_url, url, width, height } = image;
  const { toggleFavorite, isFavorite } = useFavorites();
  const params = useParams();
  const navigate = useNavigate();
  const handleOnClickImage = () => navigate("/details/" + id);
  const handleGoBack = () => navigate(-1);

  const handleDownloadImage = async () => {
    try {
      const response = await fetch(download_url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `image-${id}.jpg`;
      link.click();

      URL.revokeObjectURL(blobUrl);
    } catch {
      showToast("error", "Los campos nombre y contraseña son obligatorios");
    }
  };

  return (
    <Card className="mb-4 position-relative p-2 shadow">
      <Card.Img
        variant="top"
        src={download_url}
        onClick={handleOnClickImage}
        className="bg-light rounded"
        width={250}
        height={250}
        alt={`Imagen de ${author}`}
      />

      <Button
        variant="outline-primary"
        className="position-absolute rounded-circle btn-favorite end-0 bg-light-subtle"
        onClick={(event) => toggleFavorite(image, event)}
        type="button"
      >
        {isFavorite(id) ? <MdFavorite /> : <MdFavoriteBorder />}
      </Button>

      <Card.Body>
        <Card.Title className="text-center">
          Autor: <b>{author}</b>
        </Card.Title>

        {params.id === id.toString() && (
          <div>
            <p>
              <b>Alto:</b> {height}px
            </p>
            <p>
              <b>Ancho:</b> {width}px
            </p>
            <p>
              <b>Url:</b>{" "}
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </p>

            <div className="d-flex justify-content-between">
              <Button variant="outline-primary" onClick={handleGoBack}>
                <IoArrowBack />
                Atrás
              </Button>
              <Button variant="primary" onClick={handleDownloadImage}>
                <IoMdCloudDownload className="me-1" />
                Descargar
              </Button>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
