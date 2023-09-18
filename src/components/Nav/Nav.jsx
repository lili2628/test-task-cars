import { NavLink, useLocation } from 'react-router-dom';
import css from './Nav.module.css';

export default function Nav() {

  const location = useLocation();

  return (
    <nav className={css.nav}>
      <NavLink
        className={
          location.pathname === '/'
            ? [css.find, css.active].join(' ')
            : css.find
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={
          location.pathname === '/catalog'
            ? [css.find, css.active].join(' ')
            : css.find
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
      <NavLink
        className={
          location.pathname === '/favorites'
            ? [css.find, css.active].join(' ')
            : css.find
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
    </nav>
  );
};
