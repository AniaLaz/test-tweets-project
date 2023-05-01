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

export const fetchAll = async () => {
  try {
    const response = await axios.get(`/users`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const fetch = ({ page, limit, setTweetsArr, setNotCard }) => {
  fetchTweets({ page, limit }).then(response => {
    if (page === 1) {
      setTweetsArr(response);
    } else setTweetsArr(prevState => [...prevState, ...response]);
    if (response.length < 3) {
      setNotCard(true);
    }
  });
};

export const fetchFollow = ({
  setTweetsArr,
  pageFollowStart,
  pageFollowFinish,
  setNotCard,
}) => {
  fetchAll().then(response => {
    const followersArr = response.filter(
      option => option.followersFlag === true
    );
    const firstPage = followersArr.slice(pageFollowStart, pageFollowFinish);
    setTweetsArr(firstPage);
    if (firstPage.length % 3 !== 0) {
      setNotCard(true);
    }
  });
};

export const fetchFollowing = ({ setTweetsArr }) => {
  fetchAll().then(response => {
    const followersArr = response.filter(
      option => option.followersFlag === false
    );
    setTweetsArr(followersArr);
  });
};
