/**
 * 설명: 베이스 지도
 **/
import { useEffect, useState } from 'react';
import { SamplePage1 } from '@/pages/sample/SamplePage1.tsx';
import { SamplePage2 } from '@/pages/sample/SamplePage2.tsx';
import { SamplePage3 } from '@/pages/sample/SamplePage3.tsx';
import { SamplePage4 } from '@/pages/sample/SamplePage4.tsx';
import { Container } from 'react-bootstrap';
import { useDivisionMapStore, useDivisionStateStore, useMapStore } from '@/store/commonStore.ts';
import { Map, View } from 'ol';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultsControls } from 'ol/control/defaults';
import AlarmListModal from '@/component/map/modal/AlarmListModal.tsx';
import BottomLonLat from '@/component/map/float/BottomLonLat.tsx';
import Header from '@/component/map/float/Header.tsx';
import MapViewControl from '@/component/map/float/MapViewControl.tsx';
import MapLegend from '@/component/map/float/MapLegend.tsx';
import FieldInfoUploadModal from '@/component/map/modal/FieldInfoUploadModal.tsx';
import AccidentSituationModal from '@/component/map/modal/AccidentSituationModal.tsx';
import PollutionInfoModal from '@/component/map/modal/PollutionInfoModal.tsx';
import SpreadPredictModal from '@/component/map/modal/SpreadPredictModal.tsx';
import LayerListModal from '@/component/map/modal/LayerListModal.tsx';
import { MaterialListModal } from '@/component/map/modal/MaterialListModal.tsx';
import { QaModal } from '@/component/map/modal/QaModal.tsx';
import { NoticeModal } from '@/component/map/modal/NoticeModal.tsx';
import { QaDetailModal } from '@/component/map/modal/QaDetailModal.tsx';
import SearchFilterModal from '@/component/map/modal/SearchFilterModal.tsx';
import { PollutionMaterialModal } from '@/component/map/modal/PollutionMetarialModal.tsx';
import SpreadPredictListModal from '@/component/map/modal/SpreadPredictListModal.tsx';
import PollutionMaterialDetailModal from '@/component/map/modal/PollutionMaterialDetailModal.tsx';
import MapQuickMenu from '@/component/map/float/MapQuickMenu.tsx';
import WebGLTileLayer from 'ol/layer/WebGLTile';

