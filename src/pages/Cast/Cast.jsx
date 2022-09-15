import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from '../../services/api';
import s from './Cast.module.css';
import noImg from '../../images/no-image-available.png';

const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    getCasts(id)
      .then(setCasts)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);

  return (
    <>
      <h3>Cast: </h3>
      <ul className={s.castList}>
        {casts &&
          casts.cast.map(cast => (
            <li key={cast.id} className={s.castItem}>
              {cast.profile_path === null ? (
                <img src={noImg} alt={cast.name} width="150" />
              ) : (
                <img
                  className={s.image}
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
              )}
              <p className={s.name}>{cast.name}</p>
              <p className={s.character}>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
