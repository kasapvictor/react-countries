import './styles/styles.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
