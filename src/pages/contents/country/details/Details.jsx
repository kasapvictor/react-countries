import { DetailsContent, DetailsTop } from '@pages/contents/country/details/styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { countryModel, CountryDetails } from '@entities';
import { Button, Container, STATUS, Text } from '@shared';

export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countryId } = useParams();
  const { statusFetch, errorFetch } = useSelector(countryModel.selectFetchStatus);

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (statusFetch === STATUS.IDLE_STATUS) {
      dispatch(countryModel.fetchCountries());
    }
  }, []);

  return (
    <Container>
      <DetailsTop>
        <Button variant="light" onClick={handleClick}>
          Back
        </Button>
      </DetailsTop>
      <DetailsContent>
        {statusFetch === STATUS.LOADING_STATUS && <Text tag="code">Loading Details ...</Text>}

        {statusFetch === STATUS.FAILED_STATUS && <Text tag="code">{errorFetch}</Text>}

        {statusFetch === STATUS.SUCCESS_STATUS && <CountryDetails countryId={countryId} />}
      </DetailsContent>
    </Container>
  );
};
