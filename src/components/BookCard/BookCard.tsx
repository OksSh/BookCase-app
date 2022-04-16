import { useContext, useState } from 'react';
import { Context } from '../../App';
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
  const { theme } = useContext(Context);

  return (
    <div id={id} className={styles.bookCard} style={theme}>
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
          style={theme}
          className={
            isDescription
              ? `${styles.bookCard_title} ${styles.bookCard_hiddenText}`
              : `${styles.bookCard_title} `
          }
        >
          {title}
        </h3>
        <p
          style={theme}
          className={
            isDescription
              ? `${styles.bookCard_author} ${styles.bookCard_hiddenText}`
              : `${styles.bookCard_author} `
          }
        >
          {author}
        </p>
        <p
          style={theme}
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
