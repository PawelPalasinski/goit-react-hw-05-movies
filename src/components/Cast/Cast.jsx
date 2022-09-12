import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from '../../services/api';
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
      <h3>Cast</h3>
      <ul>
        {casts &&
          casts.cast.map(cast => (
            <li key={cast.id}>
              {cast.profile_path === null ? (
                <img src={noImg} alt={cast.name} width="100" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                  width="100"
                />
              )}
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
