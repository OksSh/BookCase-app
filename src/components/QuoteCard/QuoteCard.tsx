import styles from '../QuoteCard/QuoteCard.module.css';
export interface IQuoteCardProps {
  title: string;
  text: string;
  author: string;
  id: string;
}

export const QuoteCard = ({ title, text, author, id }: IQuoteCardProps) => {
  return (
    <div className={styles.quoteCard}>
      <div className={styles.quoteCard_content}>
        <h3 className={styles.quoteCard_title}>{title}</h3>
        <p className={styles.quoteCard_text}>{text}</p>
        <p className={styles.quoteCard_author}>{author}</p>
      </div>
      <svg
        onClick={() => {}}
        className={styles.quote_delete}
        width='17px'
        height='17px'
        viewBox='0 0 55 54'
        fill='#000000'
      >
        <g transform='translate(0.000000, -1.000000)'>
          <rect
            transform='translate(27.961245, 28.014445) rotate(45.000000) translate(-27.961245, -28.014445) '
            x='-8.78840257'
            y='26.5144594'
            width='73.4992951'
            height='2.99997123'
          />
          <rect
            transform='translate(27.890535, 28.014445) rotate(45.000000) translate(-27.890535, -28.014445) '
            x='26.3905494'
            y='-8.73520257'
            width='2.99997123'
            height='73.4992951'
          />
        </g>
      </svg>
    </div>
  );
};
