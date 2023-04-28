import axios from 'axios';

axios.defaults.baseURL = 'https://63bc0c08fa38d30d85b994d7.mockapi.io';

export const fetchTweets = async ({ page, limit }) => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

