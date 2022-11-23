import { DetailsContainer } from '@entities/country/components/details/styled';
import { selectById } from '@entities/country/model';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Text } from '@shared';

export const Details = ({ countryId }) => {
  const countryById = useSelector((state) => selectById(state, countryId));

  return (
    <DetailsContainer>
      <Text tag="span" variant="bold" size="large">
        {countryById.name.common}
      </Text>
    </DetailsContainer>
  );
};

Details.propTypes = {
  countryId: PropTypes.string,
};
