import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
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

      <div className={styles.personalInfo}>
        <p className={styles.personalInfoText}>© 2023 Pawel Palasinski</p>
        <ul className={styles.personalInfoLinkList}>
          <li className={styles.personalInfoLink}>
            <a
              href="https://github.com/PawelPalasinski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={styles.personalInfoSvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>
          </li>
          <li className={styles.personalInfoLink}>
            <a
              href="https://www.linkedin.com/in/pawe%C5%82pa%C5%82asi%C5%84ski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={styles.personalInfoSvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
