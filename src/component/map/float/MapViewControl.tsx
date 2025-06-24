/**
 * 설명: 지도 상단 지도 종류 변경
 **/
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

interface IProps {
  setIsShow10: VoidFunction;
  setIsShow11: VoidFunction;
}
const MapViewControl = ({ setIsShow10, setIsShow11 }: IProps) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="map-viewer">
      <Collapse in={open}>
        <div className="viewer-menu">
          <div className="viewer-btn-group" onClick={setIsShow10}>
            <Button variant="viewer">확산 예측 시뮬레이션</Button>
          </div>
          <div className="viewer-btn-group">
            <Button variant="viewer">OSM</Button>
            <Button variant="viewer">해아름지도</Button>
            <Button variant="viewer">백지도</Button>
            <Button variant="viewer">흑지도</Button>
          </div>
          <div className="viewer-btn-group">
            <Button variant="viewer">UTM 격자(백)</Button>
            <Button variant="viewer">UTM 격자(흑)</Button>
          </div>
          <div className="viewer-btn-group" onClick={setIsShow11}>
            <Button variant="viewer">레이어</Button>
          </div>
        </div>
      </Collapse>
      <div className="viewer-btn-group">
        <Button variant="viewer" onClick={() => setOpen(!open)}>
          {open ? (
            <Icon path={mdiChevronRight} title="펼침" className="mpci mdi mdi-chevron-right" />
          ) : (
            <Icon path={mdiChevronLeft} title="닫침" className="mpci mdi mdi-chevron-left" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default MapViewControl;
