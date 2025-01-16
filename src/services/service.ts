
export const fetchImages = async (page: number) => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=9`
  );
  const data = await response.json();
  return data;
};

export const fetchImage = async (id: string) => {
    const response = await fetch(`https://picsum.photos/id/${id}/info`);
    const data = await response.json();
    return data;
};
  
