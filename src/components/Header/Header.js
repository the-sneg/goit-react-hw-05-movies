import { NavLink, Outlet } from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
        <NavLink to="/movie" className={s.link}>
          Movie
        </NavLink>
      </header>
      <main className={s.container}>
        <Outlet />
      </main>
    </>
  );
};
