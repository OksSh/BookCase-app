import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loginFail } from '../../redux/actions/userActions';
import { IState } from '../../redux/store';
import styles from '../Account/Account.module.css';
import { FavoriteBooks } from '../FavoriteBooks/FavoriteBooks';
import { Quotes } from '../Quotes/Quotes';
import { Title } from '../Title/Title';

export const Account = () => {
  const userName = useSelector(
    (state: IState) => state.accountReducer.userName
  );
  const email = useSelector((state: IState) => state.accountReducer.email);
  const isLogin = useSelector((state: IState) => state.userReducer.isLogin);
  const dispatch = useDispatch();
  const [isViewBooks, setisViewBooks] = useState<boolean>(true);

  const exit = useCallback(() => {
    dispatch(loginFail(''));
  }, [isLogin]);

  const onClickViewBooks = useCallback(() => {
    setisViewBooks(true);
  }, []);

  const onClickViewQuotes = useCallback(() => {
    setisViewBooks(false);
  }, []);

  return (
    <div className={styles.account}>
      <div className={styles.container}>
        <div className={styles.account_title}>
          <Title text='Account'></Title>
          <div className={styles.account_user}>
            <div>
              <p className={styles.account_user_props}>{userName}</p>
              <p className={styles.account_user_props}>{email}</p>
            </div>
            <div>
              <svg
                width='30px'
                height='30px'
                viewBox='0 0 24 24'
                fill='#000000'
                className={styles.account_title_exit}
                onClick={exit}
              >
                <path d='M14.053,0 C16.492,0 18.478,1.985 18.478,4.425 L18.478,15.564 C18.478,18.01 16.487,20 14.042,20 L9.157,20 C6.718,20 4.733,18.015 4.733,15.575 L4.733,14.633 C4.733,14.219 5.069,13.883 5.483,13.883 C5.897,13.883 6.233,14.219 6.233,14.633 L6.233,15.575 C6.233,17.187 7.545,18.5 9.157,18.5 L14.042,18.5 C15.661,18.5 16.978,17.184 16.978,15.564 L16.978,4.425 C16.978,2.813 15.665,1.5 14.053,1.5 L9.168,1.5 C7.55,1.5 6.233,2.816 6.233,4.434 L6.233,5.367 C6.233,5.781 5.897,6.117 5.483,6.117 C5.069,6.117 4.733,5.781 4.733,5.367 L4.733,4.434 C4.733,1.989 6.723,0 9.168,0 L14.053,0 Z M10.3923,6.553 L13.32125,9.46975 C13.3450062,9.49350625 13.3671777,9.51884734 13.3875914,9.54560044 L13.3213,9.469 C13.3612287,9.50836634 13.3961762,9.55184414 13.4257868,9.59843296 C13.4318468,9.61010737 13.438669,9.62151555 13.4451917,9.63311442 C13.4566029,9.65101613 13.4662591,9.6700434 13.4750815,9.68944319 C13.480071,9.7031962 13.48582,9.71688328 13.4911676,9.73076915 C13.4997074,9.74977474 13.5063094,9.76931306 13.5121001,9.78910914 C13.5154634,9.80470095 13.5194749,9.82025822 13.5229909,9.8360017 C13.5284509,9.85506905 13.5319637,9.87425098 13.5347286,9.89358117 C13.5347515,9.90236695 13.5358957,9.91159954 13.5368703,9.92088238 C13.5409073,9.9472797 13.5423,9.97357815 13.5423,10 L13.535,10.079 L13.5341493,10.1017257 C13.5339188,10.103423 13.5336827,10.1051185 13.5334408,10.1068122 L13.5423,10 C13.5423,10.0555105 13.5361529,10.1104764 13.5242059,10.1639208 C13.5194749,10.1797418 13.5154634,10.195299 13.5109738,10.2106529 C13.5063094,10.2306869 13.4997074,10.2502253 13.4923127,10.2694533 C13.48582,10.2831167 13.480071,10.2968038 13.4739348,10.3102778 C13.4662591,10.3299566 13.4566029,10.3489839 13.4461336,10.3675805 C13.438669,10.3784844 13.4318468,10.3898926 13.4247356,10.4010996 C13.4139611,10.4201734 13.4012842,10.4382836 13.3877787,10.4558338 C13.3785549,10.4662048 13.3699587,10.476822 13.3610846,10.4871944 C13.34907,10.50248 13.3355,10.517 13.3213,10.531 L10.3923,13.446 C10.2463,13.592 10.0543,13.665 9.8633,13.665 C9.6713,13.665 9.4783,13.592 9.3323,13.444 C9.0393,13.15 9.0413,12.676 9.3343,12.384 L10.975,10.75 L0.75,10.75 C0.336,10.75 -6.03961325e-14,10.414 -6.03961325e-14,10 C-6.03961325e-14,9.586 0.336,9.25 0.75,9.25 L10.975,9.25 L9.3343,7.615 C9.0413,7.323 9.0393,6.849 9.3323,6.555 C9.6253,6.261 10.0993,6.261 10.3923,6.553 Z' />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.account_wrapper}>
          <div className={styles.account_links}>
            <p
              onClick={onClickViewBooks}
              className={
                isViewBooks
                  ? `${styles.acount_link} ${styles.acount_link_active}`
                  : `${styles.acount_link}`
              }
            >
              Favorite books
            </p>
            <p
              onClick={onClickViewQuotes}
              className={
                isViewBooks
                  ? `${styles.acount_link}`
                  : `${styles.acount_link} ${styles.acount_link_active}`
              }
            >
              Quotes
            </p>
          </div>
          <div className={styles.account_content}>
            {isViewBooks ? <FavoriteBooks></FavoriteBooks> : <Quotes></Quotes>}
          </div>
        </div>
      </div>
    </div>
  );
};
