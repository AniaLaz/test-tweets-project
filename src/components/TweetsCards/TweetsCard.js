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
}) => {
  const [flag, setFlag] = useState(false);
  const [folowwersF, setfolowwersF] = useState(false);

  useEffect(() => {
    setFlag(followersFlag);
    setfolowwersF(followers);
  }, [followersFlag, followers]);

  const updateCard = async id => {
    try {
      if (!flag) {
        await axios.put(`/users/${id}`, {
          followers: folowwersF - 1,
          followersFlag: true,
        });

        setfolowwersF(folowwersF - 1);
      } else {
        await axios.put(`/users/${id}`, {
          followers: folowwersF + 1,
          followersFlag: false,
        });

        setfolowwersF(folowwersF + 1);
      }
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <li className={css.item}>
      <a
        className={css.logo}
        href="https://github.com/AniaLaz"
        target="_blank"
        rel="noreferrer"
      >
        <img src={imgLogo} alt="fone" />
      </a>
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

        {flag ? (
          <button
            type="button"
            className={css.button}
            onClick={() => {
              // click({ id });
              setFlag(false);
              updateCard(id);
            }}
          >
            follow
          </button>
        ) : (
          <button
            type="button"
            className={css.buttonTrue}
            onClick={() => {
              // click({ id });
              setFlag(true);
              updateCard(id);
            }}
          >
            following
          </button>
        )}
      </div>
    </li>
  );
};
