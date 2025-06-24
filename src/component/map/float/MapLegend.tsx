/**
 * 설명: 지도 히딘 범례
 **/
const MapLegend = () => {
  return (
    <div className="map-legend">
      <div className="legend-title">유출 유종 별 색상</div>
      <div className="legend-item-group">
        <div className="legend-item">
          <div className="item-symbol">
            <i className="legend-icon1 color1"></i>
          </div>
          <div className="item-name">유막(&gt;100nm)</div>
        </div>
        <div className="legend-item">
          <div className="item-symbol">
            <i className="legend-icon1 color2"></i>
          </div>
          <div className="item-name">유막(&gt;300nm)</div>
        </div>
        <div className="legend-item">
          <div className="item-symbol">
            <i className="legend-icon1 color3"></i>
          </div>
          <div className="item-name">원유,연료유(&gt;0.1mm)</div>
        </div>
        <div className="legend-item">
          <div className="item-symbol">
            <i className="legend-icon1 color4"></i>
          </div>
          <div className="item-name">에멀전(&gt;1mm)</div>
        </div>
      </div>
    </div>
  );
};
export default MapLegend;
