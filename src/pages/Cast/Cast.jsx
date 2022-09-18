import { useState, useEffect, useRef } from 'react';// <-!
import { useParams } from 'react-router-dom';
import { getCasts } from '../../services/api';
import Spinner from '../../ui/Loader/Loader';
import styles from './Cast.module.css';
import noImg from '../../images/no-image-available.png';

const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState({});
  const [isLoading, setLoading] = useState(false);

  const header = useRef();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getCasts(id)
        // .then(setCasts)
        .then((data) => setCasts(data))
        .catch(function (error) {
          console.log('Error: ' + error);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
            header.current.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        });
    }
  }, [id]);

  return (
    <>
      <h3 ref={header}>Cast: </h3>

      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.castList}>
          {casts.cast && casts.cast.length ? (
            casts.cast.map(cast => (
              <li key={cast.id} className={styles.castItem}>
                {cast.profile_path === null ? (
                  <img src={noImg} alt={cast.name} width="150" />
                ) : (
                  <img
                    className={styles.image}
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt={cast.name}
                  />
                )}
                <p className={styles.name}>{cast.name}</p>
                <p className={styles.character}>Character: {cast.character}</p>
              </li>
            ))
          ) : (
            <li>Dupa</li>
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
