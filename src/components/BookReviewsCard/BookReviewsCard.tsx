import { useContext } from 'react';
import { Context } from '../../App';
import styles from '../BookReviewsCard/BookReviewsCard.module.css';

interface IBookReviewsCardProps {
  author: string;
  text: string;
  date: string;
  href: string;
}

export const BookReviewsCard = ({
  author,
  text,
  date,
  href,
}: IBookReviewsCardProps) => {
  const { theme } = useContext(Context);
  return (
    <div style={theme} className={styles.bookReviewsCard}>
      <p style={theme} className={styles.bookReviewsCard_author}>
        {author}
      </p>
      <p style={theme} className={styles.bookReviewsCard_text}>
        {text}
      </p>
      <p style={theme} className={styles.bookReviewsCard_date}>
        {date}
      </p>
      <div className={styles.bestsellerCard_linkWrapper}>
        <a
          style={theme}
          className={styles.bestsellerCard_link}
          target='_blank'
          href={href}
        >
          Read more in the New York Times
        </a>
      </div>
    </div>
  );
};
