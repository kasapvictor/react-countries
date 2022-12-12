import PropTypes from 'prop-types';

import { Main, Container } from '@shared';
import { Footer, Header } from '@widgets';

export const Base = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
};
