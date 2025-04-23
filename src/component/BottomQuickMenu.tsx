/**
 * 설명: 바텀 퀵메뉴
 **/

const BottomQuickMenu = () => {
  return (
    <section className="bottom-quick-menu-wrap">
      <button type="button" className="ol-map">
        <article className="icon-ol">
          <i className="icon-ol-map" />
        </article>
        <label>일반지도</label>
      </button>
      <button type="button" className="satellite-map">
        <article>
          <i className="icon-satellite-map" />
        </article>
        <label>위성지도</label>
      </button>
      <button type="button" className="legend-btn">
        <article className="icon-legend">
          <i className="icon-legend" />
        </article>
        <label>범례</label>
      </button>
    </section>
  );
};

export default BottomQuickMenu;
