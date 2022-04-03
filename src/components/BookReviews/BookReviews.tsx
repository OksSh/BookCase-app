import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteBookReviews } from '../../redux/actions/booksAction';
import { IState } from '../../redux/store';
import { getBookReviews } from '../../services/bookReviewsList';
import styles from '../BookReviews/BookReviews.module.css';
import { BookReviewsCard } from '../BookReviewsCard/BookReviewsCard';
import { Button } from '../Button/Button';
import { Preloader } from '../Preloader/Preloader';
import { Spinner } from '../Spinner/Spinner';
import { Title } from '../Title/Title';

interface IItemProps {
  byline: string;
  summary: string;
  publication_dt: string;
  url: string;
  isbn13: string;
}

export const BookReviews = () => {
  const dispatch = useDispatch();
  const params: any = useParams();
  const history = useHistory();
  const reviews = useSelector(
    (state: IState) => state.booksReducer.bookReviews
  );

  useEffect(() => {
    dispatch(getBookReviews(params.isbn));

    return () => {
      dispatch(deleteBookReviews());
    };
  }, [params.isbn]);

  return (
    <div className={styles.bookReviews}>
      <div className={styles.container}>
        <div className={styles.bookReviews_title}>
          <Title text='Book reviews' />
          <svg
            className={styles.bookReviews_goBack}
            onClick={() => history.push('/bestsellers')}
            width='35'
            height='35'
            viewBox='0 0 24 24'
          >
            <path d='M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z' />
          </svg>
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
            <p className={styles.bookReviews_empty}>No reviews</p>
          )}
        </div>
      </div>
    </div>
  );
};
