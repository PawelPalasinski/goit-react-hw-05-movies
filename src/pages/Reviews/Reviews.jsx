import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/api';
import styles from './Reviews.module.css';

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
      {reviews &&
        reviews.map(review => (
          <div key={review.id} className={styles.reviewContainer}>
            <h3 className={styles.reviewer}>🗣 review.author</h3>
            <p className={styles.review}>{review.content}</p>
          </div>
        ))}
    </>
  );
};

export default Reviews;
