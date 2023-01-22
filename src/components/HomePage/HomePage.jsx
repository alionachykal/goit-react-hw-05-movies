


import Container from 'components/Container/Container';
import PageHeading from 'components/PageHeading/PageHeading';
import TrendingList from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/MoviesAPI';
import NotFound from 'pages/NotFound/NotFound'

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      getMovies()
        .then(results => {
          setMovies(results);
          
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);


  const isNotFound = !loading && !movies.length;
  return (
    <>
      <Container>
        <PageHeading text={'Trending Movies'}></PageHeading>
        {loading && 'Loading ...'}
        {isNotFound && <NotFound />}
        {error && <div>{error}</div>}
        {movies && <TrendingList movies={movies} />}
      </Container>
    </>
  );
}