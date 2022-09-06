import {
  useEffect,
  useState,
  useRef,
  isValidElement,
  cloneElement,
} from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

import styles from './MyPZMap.module.scss';

export const MyPZMapWrapper = (props) => {
  const { apiKey, children } = props;

  const render = (status) => (<div>{status}</div>);

  return (
    <Wrapper apiKey={apiKey} render={render}>
      {children}
    </Wrapper>
  );
};

const Marker = (options) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker && window && window.google && window.google.maps) {
      setMarker(new window.google.maps.Marker(options));
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const Map = (props) => {
  const {
    children,
    zoom,
    center,
    maxZoom,
  } = props;
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map && window && window.google && window.google.maps) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }

    if (map) {
      map.setOptions({
        center,
        zoom,
        maxZoom,
        streetViewControl: false,
      });
    }
  }, [ref, map]);

  return (
    <div ref={ref} className={styles['mypz-map__container']}>
      {children && children.map((child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { map });
        }
        return null;
      })}
      {children}
    </div>
  );
};

const MyPZMap = (props) => {
  const {
    markers,
    zoom,
    mapPublicKey,
  } = props;

  // TODO: define center from bounds of all markers
  const center = {
    lat: markers[0] && markers[0].lat !== 0 ? markers[0].lat : 25.2048,
    lng: markers[0] && markers[0].lng !== 0 ? markers[0].lng : 55.2708,
  };

  const renderMarkers = () => markers.map((m) => (
    <Marker
      key={m.title}
      position={{ lat: m.lat, lng: m.lng }}
    />
  ));

  return (
    <div className={styles['mypz-map']}>
      <MyPZMapWrapper apiKey={mapPublicKey}>
        <Map center={center} zoom={zoom || 14} maxZoom={18}>
          {renderMarkers()}
        </Map>
      </MyPZMapWrapper>
    </div>
  );
};

export default MyPZMap;
