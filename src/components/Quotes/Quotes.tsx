import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../../App';
import { IState } from '../../redux/store';
import { addQuote, getQuotes } from '../../services/account';
import { Button } from '../Button/Button';
import { QuoteCard } from '../QuoteCard/QuoteCard';
import styles from '../Quotes/Quotes.module.css';
import { TextArea } from '../TextArea/TextArea';

export const Quotes = () => {
  const [isModalWindow, setIsModalWindow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [quote, setQuote] = useState({ title: '', text: '', author: '' });
  const quotes = useSelector((state: IState) => state.accountReducer.quotes);
  const userId = useSelector((state: IState) => state.accountReducer.userName);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState<boolean>(false);

  const { theme } = useContext(Context);

  useEffect(() => {
    dispatch(getQuotes(userId));
  }, [userId]);

  const onChangeTitle = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(event.target.value);
    },
    [title]
  );
  const onChangeQuote = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    [text]
  );
  const onChangeAuthor = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setAuthor(event.target.value);
    },
    [author]
  );

  const onClickModalWindow = useCallback(() => {
    setAuthor('');
    setText('');
    setTitle('');
    setIsError(false);
    setIsModalWindow(!isModalWindow);
  }, [isModalWindow]);

  const onClickAddQuote = useCallback(() => {
    const data = { title: title, text: text, author: author };
    const values = Object.values(data).some((item) => item === '');
    if (!values) {
      setIsError(false);
      setQuote(data);
      dispatch(addQuote(quotes, author, title, text, userId));
      setAuthor('');
      setText('');
      setTitle('');
      setIsModalWindow(false);
    } else {
      setIsError(true);
    }
  }, [quotes, title, text, author]);

  return (
    <div style={theme} className={styles.quotes}>
      <div className={styles.container}>
        <svg
          style={theme}
          className={styles.quotes_add}
          onClick={onClickModalWindow}
          width='35'
          height='35'
          viewBox='0 0 24 24'
          fill='#000000'
        >
          <path d='M13.5,20 C14.3284271,20 15,19.3284271 15,18.5 C15,17.1192881 16.1192881,16 17.5,16 C18.3284271,16 19,15.3284271 19,14.5 L19,11.5 C19,11.2238576 19.2238576,11 19.5,11 C19.7761424,11 20,11.2238576 20,11.5 L20,14.5 C20,18.0898509 17.0898509,21 13.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 L4,5.5 C4,4.11928813 5.11928813,3 6.5,3 L12.5,3 C12.7761424,3 13,3.22385763 13,3.5 C13,3.77614237 12.7761424,4 12.5,4 L6.5,4 C5.67157288,4 5,4.67157288 5,5.5 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L13.5,20 L13.5,20 Z M15.7913481,19.5014408 C16.9873685,18.9526013 17.9526013,17.9873685 18.5014408,16.7913481 C18.1948298,16.9255432 17.8561101,17 17.5,17 C16.6715729,17 16,17.6715729 16,18.5 C16,18.8561101 15.9255432,19.1948298 15.7913481,19.5014408 L15.7913481,19.5014408 Z M18,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L18,7 L18,9.5 C18,9.77614237 17.7761424,10 17.5,10 C17.2238576,10 17,9.77614237 17,9.5 L17,7 L14.5,7 C14.2238576,7 14,6.77614237 14,6.5 C14,6.22385763 14.2238576,6 14.5,6 L17,6 L17,3.5 C17,3.22385763 17.2238576,3 17.5,3 C17.7761424,3 18,3.22385763 18,3.5 L18,6 Z M8.5,9 C8.22385763,9 8,8.77614237 8,8.5 C8,8.22385763 8.22385763,8 8.5,8 L12.5,8 C12.7761424,8 13,8.22385763 13,8.5 C13,8.77614237 12.7761424,9 12.5,9 L8.5,9 Z M8.5,12 C8.22385763,12 8,11.7761424 8,11.5 C8,11.2238576 8.22385763,11 8.5,11 L15.5,11 C15.7761424,11 16,11.2238576 16,11.5 C16,11.7761424 15.7761424,12 15.5,12 L8.5,12 Z M8.5,15 C8.22385763,15 8,14.7761424 8,14.5 C8,14.2238576 8.22385763,14 8.5,14 L13.5,14 C13.7761424,14 14,14.2238576 14,14.5 C14,14.7761424 13.7761424,15 13.5,15 L8.5,15 Z' />
        </svg>
        {isModalWindow ? (
          <div className={styles.quotes_modalWindow}>
            <div style={theme} className={styles.quotes_wrapper}>
              <div className={styles.quotes_modalWindow_content}>
                <div>
                  <TextArea
                    name='Title'
                    value={title}
                    onChange={onChangeTitle}
                  />
                  <TextArea
                    name='Quote'
                    value={text}
                    onChange={onChangeQuote}
                  />
                  <TextArea
                    name='Author'
                    value={author}
                    onChange={onChangeAuthor}
                  />
                  <Button text='Add a quote' onClick={onClickAddQuote} />
                </div>
                <svg
                  style={theme}
                  onClick={onClickModalWindow}
                  className={styles.modalWindow_close}
                  width='20px'
                  height='20px'
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
              <p
                className={
                  isError
                    ? styles.modalWindow_error
                    : styles.modalWindow_error_hidden
                }
              >
                Fill in all areas
              </p>
            </div>
          </div>
        ) : null}
        {quotes.length >= 1 ? (
          <div className={styles.quotes_items}>
            {quotes.map((item) => (
              <QuoteCard
                title={item.title}
                text={item.text}
                author={item.author}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
        ) : (
          <p className={styles.quotes_empty}>
            There is not a single quote. You can add quotes from books.
          </p>
        )}
      </div>
    </div>
  );
};
