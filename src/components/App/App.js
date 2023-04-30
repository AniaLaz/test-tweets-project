import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { NotFound } from '../../pages/NotFound/NotFound';
import styled from 'styled-components';
import css from '../App/App.module.css';

const Home = lazy(() =>
  import('../../pages/Home/Home').then(module => {
    return {
      ...module,
      default: module.Home,
    };
  })
);

const Tweets = lazy(() =>
  import('../../pages/Tweets/TweetsPage').then(module => {
    return {
      ...module,
      default: module.Tweets,
    };
  })
);


const StyledLink = styled(NavLink)`
  color: black;
  margin-right: 50px;


  &.active {
    color: red;
  }
`;
const Styled = styled('div')`
  width: 90vw;

  display: block;
  margin: auto;
`;
export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </nav>
      <Styled className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Styled>
    </div>
  );
};
