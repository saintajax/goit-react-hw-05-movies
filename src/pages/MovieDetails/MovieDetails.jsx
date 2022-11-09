import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchMovieById } from 'services';
import {
  Item,
  List,
  Poster,
  SecondaryTitle,
  StyledLink,
  Text,
  Title,
} from './MovieDeteils.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      getMovie();
    }
  }, [movieId]);

  const getGenres = () => {
    if (!movie.genres) {
      return;
    }
    const { genres } = movie;
    const genresStr = genres.map(genre => genre.name);
    return genresStr.join(' ');
  };

  const prevLocation = location.state?.from ?? '/home';

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to={prevLocation}>Back</Link>
      <Box display="flex">
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
        />
        <Box p={4}>
          <Title>{movie.title}</Title>
          <Text>
            User scores:
            <Box as="span" fontWeight="700">
              {movie.vote_average?.toFixed(1)}
            </Box>
          </Text>
          <SecondaryTitle>Overview</SecondaryTitle>
          <Text>{movie.overview}</Text>
          <SecondaryTitle>Genres</SecondaryTitle>
          <Text>{getGenres()}</Text>
        </Box>
      </Box>
      <Box
        borderTop="2px solid black"
        borderBottom="2px solid black"
        p={3}
        textAlign="center"
      >
        Additional information
        <List>
          <Item>
            <StyledLink to={`cast`} state={{ from: prevLocation }}>
              Cast
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to={`reviews`} state={{ from: prevLocation }}>
              Reviews
            </StyledLink>
          </Item>
        </List>
      </Box>
      <Outlet />
    </>
  );
};

export default MovieDetails;
