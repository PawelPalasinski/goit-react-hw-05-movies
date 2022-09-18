import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navLinks}>
      <NavLink
        to="/"
        className={styles.link}
        style={({ isActive }) =>
          isActive
            ? {
                fill: '#daa520',
              }
            : { fill: '#808080' }
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100px"
          height="100px"
          viewBox="0 0 612 612"
          space="preserve"
        >
          <g>
            <g>
              <polygon
                points="255.013,381.372 306.021,352.573 357.058,381.319 345.431,323.905 388.55,284.25 330.349,277.563 305.96,224.305 
			281.615,277.589 223.424,284.33 266.578,323.942 		"
              />
              <polygon
                points="418.624,358.099 452.462,338.987 486.318,358.062 478.605,319.974 507.209,293.672 468.606,289.235 
			452.418,253.9 436.274,289.253 397.671,293.716 426.293,320.001 		"
              />
              <polygon
                points="125.744,358.099 159.582,338.987 193.438,358.062 185.725,319.974 214.329,293.672 175.726,289.235 
			159.538,253.9 143.394,289.253 104.791,293.716 133.422,320.001 		"
              />
              <path
                d="M612,261.579V154.733H0V261.58c24.531,0,44.421,19.881,44.421,44.421c0,24.54-19.89,44.42-44.421,44.42v106.846h612
			V350.421c-24.531,0-44.421-19.891-44.421-44.421C567.579,281.468,587.469,261.579,612,261.579z M530.42,406.478H81.58V205.521
			h448.84V406.478L530.42,406.478z"
              />
            </g>
          </g>
        </svg>
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.link}
        style={({ isActive }) =>
          isActive
            ? {
                color: '#daa520',
              }
            : { color: '#808080' }
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
