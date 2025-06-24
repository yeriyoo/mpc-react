/**
 * 설명: 공통 유틸 함수
 **/
import { NavigateFunction } from 'react-router-dom';

/**
 * 설명: 어드민 공지사항,게시판,Q&A 등록/수정 이동 함수
 * @param {Function} navigate - userNavigate 훅
 * @param {string} url - 공지사항,게시판,Q&A 라우터 경로
 * @param {string} twoDepth - 브래드크럼 두번째 뎁스
 * @param {string} threeDepth - 브래드크럼 세번째 뎁스
 * @returns {void}
 *  */
export const handleMoveAddView = (navigate: NavigateFunction, url: string, twoDepth: string, threeDepth: string) => {
  void navigate(`/admin/board/${url}/add`, {
    state: { previousPage: `/admin/board/${url}`, oneDepth: '게시판관리', twoDepth: twoDepth, threeDepth: threeDepth },
  });
};
