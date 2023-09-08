import axios from 'axios';
const API_KEY = '38335866-20cd572b0c67a573fa29edb86';
const BASE_URL = 'https://pixabay.com/api/';

export const ImageSearch = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};
