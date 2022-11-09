import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieCast } from 'services';
import { Character, Img, Item, List, Name } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      getCast();
    }
  }, [movieId]);

  const getActors = () => {
    if (!cast.length > 0) {
      return;
    }
    const visibleActors = cast.filter((actor, i) => i <= 3);
    return visibleActors;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <List>
        {getActors() &&
          getActors().map(actor => {
            return (
              <Item key={actor.name}>
                <Img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
                <Box p={3}>
                  <Name>{actor.name}</Name>
                  <Character>{actor.character}</Character>
                </Box>
              </Item>
            );
          })}
      </List>
    </div>
  );
};
