import { stat } from 'fs';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Account } from '../components/Account/Account';
import { BestsellerPage } from '../components/BestsellerPage/BestsellerPage';
import { BooksList } from '../components/BooksList/BooksList';
import { FavoriteBooks } from '../components/FavoriteBooks/FavoriteBooks';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HomePage } from '../components/HomePage/HomePage';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Quotes } from '../components/Quotes/Quotes';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import { IState } from '../redux/store';

export const RootRouter = () => {
  const isLogin = useSelector((state: IState) => state.userReducer.isLogin);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/books' component={BooksList} exact />
        <Route path='/bestsellers' component={BestsellerPage} exact />
        <Route path='/login' component={LoginForm} exact />
        <Route path='/registration' component={RegistrationForm} exact />
        <Route path='/account' exact>
          {isLogin ? <Account /> : <Redirect to='/login' />}
        </Route>
        <Route path='/favorite-books' exact>
          {isLogin ? <FavoriteBooks /> : <Redirect to='/login' />}
        </Route>
        <Route path='/quotes' exact>
          {isLogin ? <Quotes /> : <Redirect to='/login' />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
