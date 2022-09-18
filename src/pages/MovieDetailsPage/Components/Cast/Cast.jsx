import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from '../../../../services/api';
import Spinner from '../../../../ui/Loader/Loader';
import CastList from './Components/CastList';

const Cast = () => {
  const { id } = useParams();
  const [castData, setCasts] = useState({});
  const [isLoading, setLoading] = useState(false);

  const castContainer = useRef();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getCasts(id)
        .then(data => setCasts(data))
        .catch(function (error) {
          console.log('Error: ' + error);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
            castContainer.current.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        });
    }
  }, [id]);

  return (
    <div ref={castContainer}>
      {isLoading ? <Spinner /> : <CastList data={castData.cast} />}
    </div>
  );
};

export default Cast;
