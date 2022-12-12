import './styles/styles.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Routing } from './routing';
import { store } from './store';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </Provider>
    </>
  );
};
