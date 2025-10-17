import React from 'react';
import MapIcon from './MapIcon';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface MapWeatherIconProps {
  positions: { top: string; left: string; label?: string }[];
  mapImage: string;
}

const MapWeatherIcon: React.FC<MapWeatherIconProps> = ({ positions, mapImage }) => {
  return (

      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* 지도 이미지 */}
      <img
        src={mapImage}
        alt="map"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />

      {positions.length > 0 && positions.map((pos, idx) => (
        <OverlayTrigger
          key={idx}
          placement="top"
          overlay={
            <Tooltip id={`tooltip-${idx}`} className="custom-tooltip">
              <div className="tooltip-content">
                {/* 타이틀 영역 */}
                <div className="tooltip-title">현수원_진하 해양관측부이</div>
                
                {/* 내용 영역 */}
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
