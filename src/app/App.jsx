import { Provider } from 'react-redux';
import { Header } from '@widgets';
import { Countries } from '@pages';

import './styles/styles.css';
import { store } from './store';

export const App = () => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Countries />
      </Provider>
    </>
  );
};
