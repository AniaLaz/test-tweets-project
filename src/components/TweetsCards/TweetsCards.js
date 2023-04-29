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
  const [oneCard, setOneCard] = useState(null);
  const [oneCardFolow, setOneCardFolow] = useState(null);
  // const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (oneCard) {
      const cardId = oneCard.id;
      updateCard(cardId);
      // update(oneCard);
    }
  }, [oneCard, tweetsArr]);

  useEffect(() => {
    if (oneCardFolow) {
      const cardFolowId = oneCardFolow.id;
      updateCardFolow(cardFolowId);
      // update(oneCardFolow);
    }
  }, [oneCardFolow, tweetsArr]);

  const chengeFollowers = async ({ id }) => {
    try {
      return setOneCard((await axios.get(`/users/${id}`)).data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateCard = async id => {
    try {
      if (oneCard) {
        await axios.put(`/users/${id}`, {
          followers: oneCard.followers + 1,
          followersFlag: true,
        });
        const index = tweetsArr.findIndex(el => el.id === id);
        const card = tweetsArr[index];
        const updateArr = () => {
          return tweetsArr.splice(index, 1, {
            user: card.user,
            tweets: card.tweets,
            followers: card.followers + 1,
            avatar: card.avatar,
            id: card.id,
            followersFlag: true,
          });
        };
        updateArr();
        console.log('+');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const delitFollowers = async ({ id }) => {
    try {
      return setOneCardFolow((await axios.get(`/users/${id}`)).data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateCardFolow = async id => {
    try {
      if (oneCardFolow) {
        const chengeFollower = await axios.put(`/users/${id}`, {
          followers: oneCardFolow.followers - 1,
          followersFlag: false,
        });
        const index = tweetsArr.findIndex(el => el.id === id);
        const card = tweetsArr[index];
        const updateArr = () => {
          return tweetsArr.splice(index, 1, {
            user: card.user,
            tweets: card.tweets,
            followers: card.followers - 1,
            avatar: card.avatar,
            id: card.id,
            followersFlag: false,
          });
        };

        updateArr();

        console.log('-');
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
