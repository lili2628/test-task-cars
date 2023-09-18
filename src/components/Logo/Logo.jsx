import { NavLink } from 'react-router-dom';

import logo from 'images/sprite.svg';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <NavLink to="/">
      <svg className={css.logo} width="70" height="70">
          <use href={logo + '#carLogo2'}></use>
      </svg>
    </NavLink>
  );
};
