import css from './TweetsCards.module.css';

import { TweetsCardOne } from './TweetsCard';

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
         <div className={css.loader}>
          <div className={css.loader_inner}></div>
        </div>
      )}
    </div>
  );
};
