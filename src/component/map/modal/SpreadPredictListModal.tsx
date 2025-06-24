/**
 * 설명: 확산 예측 내역 모달
 **/
import Icon from '@mdi/react';
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@mdi/js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CommonModalProps } from '@/interface/admin/CommonTypeInterface.tsx';
import RealGrid from '@/pages/publish/RealGrid.tsx';

const SpreadPredictListModal = ({ setIsShow }: CommonModalProps) => {
  return (
    <div className="modal modal-position width-xl" style={{ top: '55px', left: '880px' }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <Modal.Header>
            <Modal.Title>확산예측 내역</Modal.Title>
            <div className="ms-auto">
              <Button variant="link-dark" size="sm">
                <Icon path={mdiWindowMinimize} title="최소화" className="mpci mdi mdi-window-minimize" />
              </Button>
              <Button variant="link-dark" size="sm">
                <Icon path={mdiWindowMaximize} title="최대화" className="mpci mdi mdi-window-maximize" />
              </Button>
              <Button variant="link-dark" size="sm" onClick={setIsShow}>
                <Icon path={mdiWindowClose} title="창닫기" className="mpci mdi mdi-window-close" />
              </Button>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="realgrid-group">
              <RealGrid />
            </div>
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

export default SpreadPredictListModal;
