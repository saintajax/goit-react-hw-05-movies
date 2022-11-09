import { useState } from 'react';
import { popularMovieFetch } from 'services';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Item, List, Poster } from './Home.styled';
import { Box } from 'components/Box/Box';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const response = await popularMovieFetch();
      setPopularMovies(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <List>
        {popularMovies.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
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
    </div>
  );
};

export default Home;
