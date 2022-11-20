import './styles.css';
import { Header } from '@shared';
import { Provider } from 'react-redux';

import { store } from '@app/store';
import { Home } from '@app/pages';

export const App = () => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};
