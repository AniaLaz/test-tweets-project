import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './TweetsCards.module.css';
import imgLogo from '../../img/Logo_opt.png';
import imgFon from '../../img/pictureFone_opt.svg';
import imgString from '../../img/rectangle.svg';
import imgRing from '../../img/ring.svg';
import boy from '../../img/boy.svg';

// axios.defaults.baseURL = 'https://63bc0c08fa38d30d85b994d7.mockapi.io';

export const TweetsCards = ({ tweetsArr }) => {
  console.log('tweetsArr TweetsCards', tweetsArr);
  const [oneCard, setOneCard] = useState(null);


  console.log('tweetsArr TweetsCards2', tweetsArr);
  const updateCard = async ({ id }) => {
    try {
      console.log('chengeFollowers 3');
      if (oneCard) {
        const chengeFollower = await axios.put(`/users/${id}`, {
          followers: oneCard.followers + 1,
          followersFlag: true,
        });
      }
    } catch (error) {
      console.log('chengeFollowers ---3');
      console.log(error.message);
    }
  };

  const chengeFollowers = async ({ id }) => {
    console.log('chengeFollowers 1');
    try {
      console.log('chengeFollowers 2');
      const getOneCard = await axios.get(`/users/${id}`);
      console.log('getOneCard.data', getOneCard.data);
      setOneCard(getOneCard.data);
      updateCard({ id });
    } catch (error) {
      console.log('chengeFollowers ----2');
      console.log(error.message);
    }
  };
  const delitFollowers = async ({ id }) => {
    console.log(id);

    try {
      const getOneCard = await axios.get(`/users/${id}`);
      console.log(getOneCard.data);
      setOneCard(getOneCard.data);
      if (oneCard) {
        try {
          const chengeFollower = await axios.put(`/users/${id}`, {
            followers: oneCard.followers - 1,
            followersFlag: false,
          });
          console.log(chengeFollower.data);
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={css.tweetsContainer}>
      <h2>TweetsCards</h2>
      <ul className={css.tweetsList}>
        {tweetsArr.map(
          ({ user, id, tweets, followers, avatar, followersFlag }) => (
            <li key={id} className={css.item}>
              <button type="button" className={css.logo}>
                <img src={imgLogo} alt="fone" />
              </button>
              <img src={imgFon} alt="fone" className={css.imgFon} />
              <img src={imgString} alt="fone" className={css.imgString} />
              <div className={css.imgRingBox}>
                <div className={css.imgRingPhoto}>
                  {avatar ? (
                    <img src={avatar} alt={user} className={css.avatar} />
                  ) : (
                    <img src={boy} alt={user} className={css.avatar} />
                  )}
                  <img src={avatar} alt={user} className={css.avatar} />
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
                    onClick={() => delitFollowers({ id })}
                  >
                    following
                  </button>
                ) : (
                  <button
                    type="button"
                    className={css.button}
                    onClick={() => chengeFollowers({ id })}
                  >
                    follow
                  </button>
                )}

                {/* {followersFlag.length > 0 ? (
                <button
                  type="button"
                  className={css.buttonTrue}
                  onClick={() => addFollowersFalse({ id, followers })}
                >
                  following
                </button
              ) : (
                <button
                  type="button"
                  className={css.button}
                  onClick={() => addFollowers({ id, followers })}
                >
                  follow
                </button>
              )} */}
                {/* {followersFlag.map(follower => {
                    if (follower.id !== id) {
                    return (
                      <button
                        type="button"
                        className={css.buttonTrue}
                        onClick={() => addFollowers({ id, followers })}
                      >
                        following
                      </button>
                    );
                  } else
                    <button
                      type="button"
                      className={css.button}
                      onClick={() => addFollowersFalse({ id, followers })}
                    >
                      follow
                    </button>;
                })} */}
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
