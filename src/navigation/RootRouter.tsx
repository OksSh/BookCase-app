import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BestsellerPage } from '../components/BestsellerPage/BestsellerPage';
import { BooksList } from '../components/BooksList/BooksList';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HomePage } from '../components/HomePage/HomePage';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/books' component={BooksList} exact />
        <Route path='/bestsellers' component={BestsellerPage} exact />
        <Route path='/login' component={LoginForm} exact />
        <Route path='/registration' component={RegistrationForm} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
