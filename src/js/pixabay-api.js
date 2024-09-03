// src/js/pixabay-api.js
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = async (searchQuery, page) => {
  const axiosOptions = {
    params: {
      key: '45746393-55b87f9c702251a87b9ae7181',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };

  try {
    const response = await axios.get('', axiosOptions);
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
