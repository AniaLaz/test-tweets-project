import css from './TweetsCards.module.css';

import { TweetsCardOne } from './TweetsCardOne';
// axios.defaults.baseURL = 'https://63bc0c08fa38d30d85b994d7.mockapi.io';

export const TweetsCards = ({ tweetsArr }) => {
  return (
    <div className={css.tweetsContainer}>
      <h2>TweetsCards</h2>
      <ul className={css.tweetsList}>
        {tweetsArr.map(
          ({ user, id, tweets, followers, avatar, followersFlag }) => (
            <TweetsCardOne
              key={id}
              user={user}
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              followersFlag={followersFlag}
              tweetsArr={tweetsArr}
            />
          )
        )}
      </ul>
    </div>
  );
};
