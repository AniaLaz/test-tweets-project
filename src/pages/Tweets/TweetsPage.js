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
  const pageFollowStart=0;
  const [pageFollowFinish, setPageFollowFinish] = useState(3);

  useEffect(() => {
    if (filter === 'showAll') {
      fetch({ page, limit, setTweetsArr, setNotCard });
    } else if (filter === 'follow') {
      fetchFollow({
        pageFollowStart,
        pageFollowFinish,
        setTweetsArr,
        setNotCard,
      });
    } else if (filter === 'followings') {
      fetchFollowing({    pageFollowStart,
        pageFollowFinish,
        setTweetsArr,
        setNotCard, });
    }
  }, [page, filter, pageFollowFinish]);

  const onChange = ({ value }) => {
    setTweetsArr([]);
    setPage(1);
    setFilter(value);
    setPageFollowFinish(3);
    setNotCard(false);
  };

  const goBack = location.state?.from ?? '/';
  const addPage = () => {
    setPage(page + 1);
    if (filter === 'follow') {
      setPageFollowFinish(pageFollowFinish+3);
    }
        if (filter === 'followings') {
          setPageFollowFinish(pageFollowFinish + 3);
        }
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
      />
      {!notCard  && (
          <button type="button" className={css.btnBack} onClick={addPage}>
            <div className={css.btnBackText}>Load More</div>
          </button>
        )}
    </div>
  );
};
