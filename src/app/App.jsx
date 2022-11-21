import './styles/styles.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Routing } from '@pages';
import { Header } from '@widgets';

import { store } from './store';

export const App = () => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </>
  );
};
