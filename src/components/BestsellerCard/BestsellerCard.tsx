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
  return (
    <div id={id} className={styles.bestsellerCard}>
      <div className={styles.wrapper}>
        <div className={styles.bestsellerCard_content}>
          <img className={styles.bestsellerCard_image} src={image} />
          <h3 className={styles.bestsellerCard_title}>{title}</h3>
          <p className={styles.bestsellerCard_text}>{text}</p>
          <p className={styles.bestsellerCard_author}>{author}</p>
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
