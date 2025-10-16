import React from 'react';
import Icon from '@mdi/react';
import { mdiChessPawn } from '@mdi/js';

type MapIconProps = {
  style?: React.CSSProperties;
};

const MapIcon: React.FC<MapIconProps> = ({ style }) => {
  return (
    <div
      className="map-icon"
      style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: '#FF0000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        ...style,
      }}
    >
      <Icon path={mdiChessPawn} size={1} color="#fff" />
    </div>
  );
};

export default MapIcon;
