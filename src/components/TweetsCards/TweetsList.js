import css from './TweetsCards.module.css';

import { TweetsCardOne } from './TweetsCard';
// axios.defaults.baseURL = 'https://63bc0c08fa38d30d85b994d7.mockapi.io';

export const TweetsCards = ({
  tweetsArr,
  onChangefolowwersF,
}) => {
  return (
    <div className={css.tweetsContainer}>
      <h2>TweetsCards</h2>
      {tweetsArr.length ? (
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
                      />
          ))}
        </ul>
      ) : (
        // <div className={css.text}>...loading</div>
        <div className={css.loader}>
          <div className={css.loader_inner}></div>
        </div>
      )}
    </div>
  );
};
