import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CountryCard, countryModel } from '@entities';
import { Container, STATUS, Text } from '@shared';
import { CountryFilter } from '@widgets';

import { LinkStyled, ListItem, ListStyled } from './styled';

export const List = () => {
  const dispatch = useDispatch();
  const countriesIds = useSelector(countryModel.selectIds);
  const countriesIdsFiltered = useSelector(countryModel.selectFilteredIds);
  const { statusFetch, errorFetch } = useSelector(countryModel.selectFetchStatus);

  const ids = countriesIdsFiltered.length ? countriesIdsFiltered : countriesIds;

  useEffect(() => {
    if (statusFetch === STATUS.IDLE_STATUS) {
      dispatch(countryModel.fetchCountries());
    }
  }, []);

  return (
    <Container>
      {statusFetch === STATUS.LOADING_STATUS && <Text tag="code">Loading ...</Text>}

      {statusFetch === STATUS.FAILED_STATUS && <Text tag="code">{errorFetch}</Text>}

      {statusFetch === STATUS.SUCCESS_STATUS && (
        <>
          <CountryFilter />
          <ListStyled>
            {ids.map((countryId) => (
              <ListItem key={countryId}>
                <LinkStyled to={`/country/${countryId}`}>
                  <CountryCard countryId={countryId} />
                </LinkStyled>
              </ListItem>
            ))}
          </ListStyled>
        </>
      )}
    </Container>
  );
};
