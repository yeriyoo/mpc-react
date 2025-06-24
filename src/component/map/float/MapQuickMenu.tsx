/**
 * 설명: 지도 오른쪽 퀵메뉴
 **/
import Icon from '@mdi/react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {
  mdiArrowExpandHorizontal,
  mdiCursorMove,
  mdiEraser,
  mdiFormatListBulletedType,
  mdiMinus,
  mdiPlus,
  mdiRadiusOutline,
  mdiVectorSquare,
} from '@mdi/js';
import { useMapStore } from '@/store/commonStore.ts';
import {
  areaSearchClean,
  createCircleMeasureInteraction,
  createDistMeasureInteraction,
  createMeasureVectorLayer,
  getAreaMeasureInteraction,
  measureClean,
} from '@/common/utils/measureDrawUtil.ts';
import { useState } from 'react';
import OlMap from 'ol/Map';

const MapControl = () => {
  const map = useMapStore(state => state.baseMap) as OlMap;
  const [selectInteraction, setSelectInteraction] = useState('');

  // 거리,거리환 생성
  const handleMeasure = (type: string) => {
    measureClean(map);
    areaSearchClean(map);
    if (selectInteraction === type) {
      setSelectInteraction('');
    } else {
      const vectorLayer = createMeasureVectorLayer(map);
      const getLayerSource = vectorLayer.getSource();
      if (getLayerSource) {
        setSelectInteraction(type);
        switch (type) {
          case 'distance':
            createDistMeasureInteraction(getLayerSource, map);
            break;
          case 'circle':
            createCircleMeasureInteraction(getLayerSource, map);
            break;
          case 'area':
            getAreaMeasureInteraction(getLayerSource, map);
            break;
          default:
            return;
        }
      }
    }
  };

  // 줌
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
    <div className="map-control">
      <div className="control-btn-group">
        <Button variant="control">
          <Icon path={mdiCursorMove} className="mpci mdi mdi-cursor-move" />
        </Button>
        <OverlayTrigger overlay={<Tooltip>거리환</Tooltip>} placement="left">
          <Button variant="control" active={selectInteraction === 'circle'} onClick={() => handleMeasure('circle')}>
            <Icon path={mdiRadiusOutline} className="mpci mdi mdi-radius-outline" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>거리</Tooltip>} placement="left">
          <Button variant="control" active={selectInteraction === 'distance'} onClick={() => handleMeasure('distance')}>
            <Icon path={mdiArrowExpandHorizontal} className="mpci mdi mdi-arrow-expand-horizontal" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>면적</Tooltip>} placement="left">
          <Button variant="control" active={selectInteraction === 'area'} onClick={() => handleMeasure('area')}>
            <Icon path={mdiVectorSquare} className="mpci mdi mdi-vector-square" />
          </Button>
        </OverlayTrigger>
      </div>
      <div className="control-btn-group">
        <Button variant="control">
          <Icon path={mdiEraser} className="mpci mdi mdi-eraser" />
        </Button>
        <Button variant="control">
          <Icon path={mdiFormatListBulletedType} className="mpci mdi mdi-format-list-bulleted-type" />
        </Button>
      </div>
      <div className="control-btn-group">
        <OverlayTrigger overlay={<Tooltip>확대</Tooltip>} placement="left">
          <Button variant="control" onClick={() => setZoom('plus')}>
            <Icon path={mdiPlus} className="mpci mdi mdi-plus" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>축소</Tooltip>} placement="left">
          <Button variant="control" onClick={() => setZoom('minus')}>
            <Icon path={mdiMinus} className="mpci mdi mdi-minus" />
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default MapControl;
