
import Nav from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import css from './AppBar.module.css';

export default function AppBar() {

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo />
        <Nav />
      </div>
  </header>
  );
};
