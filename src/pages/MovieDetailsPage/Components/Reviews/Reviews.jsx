import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../../../services/api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const reviewContainer = useRef();

  useEffect(() => {
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
      
      
      {reviews &&
        reviews.map(review => (
          <div key={review.id} className={styles.reviewContainer}>
            <h3 className={styles.reviewer}>🗣 review.author</h3>
            <p className={styles.review}>{review.content}</p>
          </div>
        ))}
      




    </div>
  );
};

export default Reviews;
