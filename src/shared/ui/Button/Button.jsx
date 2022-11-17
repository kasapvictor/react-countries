import PropTypes from 'prop-types';

import { ButtonStyled } from './styled';

export const Button = ({ variant = 'button', children, onClick }) => {
  return (
    <ButtonStyled variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
};
