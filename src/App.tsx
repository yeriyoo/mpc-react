import { useEffect } from 'react';
import { Map, View } from 'ol';
import WebGLTileLayer from 'ol/layer/WebGLTile';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultsControls } from 'ol/control';
import Header from '@/component/Header.tsx';
import TopQuickMenu from '@/component/TopQuickMenu.tsx';
import BottomQuickMenu from '@/component/BottomQuickMenu.tsx';

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

function App() {
  useEffect(() => {
    // 동아시아 범위
    const boundingExtent = [
      11917802.471998148, // 최소 X
      3220398.241143153, // 최소 Y
      16277122.304140426, // 최대 X
      6266463.763509466, // 최대 Y
    ];

    const map = new Map({
      target: 'baseMap',
      layers: [
        new WebGLTileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([126.978, 37.5665]), // 서울
        zoom: 7,
        extent: boundingExtent,
        projection: 'EPSG:3857',
      }),
      controls: defaultsControls({
        attribution: false,
        rotate: false,
        zoom: false,
      }),
    });

    return () => {
      if (map) map.dispose();
    };
  }, []);
  return (
    <main>
      <Header />
      <div id="baseMap" />
      <TopQuickMenu />
      <BottomQuickMenu />
    </main>
  );
}

export default App;
