import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IState } from '../../redux/store';
import styles from '../Header/Header.module.css';
import logoLight from '../Header/logo-light.png';

export const Header = () => {
  const isLogin = useSelector((state: IState) => state.userReducer.isLogin);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={logoLight} className={styles.header_logo} />
          <nav className={styles.header_links}>
            <NavLink
              activeClassName={styles.header_activeLink}
              className={styles.header_link}
              exact
              to='/'
            >
              HOME
            </NavLink>
            <NavLink
              activeClassName={styles.header_activeLink}
              className={styles.header_link}
              exact
              to='/books'
            >
              BOOKS
            </NavLink>
            <NavLink
              activeClassName={styles.header_activeLink}
              className={styles.header_link}
              exact
              to='/bestsellers'
            >
              BEST SELLERS
            </NavLink>
            {isLogin ? (
              <NavLink
                activeClassName={styles.header_activeLink}
                className={styles.header_link}
                exact
                to='/account'
              >
                ACCOUNT
              </NavLink>
            ) : (
              <NavLink
                activeClassName={styles.header_activeLink}
                className={styles.header_link}
                exact
                to='/login'
              >
                LOG IN
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};
