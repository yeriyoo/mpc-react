import React from 'react';
import MapIcon from './MapIcon';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface MapWeatherIconProps {
  positions: { top: string; left: string; transform?: string }[];
}

const MapWeatherIcon: React.FC<MapWeatherIconProps> = ({ positions }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {positions.length > 0 &&
        positions.map((pos, idx) => (
          <OverlayTrigger
            key={idx}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${idx}`} className="custom-tooltip">
                <div className="tooltip-content">
                  <div className="tooltip-title">현수원_진하 해양관측부이</div>
                  <div className="tooltip-body">
                    <div>유향: 187(deg)</div>
                    <div>유속: 12.6(cm/s)</div>
                    <div>수온: 20.13(°C)</div>
                  </div>
                </div>
              </Tooltip>
            }
          >
            <div
              style={{
                position: 'absolute',
                top: pos.top,
                left: pos.left,
                transform: pos.transform,
              }}
            >
              <MapIcon />
            </div>
          </OverlayTrigger>
        ))}
    </div>
  );
};


export default MapWeatherIcon;
