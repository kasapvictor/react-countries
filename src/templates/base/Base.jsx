import { Outlet } from 'react-router-dom';

import { Header } from '@widgets';

export const Base = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