const BaseMap = () => {
  const setBaseMap = useMapStore(state => state.setBaseMap);
  const isDivision = useDivisionStateStore(state => state.isDivision);
  const divisionMap = useDivisionMapStore(state => state.divisionMap);

  const [isShowSampleModal1, setIsShowSampleModal1] = useState(false);
  const [isShowSampleModal2, setIsShowSampleModal2] = useState(false);
  const [isShowSampleModal3, setIsShowSampleModal3] = useState(false);
  const [isShowSampleModal4, setIsShowSampleModal4] = useState(false);

  const [isShowModal2, setIsShowModal2] = useState(false);
  const [isShowModal3, setIsShowModal3] = useState(false);
  const [isShowModal4, setIsShowModal4] = useState(false);
  const [isShowModal5, setIsShowModal5] = useState(false);
  const [isShowModal6, setIsShowModal6] = useState(false);
  const [isShowModal7, setIsShowModal7] = useState(false);
  const [isShowModal8, setIsShowModal8] = useState(false);
  const [isShowModal9, setIsShowModal9] = useState(false);
  const [isShowModal10, setIsShowModal10] = useState(false);
  const [isShowModal11, setIsShowModal11] = useState(false);
  const [isShowModal12, setIsShowModal12] = useState(false);
  const [isShowModal13, setIsShowModal13] = useState(false);
  const [isShowModal14, setIsShowModal14] = useState(false);
  const [isShowModal15, setIsShowModal15] = useState(false);

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
        // new WebGLTileLayer({
        //   source: new XYZ({
        //     url: '/MAPS/WORLD_webp/{z}/{x}/{y}.webp',
        //     minZoom: 4,
        //     maxZoom: 14,
        //     attributions: `ⓒ OpenStreetMap`,
        //   }),
        //   preload: Infinity,
        // }),
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

    setBaseMap(map);
    return () => {
      if (map) map.dispose();
    };
  }, []);

  return (
    <main>
      <section className="mpc-wrap">
        <Header
          setIsShowSample1={() => setIsShowSampleModal1(true)}
          setIsShowSample2={() => setIsShowSampleModal2(true)}
          setIsShowSample3={() => setIsShowSampleModal3(true)}
          setIsShowSample4={() => setIsShowSampleModal4(true)}
          setIsShow2={() => setIsShowModal2(true)}
          setIsShow3={() => setIsShowModal3(true)}
          setIsShow4={() => setIsShowModal4(true)}
          setIsShow5={() => setIsShowModal5(true)}
          setIsShow6={() => setIsShowModal6(true)}
          setIsShow7={() => setIsShowModal7(true)}
          setIsShow8={() => setIsShowModal8(true)}
          setIsShow9={() => setIsShowModal9(true)}
          setIsShow10={() => setIsShowModal10(true)}
          setIsShow11={() => setIsShowModal11(true)}
          setIsShow12={() => setIsShowModal12(true)}
          setIsShow13={() => setIsShowModal13(true)}
          setIsShow14={() => setIsShowModal14(true)}
          setIsShow15={() => setIsShowModal15(true)}
        />
        <Container fluid className="container-wrap">
          <div className="map-wrap">
            <div id="baseMap" className="map-group" />
            <BottomLonLat />
            <MapQuickMenu />
            <MapViewControl setIsShow10={() => setIsShowModal10(true)} setIsShow11={() => setIsShowModal11(true)} />
            <MapLegend />
          </div>
        </Container>

        {isShowSampleModal1 && (
          <SamplePage1 isShow={isShowSampleModal1} setIsShow={() => setIsShowSampleModal1(false)} />
        )}
        {isShowSampleModal2 && (
          <SamplePage2 isShow={isShowSampleModal2} setIsShow={() => setIsShowSampleModal2(false)} />
        )}
        {isShowSampleModal3 && (
          <SamplePage3 isShow={isShowSampleModal3} setIsShow={() => setIsShowSampleModal3(false)} />
        )}
        {isShowSampleModal4 && (
          <SamplePage4 isShow={isShowSampleModal4} setIsShow={() => setIsShowSampleModal4(false)} />
        )}
        {isShowModal2 && <FieldInfoUploadModal isShow={isShowModal2} setIsShow={() => setIsShowModal2(false)} />}
        {isShowModal3 && <AccidentSituationModal isShow={isShowModal3} setIsShow={() => setIsShowModal3(false)} />}
        {isShowModal4 && <AlarmListModal isShow={isShowModal4} setIsShow={() => setIsShowModal4(false)} />}
        {isShowModal5 && <PollutionInfoModal isShow={isShowModal5} setIsShow={() => setIsShowModal5(false)} />}
        {isShowModal6 && <SearchFilterModal isShow={isShowModal6} setIsShow={() => setIsShowModal6(false)} />}
        {isShowModal7 && <PollutionMaterialModal isShow={isShowModal7} setIsShow={() => setIsShowModal7(false)} />}
        {isShowModal8 && (
          <PollutionMaterialDetailModal isShow={isShowModal8} setIsShow={() => setIsShowModal8(false)} />
        )}
        {isShowModal9 && <SpreadPredictListModal isShow={isShowModal9} setIsShow={() => setIsShowModal9(false)} />}
        {isShowModal10 && <SpreadPredictModal isShow={isShowModal10} setIsShow={() => setIsShowModal10(false)} />}
        {isShowModal11 && <LayerListModal isShow={isShowModal11} setIsShow={() => setIsShowModal11(false)} />}
        {isShowModal12 && <NoticeModal isShow={isShowModal12} setIsShow={() => setIsShowModal12(false)} />}
        {isShowModal13 && <MaterialListModal isShow={isShowModal13} setIsShow={() => setIsShowModal13(false)} />}
        {isShowModal14 && <QaModal isShow={isShowModal14} setIsShow={() => setIsShowModal14(false)} />}
        {isShowModal15 && <QaDetailModal isShow={isShowModal15} setIsShow={() => setIsShowModal15(false)} />}
      </section>
    </main>
  );
};

export default BaseMap;
