import { useCallback, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../../App';
import { IState } from '../../redux/store';
import { addFavoriteBook, deleteFavoriteBook } from '../../services/account';
import styles from '../BestsellerCard/BestsellerCard.module.css';

export interface IBestsellerCardProps {
  author: string;
  title: string;
  id: string;
  text: string;
  image: string;
  amazonHref: string;
  onClickReviews: () => void;
}

export const BestsellerCard = ({
  author,
  title,
  id,
  text,
  image,
  amazonHref,
  onClickReviews,
}: IBestsellerCardProps) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const isLogin = useSelector((state: IState) => state.userReducer.isLogin);
  const favoriteBooks = useSelector(
    (state: IState) => state.accountReducer.favoriteBooks
  );
  const userId = useSelector((state: IState) => state.accountReducer.userName);
  const dispatch = useDispatch();
  const { theme } = useContext(Context);

  const onClickLike = useCallback(() => {
    const isReplay = favoriteBooks.some(
      (item: { isbn: string }) => item.isbn === id
    );

    if (!isReplay) {
      dispatch(
        addFavoriteBook(
          favoriteBooks,
          userId,
          author,
          title,
          id,
          text,
          image,
          amazonHref
        )
      );
    }
    setIsLike(true);
  }, [favoriteBooks, isLike]);

  const offClickLike = useCallback(() => {
    dispatch(deleteFavoriteBook(favoriteBooks, userId, id));
    setIsLike(false);
  }, [favoriteBooks, isLike]);

  return (
    <div style={theme} className={styles.bestsellerCard}>
      <div className={styles.wrapper}>
        <div className={styles.bestsellerCard_content}>
          <img className={styles.bestsellerCard_image} src={image} />
          <div className={styles.bestsellerCard_likeWrapper}>
            <h3 style={theme} className={styles.bestsellerCard_title}>
              {title}
            </h3>
            {isLogin ? (
              <svg
                className={
                  isLike
                    ? styles.bestsellerCard_redLike
                    : styles.bestsellerCard_blackLike
                }
                onClick={isLike ? offClickLike : onClickLike}
                version='1.0'
                width='20px'
                height='20px'
                viewBox='0 0 1280.000000 1189.000000'
                fill='#000000'
              >
                <g
                  transform='translate(0.000000,1189.000000) scale(0.100000,-0.100000)'
                  stroke='none'
                >
                  <path d='M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001 -2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360 634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346 -2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178 408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19 196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998 -193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417 -535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535 610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z' />
                </g>
              </svg>
            ) : null}
          </div>
          <p style={theme} className={styles.bestsellerCard_text}>
            {text}
          </p>
          <p style={theme} className={styles.bestsellerCard_author}>
            {author}
          </p>
        </div>
        <div className={styles.bestsellerCard_links}>
          <a
            className={styles.bestsellerCard_link}
            target='_blank'
            href={amazonHref}
          >
            View of the Amazon
          </a>
          <a
            className={styles.bestsellerCard_link}
            href='#'
            onClick={onClickReviews}
          >
            View reviews of New York Times
          </a>
        </div>
      </div>
    </div>
  );
};
