/**
 * 설명: 바텀 퀵메뉴
 **/
import ZoomMinusIcon from '@/component/icon/ZoomMinusIcon.tsx';
import ZooPlusIcon from '@/component/icon/ZooPlusIcon.tsx';
import { useMapStore } from '@/store/commonStore.ts';

const BottomQuickMenu = () => {
  const map = useMapStore(state => state.baseMap);

  const setZoom = (type: 'plus' | 'minus') => {
    const view = map?.getView();
    if (view) {
      const fixedZoom = view.getZoom()?.toFixed(1);
      const zoom = type === 'plus' ? +fixedZoom! + 1 : +fixedZoom! - 1;

      if (zoom < view.getMinZoom() || zoom > view.getMaxZoom()) return;

      view.setZoom(zoom);
    }
  };
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
      <div className="zoom-wrap">
        <button type="button" title="확대" onClick={() => setZoom('plus')} className="zoom-plus">
          <ZooPlusIcon />
        </button>
        <button type="button" title="축소" onClick={() => setZoom('minus')} className="zoom-minus">
          <ZoomMinusIcon />
        </button>
      </div>
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
