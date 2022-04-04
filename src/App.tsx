import { Provider } from 'react-redux';
import { createContext, useState } from 'react';
import './App.css';
import { RootRouter } from './navigation/RootRouter';
import { store } from './redux/store';

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: {},
});

const darkTheme = {
  background: '#191919',
  color: '#FFFFFF',
  fill: '#FFFFFF',
};

const lightTheme = {
  background: '#FFFFFF',
  color: '#191919',
  fill: '#191919',
};

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
    console.log(isDark);
  };

  return (
    <Provider store={store}>
      <Context.Provider
        value={{
          isDark,
          changeIsDark,
          theme: isDark ? darkTheme : lightTheme,
        }}
      >
        <div className='App'>
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
