import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './TweetsCards.module.css';
import imgLogo from '../../img/Logo_opt.png';
import imgFon from '../../img/pictureFone_opt.svg';
import imgString from '../../img/rectangle.svg';
import imgRing from '../../img/ring.svg';
import boy from '../../img/boy.svg';

export const TweetsCardOne = ({
  user,
  id,
  tweets,
  followers,
  avatar,
  followersFlag,
  tweetsArr,
}) => {
  const [oneCard, setOneCard] = useState(null);
  const [oneCardFolow, setOneCardFolow] = useState(null);
  const [flag, setFlag] = useState(followersFlag);
  const [folowwersF, setfolowwersF] = useState(false);

    useEffect(() => {
      
    const updateCard = async id => {
      try {
        if (oneCard) {
          await axios.put(`/users/${id}`, {
            followers: oneCard.followers + 1,
            followersFlag: true,
          });
          setfolowwersF(oneCard.followers + 1);

            console.log('+');
             return;
          }
         return;
      } catch (error) {
        console.log(error.message);
      }
    };
    if (oneCard) {
      updateCard(oneCard.id);
    }
  }, [oneCard, tweetsArr]);

  useEffect(() => {
    const updateCardFolow = async id => {
      try {
        if (oneCardFolow) {
          await axios.put(`/users/${id}`, {
            followers: oneCardFolow.followers - 1,
            followersFlag: false,
          });
          
          setfolowwersF(oneCardFolow.followers - 1);
            console.log('-');
            return
          }
          return;
      } catch (error) {
        console.log(error.message);
      }
    };
    if (oneCardFolow) {
      updateCardFolow(oneCardFolow.id);
    }
  }, [oneCardFolow, tweetsArr, folowwersF]);

  const chengeFollowers = async ({ id }) => {
    try {
      return setOneCard((await axios.get(`/users/${id}`)).data);
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
  return (
    <li className={css.item}>
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
        {folowwersF ? (
          <div className={css.textBottom}>
            {folowwersF.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            followers
          </div>
        ) : (
          <div className={css.textBottom}>
            {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            followers
          </div>
        )}

        { flag ? (
          <button
            type="button"
            className={css.buttonTrue}
            onClick={() => {
              delitFollowers({ id });
              setFlag(false);
            }}
          >
            following
          </button>
        ) : (
          <button
            type="button"
            className={css.button}
            onClick={() => {
              chengeFollowers({ id });
              setFlag(true);
            }}
          >
            follow
          </button>
        )}
      </div>
    </li>
  );
};
