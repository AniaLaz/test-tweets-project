import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import css from './TweetsPage.module.css';

import { TweetsCards } from '../../components/TweetsCards/TweetsList';
import { Filter } from '../../components/Filter/Filter';

import { fetch } from '../../helpers/fetch';
import { fetchFollow } from '../../helpers/fetch';
import { fetchFollowing } from '../../helpers/fetch';

export const Tweets = () => {
  const location = useLocation();
  const [tweetsArr, setTweetsArr] = useState([]);
  const [page, setPage] = useState(1);
  const [notCard, setNotCard] = useState(false);
  const limit = 3;
  const [filter, setFilter] = useState('showAll');


  useEffect(() => {
    if (filter === 'showAll') {
       fetch({ page, limit, setTweetsArr, setNotCard });
    } else if (filter === 'follow') {
      console.log('follow');
      fetchFollow({ setTweetsArr });
    } else if (filter === 'followings') {
      console.log('followings');
      fetchFollowing({ setTweetsArr });
    } 
  }, [page, filter]);

  const onChange = e => {
    setFilter(e.value);
  };

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
      <Filter onChange={onChange} />
      <TweetsCards
        tweetsArr={tweetsArr}
        page={page}
        limit={limit}
        setTweetsArr={setTweetsArr}
        setNotCard={setNotCard}
        // update={update}
      />
      {(!notCard &&
        filter !== 'follow' &&
        filter !== 'followings')&& (
          <button type="button" className={css.btnBack} onClick={addPage}>
            <div className={css.btnBackText}>Load More</div>
          </button>
        )}
    </div>
  );
};
