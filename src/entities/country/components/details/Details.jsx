import { selectById } from '@entities/country/model';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
// TODO move to widgets
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Columns, Text, Title } from '@shared';

import { numberFormatted } from '../../lib';

import {
  DetailsCoatOfArmsImg,
  DetailsContainer,
  DetailsContent,
  DetailsContentBody,
  DetailsContentCoatOfArms,
  DetailsContentHeader,
  DetailsContentRow,
  DetailsImage,
} from './styled';

const Borders = ({ countryId }) => {
  const countryById = useSelector((state) => selectById(state, countryId));
  // borders

  return (
    <Link to={`/country/${countryId}`}>
      <Text size="medium">{countryById.name.common}</Text>
    </Link>
  );
};

Borders.propTypes = {
  countryId: PropTypes.string,
};

export const Details = () => {
  const { countryId } = useParams();
  const countryById = useSelector((state) => selectById(state, countryId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line no-console
  console.log('countryById', countryById);

  return (
    <DetailsContainer>
      <Columns columns={2} align="center">
        <DetailsImage src={countryById.flags.png} />

        <DetailsContent>
          <DetailsContentHeader>
            {!!Object.values(countryById.coatOfArms).length && (
              <DetailsContentCoatOfArms>
                <DetailsCoatOfArmsImg src={countryById.coatOfArms.png} alt={countryById.name.common} />
              </DetailsContentCoatOfArms>
            )}

            <Title type="h1" variant="bold">
              {countryById.name.common}
            </Title>
          </DetailsContentHeader>

          <DetailsContentBody>
            <DetailsContentRow>
              <Text tag="span" variant="bold">
                Native Name:
              </Text>
              <Text size="medium">{countryById.altSpellings.map((n) => n).join(', ')}</Text>
            </DetailsContentRow>
            <DetailsContentRow>
              <Text tag="span" variant="bold">
                Population:
              </Text>
              <Text size="medium">{numberFormatted(countryById.population)}</Text>
            </DetailsContentRow>
            <DetailsContentRow>
              <Text tag="span" variant="bold">
                Region:
              </Text>
              <Text size="medium">{countryById.region}</Text>
            </DetailsContentRow>
            <DetailsContentRow>
              <Text tag="span" variant="bold">
                Sub Region:
              </Text>
              <Text size="medium">{countryById.subregion}</Text>
            </DetailsContentRow>
            {countryById.capital && (
              <DetailsContentRow>
                <Text tag="span" variant="bold">
                  Capital:
                </Text>
                <Text size="medium">{countryById.capital.map((c) => c).join(', ')}</Text>{' '}
              </DetailsContentRow>
            )}
            <DetailsContentRow>
              <Text tag="span" variant="bold">
                Top Level Domain:
              </Text>
              <Text size="medium">{countryById.tld.map((d) => d).join(', ')}</Text>
            </DetailsContentRow>
            {countryById.currencies && (
              <DetailsContentRow>
                <Text tag="span" variant="bold">
                  Currency:
                </Text>
                <Text size="medium">
                  {Object.entries(countryById.currencies)
                    .map(([key, value]) => {
                      return `${value.symbol} - ${value.name} (${key})`;
                    })
                    .join(', ')}
                </Text>
              </DetailsContentRow>
            )}
            <DetailsContentRow>
              <Text tag="span" variant="bold">
                Area:
              </Text>
              <Text size="medium">{numberFormatted(countryById.area)}</Text>
            </DetailsContentRow>{' '}
            {countryById.languages && (
              <DetailsContentRow>
                <Text tag="span" variant="bold">
                  Languages:
                </Text>
                <Text size="medium">
                  {Object.values(countryById.languages)
                    .map((l) => l)
                    .join(', ')}
                </Text>
              </DetailsContentRow>
            )}
            <DetailsContentRow>
              <Text tag="span" variant="bold">
                Time Zone:
              </Text>
              <Text size="medium">{countryById.timezones.map((t) => t).join(', ')}</Text>
            </DetailsContentRow>
            {countryById.borders && (
              <DetailsContentRow>
                <Text tag="span" variant="bold">
                  Borders:
                </Text>
                {countryById.borders.map((b) => (
                  <Borders key={b} countryId={b} />
                ))}
              </DetailsContentRow>
            )}
          </DetailsContentBody>
        </DetailsContent>
      </Columns>
      {/* TODO move to widgets */}
      <br />
      <br />
      <div style={{ width: '100%', height: 600, position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
        {Object.values(countryById.capitalInfo).length ? (
          <MapContainer center={[countryById.capitalInfo.latlng[0], countryById.capitalInfo.latlng[1]]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[countryById.capitalInfo.latlng[0], countryById.capitalInfo.latlng[1]]}>
              <Popup>
                {countryById.name.common}, {countryById.capital[0]}
              </Popup>
            </Marker>
          </MapContainer>
        ) : (
          <MapContainer center={[countryById.latlng[0], countryById.latlng[1]]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[countryById.latlng[0], countryById.latlng[1]]}>
              <Popup>
                {countryById.name.common}, {countryById.capital ? countryById.capital[0] : ''}
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </DetailsContainer>
  );
};
