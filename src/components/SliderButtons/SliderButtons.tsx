import { SliderButtonRight } from '../SliderButtonRight/SliderButtonRight';
import styles from '../SliderButtons/SliderButtons.module.css';
import { SliderButtonLeft } from '../SliderButtonLeft/SliderButtonLeft';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { setBackBooks, setBooksOffset } from '../../redux/actions/booksAction';

export const SliderButtons = () => {
  const dispatch = useDispatch();
  const length = useSelector((state: IState) => state.booksReducer.booksLength);
  const offset = useSelector((state: IState) => state.booksReducer.booksOffset);
  const books = useSelector((state: IState) => state.booksReducer.books);
  const backBooks = useSelector(
    (state: IState) => state.booksReducer.backBooks
  );

  const onClickLeft = useCallback(() => {
    if (offset > 20) {
      // dispatch(setBackBooks(books));
      const changeOffset = offset - 20;
      dispatch(setBooksOffset(changeOffset));
    }
  }, [offset]);

  const onClickRight = useCallback(() => {
    if (length > offset) {
      // dispatch(setBackBooks(books));
      const changeOffset = offset + 20;
      dispatch(setBooksOffset(changeOffset));
    }
  }, [length, offset]);
  return (
    <div className={styles.sliderButtons}>
      <SliderButtonLeft onClickLeft={onClickLeft} />
      <SliderButtonRight onClickRight={onClickRight} />
    </div>
  );
};
