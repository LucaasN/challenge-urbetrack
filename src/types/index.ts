export interface OriginalImage {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
  }

export interface Image {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
    isFavorite: boolean;
}