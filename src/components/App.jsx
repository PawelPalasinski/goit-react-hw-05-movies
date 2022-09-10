import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
// import {
//   lazy,
//   Suspense
// } from 'react';

// const HomePage = lazy(() => import('./HomePage/HomePage'));
import HomePage from './HomePage/HomePage';

export const App = () => {

    const routes = useRoutes([
      { path: '/', element: <HomePage /> },
      // ...
  ]);
  return routes;

  // return (
  //   <>
  //     {/* <nav>
  //       <NavLink to="/">Home</NavLink>
  //       <NavLink to="/movies">Movies</NavLink>
  //     </nav> */}

  //     {/* <Suspense fallback={<div>Loading</div>}> */}
  //     {/* <Routes> */}
  //   {/* <Router>
  //     <App />
  //   </Router> */}
  //           {/* <Route path="/movies" element={<MoviesPage />} /> */}
  //         {/* </Route> */}

  //         {/* <Route path="/movie/:id" element={<MovieDetailsPage />}>
  //         <Route path="/cast" element={<Cast />} />
  //         <Route path="/reviews" element={<Reviews />} />
  //       </Route> */}
  //       {/* </Routes> */}
  //     {/* </Suspense> */}
  //   </>
  // );
};
