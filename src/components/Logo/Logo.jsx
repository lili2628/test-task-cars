import logo from 'images/sprite.svg';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <>
      <svg className={css.logo} width="40" height="40">
          <use href={logo + '#carLogo'}></use>
      </svg>
    </>
  );
};
