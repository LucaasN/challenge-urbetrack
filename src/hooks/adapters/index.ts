import { useStore } from '../../store'; 
import { InfiniteData } from "@tanstack/react-query";
import { OriginalImage, Image } from "../../types";

export const imageAdapter = (image: OriginalImage): Image => {
  const favoritedIds = useStore.getState().favoritedIds; // Obtengo IDs favoritos actuales
  return {
    id: image.id,
    author: image.author,
    width: image.width,
    height: image.height,
    url: image.url,
    download_url: image.download_url,
    isFavorite: favoritedIds.includes(image.id), // Verifico si es favorito
  };
};

export const imagesAdapter = (data: InfiniteData<OriginalImage[], number>): Image[] => {
  const images = data?.pages.reduce((acc, cur) => [...acc, ...cur], []) || [];
  return images.map(imageAdapter);
};
