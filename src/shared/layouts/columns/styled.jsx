import { SPACE } from '@app/shared';
import styled from '@emotion/styled';

const buildColumns = (columns) => Array(columns).fill('1fr').join(' ');

export const ColumnsStyled = styled.div(({ columns = 2 }) => ({
  display: 'grid',
  gridTemplateColumns: buildColumns(columns),
  gap: SPACE.gutter,
}));
