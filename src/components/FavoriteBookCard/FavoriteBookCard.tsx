import { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../../App';
import { IState } from '../../redux/store';
import { deleteFavoriteBook } from '../../services/account';
import styles from '../FavoriteBookCard/FavoriteBookCard.module.css';

export interface IFavoriteCardProps {
  author: string;
  title: string;
  id: string;
  text: string;
  image: string;
  amazonHref: string;
}

export const FavoriteBookCard = ({
  author,
  title,
  id,
  text,
  image,
  amazonHref,
}: IFavoriteCardProps) => {
  const favoriteBooks = useSelector(
    (state: IState) => state.accountReducer.favoriteBooks
  );
  const userId = useSelector((state: IState) => state.accountReducer.userName);
  const dispatch = useDispatch();

  const onClickDelete = useCallback(() => {
    dispatch(deleteFavoriteBook(favoriteBooks, userId, id));
  }, [favoriteBooks]);

  const { theme } = useContext(Context);

  return (
    <div className={styles.favoriteCard}>
      <div className={styles.wrapper}>
        <div className={styles.favoriteCard_content}>
          <img className={styles.favoriteCard_image} src={image} />
          <div className={styles.favoriteCard_likeWrapper}>
            <h3 style={theme} className={styles.favoriteCard_title}>
              {title}
            </h3>
            <svg
              onClick={onClickDelete}
              style={theme}
              className={styles.favoriteCard_delete}
              width='17px'
              height='17px'
              viewBox='0 0 55 54'
              fill='#000000'
            >
              <g transform='translate(0.000000, -1.000000)'>
                <rect
                  transform='translate(27.961245, 28.014445) rotate(45.000000) translate(-27.961245, -28.014445) '
                  x='-8.78840257'
                  y='26.5144594'
                  width='73.4992951'
                  height='2.99997123'
                />
                <rect
                  transform='translate(27.890535, 28.014445) rotate(45.000000) translate(-27.890535, -28.014445) '
                  x='26.3905494'
                  y='-8.73520257'
                  width='2.99997123'
                  height='73.4992951'
                />
              </g>
            </svg>
          </div>
          <p style={theme} className={styles.favoriteCard_text}>
            {text}
          </p>
          <p style={theme} className={styles.favoriteCard_author}>
            {author}
          </p>
        </div>
        <div className={styles.favoriteCard_links}>
          <a
            className={styles.favoriteCard_link}
            target='_blank'
            href={amazonHref}
          >
            View of the Amazon
          </a>
        </div>
      </div>
    </div>
  );
};
