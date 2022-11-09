import { Box } from 'components/Box/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { fetchMovieByName } from 'services';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Item, List, Poster } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParam, setSearchparam] = useSearchParams();
  const searchQuery = searchParam.get('query');

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieByName(searchQuery);
        setMovies(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery) {
      getMovies();
    }
  }, [searchQuery]);

  const handleSerachFormSubmit = ({ query }) => {
    setSearchparam({ query });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box display="grid" grid-template-columns="1fr" grid-gap="16px" pb="24px">
      <SearchBar onSubmit={handleSerachFormSubmit} />
      <Box>
        <List>
          {movies.map(({ id, title, poster_path }) => (
            <Item key={id}>
              <NavLink to={`${id}`} state={{ from: location }}>
                <Poster
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={title}
                />
                <Box as="p" m={0} minHeight="40px" p={3} color="black">
                  {title}
                </Box>
              </NavLink>
            </Item>
          ))}
        </List>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Movies;
