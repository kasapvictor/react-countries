import PropTypes from 'prop-types';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { MapBox } from './styled';

export const Map = ({ countryById }) => {
  const { countryName, capitalName, coords } = countryById;

  return (
    <MapBox>
      <MapContainer center={[coords[1][0], coords[1][1]]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coords[1][0], coords[1][1]]}>
          <Popup>
            {countryName[1]}, {capitalName[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </MapBox>
  );
};

Map.propTypes = {
  countryById: PropTypes.object,
};
