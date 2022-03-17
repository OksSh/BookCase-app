import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BooksList } from '../components/BooksList/BooksList';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HomePage } from '../components/HomePage/HomePage';
import { SelectedBook } from '../components/SelectedBook/SelectedBook';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/books' component={BooksList} exact />
        <Route path='/books/:id' component={SelectedBook} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
