import { Route, Routes } from 'react-router';
import { NotFound } from './NotFound/NotFound';
import { Layout } from './Layout/Layout';
import Home from '../pages/Home/Home';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
