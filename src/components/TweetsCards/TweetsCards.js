import css from './TweetsCards.module.css';

import { TweetsCardOne } from './TweetsCardOne';
// axios.defaults.baseURL = 'https://63bc0c08fa38d30d85b994d7.mockapi.io';

export const TweetsCards = ({ tweetsArr }) => {
  return (
    <div className={css.tweetsContainer}>
      <h2>TweetsCards</h2>
      <ul className={css.tweetsList}>
        {tweetsArr.map(tweet => (
          <TweetsCardOne
            key={tweet.id}
            user={tweet.user}
            id={tweet.id}
            tweets={tweet.tweets}
            followers={tweet.followers}
            avatar={tweet.avatar}
            followersFlag={tweet.followersFlag}
            tweetsArr={tweetsArr}
            tweet={tweet}
          />
        ))}
      </ul>
    </div>
  );
};
