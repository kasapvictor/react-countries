import PropTypes from 'prop-types';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import { MapBox } from './styled';

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView([coords[0], coords[1]], map.getZoom());

  return null;
}

ChangeMapView.propTypes = {
  coords: PropTypes.array,
};

export const Map = ({ countryById }) => {
  const { countryName, capitalName, coords } = countryById;
  const coordsData = [coords[1][0], coords[1][1]];

  return (
    <MapBox>
      <MapContainer center={coordsData} zoom={8} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeMapView coords={coordsData} />

        <Marker position={coordsData}>
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
