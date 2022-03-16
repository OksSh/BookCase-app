import { IBookCardProps } from '../../redux/reducers/booksReducer';
import styles from '../BookCard/BookCard.module.css';

interface IProps {
  title: string;
  author: string;
  id: string;
}

export const BookCard = ({ title, author, id }: IProps) => {
  return (
    <>
      <div id={id} className={styles.bookCard}>
        <div className={styles.wrapper}>
          <h3 className={styles.bookCard_title}>{title}</h3>
          <p className={styles.bookCard_author}>{author}</p>
        </div>
      </div>
    </>
  );
};
