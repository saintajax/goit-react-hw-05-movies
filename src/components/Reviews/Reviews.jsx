import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieReviews } from 'services';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      getReviews();
    }
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>We don't have any reviews on this movie</div>
      )}
    </div>
  );
};
