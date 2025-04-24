/**
 * 설명: 공통 스토어 저장
 **/

import { create } from 'zustand';
import OlMap from 'ol/Map';

// 기본 지도 저장 인터페이스
export interface MapStoreInterface {
  baseMap: OlMap | null;
  setBaseMap: (m: OlMap | null) => void;
}

// 기본 지도 저장 스토어
export const useMapStore = create<MapStoreInterface>(set => ({
  baseMap: null,
  setBaseMap: (m: OlMap | null) =>
    set(() => {
      return { baseMap: m };
    }),
}));
