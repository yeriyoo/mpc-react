/**
 * 설명:오픈레이어스 베이스 지도 프로바이더
 **/
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useMapStore, useViewStateStore } from '@/store/commonStore.ts';
import { View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultsControls } from 'ol/control';
import { defaults as defaultsInterActions } from 'ol/interaction';
import OlMap from 'ol/Map';
import { worldMap } from '@/common/layers/mapLayer.ts';
import { Group } from 'ol/layer';
import { deckLayer } from '@/common/layers/deckLayer.ts';

// interface MainMapContextState {
//   map: OlMap;
// }

const MapContext = createContext<OlMap | null>(null);

// export const useMainMapContext = () => {
//   const context = useContext(MapContext);
//   if (!context) {
//     throw new Error('useMainMapContext must be used within a MainMapContextProvider');
//   }
//   return context;
// };

const MapProvider = ({ children }: { children: ReactNode }) => {
  const [map, setMap] = useState<OlMap | null>(null);
  const setBaseMap = useMapStore(state => state.setBaseMap); // 베이스 지도 set
  const initialViewState = useViewStateStore(state => state.viewState);

  /*
  -- 동아시아 기준 렌더링 범위
  - 각 점을 EPSG:3857로 변환 (경도, 위도)
    const point1 = fromLonLat([146.131270, 48.801419]); // [경도, 위도]
    const point2 = fromLonLat([146.159865, 28.202367]);
    const point3 = fromLonLat([107.041943, 48.763736]);
    const point4 = fromLonLat([107.156323, 28.227564]);
  - Extent 계산 (좌하단, 우상단 좌표)
    const extent = [
      Math.min(point1[0], point2[0], point3[0], point4[0]), // 최소 X (서쪽 경도)
      Math.min(point1[1], point2[1], point3[1], point4[1]), // 최소 Y (남쪽 위도)
      Math.max(point1[0], point2[0], point3[0], point4[0]), // 최대 X (동쪽 경도)
      Math.max(point1[1], point2[1], point3[1], point4[1])  // 최대 Y (북쪽 위도)
    ];
  */

  useEffect(() => {
    // 동아시아 범위
    const boundingExtent = [
      11917802.471998148, // 최소 X
      3220398.241143153, // 최소 Y
      16277122.304140426, // 최대 X
      6266463.763509466, // 최대 Y
    ];

    const map = new OlMap({
      target: 'baseMap',
      layers: [
        new Group({
          layers: [worldMap],
          properties: { category: 'baseMap' },
        }),
        new Group({
          layers: [deckLayer],
          properties: { category: 'deckLayer' },
        }),
      ],
      view: new View({
        center: fromLonLat([initialViewState.longitude, initialViewState.latitude]), // 서울
        rotation: 0,
        zoom: initialViewState.zoom,
        minZoom: 1,
        maxZoom: 20,
        // extent: boundingExtent,
        projection: 'EPSG:3857',
      }),
      controls: defaultsControls({
        attribution: false,
        rotate: false,
        zoom: false,
      }),
      interactions: defaultsInterActions({ doubleClickZoom: false, shiftDragZoom: false }),
    });
    setMap(map);
    setBaseMap(map);
    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, []);
  return <MapContext.Provider value={map}>{children}</MapContext.Provider>;
};

export default MapProvider;
