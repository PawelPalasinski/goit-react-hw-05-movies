import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../../../services/api';
import Spinner from '../../../../ui/Loader/Loader';
import ReviewsList from './Components/ReviewsList';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const reviewContainer = useRef();

  useEffect(() => {
    setLoading(true);
    getReviews(id)
      .then(data => setReviews(data))
      .catch(function (error) {
        console.log('Error: ' + error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          reviewContainer.current.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      });
  }, [id]);

  return (
    <div ref={reviewContainer}>
      {isLoading ? <Spinner /> : <ReviewsList data={reviews} />}
    </div>
  );
};

export default Reviews;
