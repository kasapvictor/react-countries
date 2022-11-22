import { selectById } from '@entities/country/model';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Card = ({ countryId }) => {
  const countryById = useSelector((state) => selectById(state, countryId));

  // eslint-disable-next-line no-console
  console.log('countryById', countryById);

  return <>Card</>;
};

Card.propTypes = {
  countryId: PropTypes.string,
};
