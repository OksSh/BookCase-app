import { useState } from 'react';
import styles from '../BookCard/BookCard.module.css';

interface IProps {
  title: string;
  author: string;
  id: string;
  text: string;
}

export const BookCard = ({ title, author, id, text }: IProps) => {
  const [isDescription, setIsDescription] = useState<boolean>(false);
  const onClick = () => {
    setIsDescription(!isDescription);
  };

  return (
    <div id={id} className={styles.bookCard}>
      <div
        onClick={onClick}
        data-description={
          isDescription
            ? 'Сlick to hide the description'
            : 'Сlick to view the description'
        }
        className={styles.wrapper}
      >
        <h3
          className={
            isDescription
              ? `${styles.bookCard_title} ${styles.bookCard_hiddenText}`
              : `${styles.bookCard_title} `
          }
        >
          {title}
        </h3>
        <p
          className={
            isDescription
              ? `${styles.bookCard_author} ${styles.bookCard_hiddenText}`
              : `${styles.bookCard_author} `
          }
        >
          {author}
        </p>
        <p
          className={
            isDescription
              ? `${styles.bookCard_text} `
              : `${styles.bookCard_text} ${styles.bookCard_hiddenText}`
          }
        >
          {text ? `${text}` : 'No description'}
        </p>
      </div>
    </div>
  );
};
