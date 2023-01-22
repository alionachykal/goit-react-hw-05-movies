import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';



const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() =>import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsList = lazy(() => import('./MovieDetailsList/MovieDetailsList'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));






export const App = () => {
  return (
    
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
           <Route path="movies/:movieId" element={<MovieDetailsList />}>
           <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
        </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
      </Suspense>
       

  );
};
