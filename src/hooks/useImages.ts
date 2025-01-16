import { fetchImages, fetchImage } from '../services/service';
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { imagesAdapter, imageAdapter } from "./adapters";

export const useGetImages = () => {
  return useInfiniteQuery({
    queryKey: ['images'],
    queryFn: ({ pageParam = 1 }) => fetchImages(pageParam),
    select: imagesAdapter, 
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => lastPage.length > 0 ? allPages.length + 1 : undefined,
  })
}


export const useGetImage = (id: string) => {
  return useQuery({
    queryKey: ['image', id],
    queryFn: () => fetchImage(id),
    select: imageAdapter,
    enabled: !!id,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};