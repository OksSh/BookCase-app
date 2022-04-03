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
  return (
    <div className={styles.bookReviewsCard}>
      <p className={styles.bookReviewsCard_author}>{author}</p>
      <p className={styles.bookReviewsCard_text}>{text}</p>
      <p className={styles.bookReviewsCard_date}>{date}</p>
      <div className={styles.bestsellerCard_linkWrapper}>
        <a className={styles.bestsellerCard_link} target='_blank' href={href}>
          Read more in the New York Times
        </a>
      </div>
    </div>
  );
};
