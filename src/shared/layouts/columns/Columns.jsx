import PropTypes from 'prop-types';

import { ColumnsStyled } from './styled';

export const Columns = ({ columns = 2, children }) => {
  return <ColumnsStyled columns={columns}>{children}</ColumnsStyled>;
};

Columns.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node.isRequired,
};
