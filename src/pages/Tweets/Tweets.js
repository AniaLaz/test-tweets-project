import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TweetsCards } from '../../components/TweetsCards/TweetsCards';
import css from './Tweets.module.css';

import { fetchTweets } from '../../helpers/fetch';

export const fetch = ({ page, limit, setTweetsArr, setNotCard }) => {
  fetchTweets({ page, limit }).then(response => {
    if (page === 1) {
      setTweetsArr(response);
    } else setTweetsArr(prevState => [...prevState, ...response]);
    if (response.length === 0) {
      setNotCard(true);
    }
  });
};

export const Tweets = () => {
  const location = useLocation();
  const [tweetsArr, setTweetsArr] = useState([]);
  const [page, setPage] = useState(1);
  const [notCard, setNotCard] = useState(false);
  const [flagUpdate, setFlagUpdate] = useState(false);
  const limit = 3;

  useEffect(() => {
    fetch({ page, limit, setTweetsArr, setNotCard });
  }, [page]);

  console.log('tweetsArr2', tweetsArr);
  
  // useEffect(() => {
  //   console.log('flagUpdate', flagUpdate);
  //   fetch({ page, limit, setTweetsArr, setNotCard });
  // }, [ flagUpdate]);


  // const update = (oneCardFolow, oneCard) => {
  //   console.log('oneCardFolow', oneCardFolow);
  //   console.log('oneCard', oneCard);
  //   if (oneCardFolow) {
  //     return setFlagUpdate(true);
  //   }
  //   if (oneCard) {
  //     return setFlagUpdate(true);
  //   }
  // };

  const goBack = location.state?.from ?? '/';
  const addPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <button type="button" className={css.btnBack}>
        <NavLink to={goBack} className={css.btnBackText}>
          Go back
        </NavLink>
      </button>
      <TweetsCards
        tweetsArr={tweetsArr}
        page={page}
        limit={limit}
        setTweetsArr={setTweetsArr}
        setNotCard={setNotCard}
        // update={update}
            />
      {!notCard && (
        <button type="button" className={css.btnBack} onClick={addPage}>
          <div className={css.btnBackText}>Load More</div>
        </button>
      )}
    </div>
  );
};
