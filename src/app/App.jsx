import { Provider } from 'react-redux';
import { Header } from '@widgets';
import { CountryList } from '@pages';

import './styles/styles.css';
import { store } from './store';

export const App = () => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <CountryList />
      </Provider>
    </>
  );
};
