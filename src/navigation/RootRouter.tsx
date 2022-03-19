import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BooksList } from '../components/BooksList/BooksList';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HomePage } from '../components/HomePage/HomePage';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/books' component={BooksList} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
