import PropTypes from 'prop-types';

import { ContainerStyled } from './styled';

export const Container = ({ children, center = false }) => {
  return <ContainerStyled center={center}>{children}</ContainerStyled>;
};

Container.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
