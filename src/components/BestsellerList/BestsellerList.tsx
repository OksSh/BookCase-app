import { useHistory } from 'react-router-dom';
import { BestsellerCard } from '../BestsellerCard/BestsellerCard';
import styles from '../BestsellerList/BestsellerList.module.css';

interface IBestsellerCard {
  author: string;
  title: string;
  description: string;
  primary_isbn13: string;
  book_image: string;
  amazon_product_url: string;
}

export interface IBestSellerListProps {
  books: IBestsellerCard[];
  display_name: string;
}

export const BestsellerList = ({
  books,
  display_name,
}: IBestSellerListProps) => {
  const histoty = useHistory();
  return (
    <div className={styles.bestsellerList}>
      <div className={styles.container}>
        <h2 className={styles.bestsellerList_title}>{display_name}</h2>
        <div className={styles.wrapper}>
          <BestsellerCard
            author={books[0].author}
            title={books[0].title}
            id={books[0].primary_isbn13}
            text={books[0].description}
            image={books[0].book_image}
            amazonHref={books[0].amazon_product_url}
            onClickReviews={() => {
              histoty.push('/reviews/' + books[0].primary_isbn13);
            }}
          />
          <BestsellerCard
            author={books[1].author}
            title={books[1].title}
            id={books[1].primary_isbn13}
            text={books[1].description}
            image={books[1].book_image}
            amazonHref={books[1].amazon_product_url}
            onClickReviews={() => {
              histoty.push('/reviews/' + books[1].primary_isbn13);
            }}
          />
          <BestsellerCard
            author={books[2].author}
            title={books[2].title}
            id={books[2].primary_isbn13}
            text={books[2].description}
            image={books[2].book_image}
            amazonHref={books[2].amazon_product_url}
            onClickReviews={() => {
              histoty.push('/reviews/' + books[2].primary_isbn13);
            }}
          />
          <BestsellerCard
            author={books[3].author}
            title={books[3].title}
            id={books[3].primary_isbn13}
            text={books[3].description}
            image={books[3].book_image}
            amazonHref={books[3].amazon_product_url}
            onClickReviews={() => {
              histoty.push('/reviews/' + books[3].primary_isbn13);
            }}
          />
          <BestsellerCard
            author={books[4].author}
            title={books[4].title}
            id={books[4].primary_isbn13}
            text={books[4].description}
            image={books[4].book_image}
            amazonHref={books[4].amazon_product_url}
            onClickReviews={() => {
              histoty.push('/reviews/' + books[4].primary_isbn13);
            }}
          />
        </div>
      </div>
    </div>
  );
};
