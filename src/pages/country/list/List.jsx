import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CountryCard, countryModel } from '@entities';
import { Container, STATUS, Text } from '@shared';
import { CountryFilter } from '@widgets';

import { LinkStyled, ListItem, ListStyled } from './styled';

export const List = () => {
  const dispatch = useDispatch();
  const countriesIds = useSelector(countryModel.selectIds);
  const { statusFetch, errorFetch } = useSelector(countryModel.selectFetchStatus);

  useEffect(() => {
    if (statusFetch === STATUS.IDLE_STATUS) {
      dispatch(countryModel.fetchCountries());
    }
  }, []);

  return (
    <Container>
      <CountryFilter />
      {statusFetch === STATUS.LOADING_STATUS && <Text tag="code">Loading ...</Text>}
      {statusFetch === STATUS.FAILED_STATUS && <Text tag="code">{errorFetch}</Text>}

      {statusFetch === STATUS.SUCCESS_STATUS && (
        <ListStyled>
          {countriesIds.map((countryId) => (
            <ListItem key={countryId}>
              <LinkStyled to={`/country/${countryId}`}>
                <CountryCard countryId={countryId} />
              </LinkStyled>
            </ListItem>
          ))}
        </ListStyled>
      )}
    </Container>
  );
};
