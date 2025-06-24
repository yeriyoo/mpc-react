import Icon from '@mdi/react';
import {
  mdiAccount,
  mdiAlertOctagon,
  mdiArrowExpandHorizontal,
  mdiBell,
  mdiCalendarBlank,
  mdiChevronDown,
  mdiChevronUp,
  mdiClose,
  mdiCursorMove,
  mdiEraser,
  mdiFileOutline,
  mdiFilterVariant,
  mdiFormatListBulletedType,
  mdiInformation,
  mdiInformationOutline,
  mdiMagnify,
  mdiMapLegend,
  mdiMenuDown,
  mdiMenuUp,
  mdiMinus,
  mdiMinusBoxOutline,
  mdiPause,
  mdiPencil,
  mdiPlay,
  mdiPlus,
  mdiPlusBoxOutline,
  mdiPrinterPosOutline,
  mdiRadiusOutline,
  mdiRefresh,
  mdiStop,
  mdiVectorSquare,
  mdiViewGridOutline,
  mdiWeatherSunset,
  mdiWindowClose,
  mdiWindowMaximize,
  mdiWindowMinimize,
  mdiWindowRestore,
  mdiFileCodeOutline,
  mdiFastForward,
  mdiRewind,
  mdiBulletinBoard,
} from '@mdi/js';
import flagImg from '@/assets/image/header/flag.svg';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';

