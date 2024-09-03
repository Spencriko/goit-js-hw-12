import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchQuery, page) => {
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

  return axios.get('', axiosOptions);
};
