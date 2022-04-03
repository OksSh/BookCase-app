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
      <p>{author}</p>
      <p>{text}</p>
      <p>{date}</p>
      <a className={styles.bestsellerCard_link} target='_blank' href={href}>
        Read more in the New York Times
      </a>
    </div>
  );
};
