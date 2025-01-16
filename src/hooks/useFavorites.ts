import { useStore } from './../store/index';
import { MouseEvent } from "react";
import { Image } from "../types";

export const useFavorites = () => {
  
  const favoritedIds = useStore(state => state.favoritedIds);
  const favoriteImages = useStore(state => state.favoriteImages);
  const addFavoriteImage = useStore(state => state.addFavoriteImage);
  const removeFavoriteImage = useStore(state => state.removeFavoriteImage);
  const isFavorite = (id: string) => favoritedIds.includes(id)
  
  const toggleFavorite = (image: Image, e?: MouseEvent) => {
    if (e) e.stopPropagation();
    const mutableImage = { ...image, isFavorite: !image.isFavorite };
    if (mutableImage.isFavorite) {
      addFavoriteImage(mutableImage);
      return;
    }
    removeFavoriteImage(mutableImage);
  };

  return { toggleFavorite, isFavorite, favoriteImages }
}