export const SamplePage4 = ({ isShow, setIsShow }: CommonModalProps) => {
  return (
    <div className="modal show d-block">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>Icon & Image</Modal.Title>
            <CloseButton onClick={setIsShow} />
          </Modal.Header>
          <Modal.Body>
            <Stack gap={3}>
              <p>
                참고사이트: Material icon <small>https://pictogrammers.com/library/mdi</small>
              </p>
              <Stack>
                <h5>공통</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <i className="mpci brand-symbol" title="해양환경 위기대응 통합지원시스템"></i>
                  <div className="mpci mpci-image">
                    <img className="image-flag border" src={flagImg} title="국기" alt="국기" />
                  </div>
                  <i className="mpci icon-required" title="필수"></i>
                  <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                  <Icon path={mdiViewGridOutline} title="Sheet구성" className="mpci mdi mdi-view-grid-outline" />
                  <Icon path={mdiInformationOutline} title="정보" className="mpci mdi mdi-information-outline" />
                  <Icon path={mdiInformation} title="정보" className="mpci mdi mdi-information" />
                  <Icon path={mdiChevronDown} title="펼침" className="mpci mdi mdi-chevron-down" />
                  <Icon path={mdiChevronUp} title="닫침" className="mpci mdi mdi-chevron-up" />
                  <Icon path={mdiWindowMinimize} title="최소화" className="mpci mdi mdi-window-minimize" />
                  <Icon path={mdiWindowRestore} title="창복원" className="mpci mdi mdi-window-restore" />
                  <Icon path={mdiWindowMaximize} title="최대화" className="mpci mdi mdi-window-maximize" />
                  <Icon path={mdiWindowClose} title="창닫기" className="mpci mdi mdi-window-close" />
                  <Icon path={mdiMinus} title="제거" className="mpci mdi mdi-minus" />
                  <Icon path={mdiPlus} title="추가" className="mpci mdi mdi-plus" />
                  <Icon path={mdiClose} title="닫기" className="mpci mdi mdi-close" />
                  <Icon path={mdiPencil} title="편집" className="mpci mdi mdi-pencil" />
                  <Icon path={mdiMenuUp} title="위" className="mpci mdi mdi-menu-up" />
                  <Icon path={mdiMenuDown} title="아래" className="mpci mdi mdi-menu-down" />
                  <Icon path={mdiFilterVariant} title="필터" className="mpci mdi mdi-filter-variant" />
                  <Icon path={mdiPlusBoxOutline} title="펼침" className="mpci mdi mdi-plus-box-outline" />
                  <Icon path={mdiMinusBoxOutline} title="닫침" className="mpci mdi mdi-minus-box-outline" />
                  <Icon path={mdiRefresh} title="새로고침" className="mpci mdi mdi-refresh" />
                  <Icon path={mdiCalendarBlank} title="달력" className="mpci mdi mdi-calendar-blank" />
                  <Icon path={mdiPlay} title="시작" className="mpci mdi mdi-play" />
                  <Icon path={mdiPause} title="일시정시" className="mpci mdi mdi-pause" />
                  <Icon path={mdiRewind} title="rewind" className="mpci mdi mdi-rewind" />
                  <Icon path={mdiFastForward} title="forward" className="mpci mdi mdi-fast-forward" />
                  <Icon path={mdiStop} title="정지" className="mpci mdi mdi-stop" />
                  <Icon path={mdiMagnify} title="검색" className="mpci mdi mdi-magnify" />
                  <Icon path={mdiPrinterPosOutline} title="인쇄" className="mpci mdi mdi-printer-pos-outline" />
                  <Icon path={mdiFileOutline} title="파일" className="mpci mdi mdi-file-outline" />
                </Stack>
              </Stack>
              <Stack>
                <h5>메뉴</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Icon path={mdiMapLegend} title="현장 사고 관리" className="mpci mdi mdi-map-legend" />
                  <i className="mpci csi icon-menu1" title="예측(R&D)시스템"></i>
                  <i className="mpci csi icon-menu2" title="해경자산"></i>
                  <Icon path={mdiWeatherSunset} title="기상" className="mpci mdi mdi-weather-sunset" />
                  <Icon path={mdiBulletinBoard} title="게시판" className="mpci mdi mdi-bulletin-board" />
                  <Icon path={mdiFileCodeOutline} title="Sample" className="mpci mdi mdi-file-code-outline" />

                  <Icon path={mdiAlertOctagon} title="사고사항" className="mpci mdi mdi-alert-octagon" />
                  <Icon path={mdiBell} title="알람" className="mpci mdi mdi-bell" />
                  <Icon path={mdiAccount} title="사용자" className="mpci mdi mdi-account" />
                </Stack>
              </Stack>
              <Stack>
                <h5>지도 설정 버튼</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Icon path={mdiCursorMove} title="" className="mpci mdi mdi-cursor-move" />
                  <Icon path={mdiRadiusOutline} title="" className="mpci mdi mdi-radius-outline" />
                  <Icon path={mdiArrowExpandHorizontal} title="" className="mpci mdi mdi-arrow-expand-horizontal" />
                  <Icon path={mdiVectorSquare} title="" className="mpci mdi mdi-vector-square" />

                  <Icon path={mdiEraser} title="" className="mpci mdi mdi-eraser" />
                  <Icon path={mdiFormatListBulletedType} title="" className="mpci mdi mdi-format-list-bulleted-type" />

                  <Icon path={mdiPlus} title="확대" className="mpci mdi mdi-plus" />
                  <Icon path={mdiMinus} title="축소" className="mpci mdi mdi-minus" />
                </Stack>
              </Stack>
              <Stack>
                <h5>Spinner</h5>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Spinner animation="border">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </Stack>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Spinner animation="border" variant="primary" />
                  <Spinner animation="border" variant="secondary" />
                  <Spinner animation="border" variant="success" />
                  <Spinner animation="border" variant="danger" />
                  <Spinner animation="border" variant="warning" />
                  <Spinner animation="border" variant="info" />
                  <Spinner animation="border" variant="light" />
                  <Spinner animation="border" variant="dark" />
                </Stack>
                <Stack direction="horizontal" gap={3} className="flex-wrap align-items-center">
                  <Spinner animation="border" variant="primary" size="sm" />
                  <Spinner animation="border" variant="primary" />
                </Stack>
              </Stack>
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={setIsShow}>
              닫기
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};
