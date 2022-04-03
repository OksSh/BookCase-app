import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IState } from '../../redux/store';
import { getBookReviews } from '../../services/bookReviewsList';
import styles from '../BookReviews/BookReviews.module.css';
import { BookReviewsCard } from '../BookReviewsCard/BookReviewsCard';
import { Preloader } from '../Preloader/Preloader';
import { Title } from '../Title/Title';

interface IItemProps {
  byline: string;
  summary: string;
  publication_dt: string;
  url: string;
  isbn13: string;
}

export const BookRewievs = () => {
  const dispatch = useDispatch();
  const params: any = useParams();
  const reviews = useSelector(
    (state: IState) => state.booksReducer.bookReviews
  );

  useEffect(() => {
    dispatch(getBookReviews(params.isbn));
  }, [params.isbn]);

  return (
    <div className={styles.bookReviews}>
      <div className={styles.container}>
        <div className={styles.bookReviews_title}>
          <Title text='Book reviews' />
        </div>
        <div className={styles.bookReviews_content}>
          {reviews.length >= 1 ? (
            reviews.map((item: IItemProps) => (
              <BookReviewsCard
                author={item.byline}
                text={item.summary}
                date={item.publication_dt}
                href={item.url}
                key={item.isbn13}
              />
            ))
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </div>
  );
};
