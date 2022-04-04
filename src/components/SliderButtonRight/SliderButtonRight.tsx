import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Context } from '../../App';
import { IState } from '../../redux/store';
import styles from '../SliderButtonRight/SliderButtonRight.module.css';

interface ISliderButtonRightProps {
  onClickRight: () => void;
}

export const SliderButtonRight = ({
  onClickRight,
}: ISliderButtonRightProps) => {
  const offset = useSelector((state: IState) => state.booksReducer.booksOffset);
  const length = useSelector((state: IState) => state.booksReducer.booksLength);
  const { theme } = useContext(Context);
  return (
    <svg
      style={theme}
      onClick={onClickRight}
      className={
        offset < length
          ? `${styles.sliderButtonLeft} ${styles.isActive}`
          : `${styles.sliderButtonLeft}`
      }
      viewBox='0 0 5 9'
    >
      <path d='M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z' />
    </svg>
  );
};
