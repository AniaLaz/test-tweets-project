import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './TweetsCards.module.css';
import imgLogo from '../../img/Logo_opt.png';
import imgFon from '../../img/pictureFone_opt.svg';
import imgString from '../../img/rectangle.svg';
import imgRing from '../../img/ring.svg';

axios.defaults.baseURL = 'https://63bc0c08fa38d30d85b994d7.mockapi.io';

export const fetchTweets = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const TweetsCards = () => {
  const [tweetsArr, setTweetsArr] = useState([]);
   const [followersFlag, setFollowersFlag] = useState(false);
  useEffect(() => {
    fetchTweets().then(response => {
      setTweetsArr(response);
    });
  }, []);

  console.log(tweetsArr);

  const addFollowers = () => {
    setFollowersFlag(false);
  }

   const addFollowersFalse = () => {
     setFollowersFlag(true);
   };

  return (
    <div className={css.tweetsContainer}>
      <h2>TweetsCards</h2>
      <ul className={css.tweetsList}>
        {tweetsArr.map(({ user, id, tweets, followers, avatar }) => (
          <li key={id} className={css.item}>
            <button type="button" className={css.logo}>
              <img src={imgLogo} alt="fone" />
            </button>
            <img src={imgFon} alt="fone" className={css.imgFon} />
            <img src={imgString} alt="fone" className={css.imgString} />
            <div className={css.imgRingBox}>
              <div className={css.imgRingPhoto}>
                <img src={avatar} alt="fone" className={css.avatar} />
              </div>
              <img src={imgRing} alt="fone" className={css.imgRing} />
            </div>

            <div className={css.boxBottom}>
              <div className={css.text}>{tweets} tweets</div>
              <div className={css.textBottom}>
                {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                followers
              </div>
              {followersFlag ? (
                <button
                  type="button"
                  className={css.buttonTrue}
                  onClick={addFollowers}
                >
                  following
                </button>
              ) : (
                <button
                  type="button"
                  className={css.button}
                  onClick={addFollowersFalse}
                >
                  follow
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
