import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(id)
      .then(setReviews)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);

  return (
    <>
      {id.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        reviews &&
        reviews.map(review => (
          <div key={review.id}>
            <h3>🗣 {review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Reviews;
