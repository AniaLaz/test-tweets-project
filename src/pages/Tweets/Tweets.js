import { useLocation, NavLink } from 'react-router-dom';
import { TweetsCards } from '../../components/TweetsCards/TweetsCards';
import css from "./Tweets.module.css"

export const Tweets = () => {
  const location = useLocation();

  const goBack = location.state?.from ?? '/';

  return (
    <div>
      <button type="button" className={css.btnBack}>
        <NavLink to={goBack} className={css.btnBackText}>
          Go back
        </NavLink>
      </button>
      <TweetsCards />
    </div>
  );
};
