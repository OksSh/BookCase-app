import styles from '../SliderToggle/SliderToggle.module.css';

interface ISliderToogleProps {
  onClickLeft: () => void;
  onClickRight: () => void;
}

export const SliderToggle = ({
  onClickLeft,
  onClickRight,
}: ISliderToogleProps) => {
  return (
    <div className={styles.sliderToggle}>
      <img src='/assets/img/left.png' onClick={onClickLeft} />
      <img src='/assets/img/right.png' onClick={onClickRight} />
    </div>
  );
};
