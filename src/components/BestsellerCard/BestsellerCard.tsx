import styles from '../BestsellerCard/BestsellerCard.module.css';

interface IBestsellerCardProps {
  author: string;
  title: string;
  id: string;
  text: string;
  image: string;
}

export const BestsellerCard = ({
  author,
  title,
  id,
  text,
  image,
}: IBestsellerCardProps) => {
  return (
    <div id={id} className={styles.bestsellerCard}>
      <div className={styles.wrapper}>
        <img src={image} />
        <h3>{title}</h3>
        <p>{text}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};
